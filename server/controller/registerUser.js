const UserModel = require("../models/UserModel");
const OTP = require("../models/OTP/OTP");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECREAT_KEY;

async function signup(request, response) {
  try {
    const { name, email, password, profile_pic, otp } = request.body;

    // Check if all required fields are provided
    console.log("KI HAAL CHAAL");
    if (!name || !email || !password || !otp) {
      return response.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if the user already exists
    console.log("Chalo ab chalne lga");
    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      return response.status(400).json({
        message: "User already exists",
        error: true,
      });
    }

    // Find the most recent OTP for the email
    const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log("Recent Otp ", recentOtp);

    // Validate OTP
    if (recentOtp.length === 0) {
      return response.status(400).json({
        success: false,
        message: "OTP not found",
      });
    } else if (otp !== recentOtp[0].otp) {
      return response.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const payload = {
      name,
      email,
      profile_pic,
      password: hashedPassword,
    };

    const user = new UserModel(payload);
    const userSave = await user.save();

    return response.status(201).json({
      message: "User created successfully",
      data: userSave,
      success: true,
    });

  } catch (error) {
    console.log("KI HOGE");
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = signup;
