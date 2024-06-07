import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import uploadFile from "../helpers/uploadFile";
import axios from "axios";
import toast from "react-hot-toast";
import image from "./hello.png"; // Make sure this path is correct
import { useDispatch } from "react-redux";
// import {toast} from '@chakra-ui/react';
import { setSignupData } from "../redux/userSlice";
import { sendOtp } from "../services/operations/authAPI";
const RegisterPage = () => {
  const dispatch=useDispatch();
  // const toast=useToast();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: "",
  });
  const [uploadPhoto, setUploadPhoto] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];
    const uploadPhoto = await uploadFile(file);
    setUploadPhoto(file);
    setData((prev) => ({
      ...prev,
      profile_pic: uploadPhoto?.url,
    }));
  };


  const handleClearUploadPhoto = (e)=>{
    e.stopPropagation()
    e.preventDefault()
    setUploadPhoto(null)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    // e.stopPropagation()
    const {name,email,password,profile_pic}=data;
    if(!name || !email || !password){
      toast({
        title: 'Fill in the details',
        description: 'Lack of info',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }
    const signupData = {
      ...data,
    };
    console.log(signupData)
    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(data.email, navigate));
    // Reset
    setData({
      name: '',
      email: '',
      password: '',
    });
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/register`

    try {
      const response = await axios.post(URL, data);
      toast.success(response.data.message);

      if (response.data.success) {
        setData({
          name: "",
          email: "",
          password: "",
          profile_pic: "",
        });

        navigate("/email");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex mt-5 justify-center items-center">
      {/* Image section */}
      <div className="hidden md:block w-7/12">
        <img
          src={image} // Ensure the image path is correct
          alt="Register Illustration"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Register box section */}
      <div
        className="w-full max-w-md rounded overflow-hidden p-4 mx-auto md:w-1/3 bg-indigo-100"
        style={{
          height: "500px",
          marginBottom: "20px",
          borderRadius: "7%",
        }} // Set background color using inline style
      >
        <h3
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Welcome to Interview Prep Hub
        </h3>

        <form className="grid gap-4 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter your name"
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              value={data.name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="enter your password"
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="profile_pic">
              Photo :
              <div className="h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer">
                <p className="text-sm max-w-[300px] text-ellipsis line-clamp-1">
                  {uploadPhoto?.name
                    ? uploadPhoto?.name
                    : "Upload profile photo"}
                </p>
                {uploadPhoto?.name && (
                  <button
                    className="text-lg ml-2 hover:text-red-600"
                    onClick={handleClearUploadPhoto}
                  >
                    <IoClose />
                  </button>
                )}
              </div>
            </label>
            <input
              type="file"
              id="profile_pic"
              name="profile_pic"
              className="bg-slate-100 px-2 py-1 focus:outline-primary hidden"
              onChange={handleUploadPhoto}
            />
          </div>
          <button className="bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide">
            Register
          </button>
        </form>
        <p className="my-3 text-center">
          Already have an account?{" "}
          <Link to={"/email"} className="hover:text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
