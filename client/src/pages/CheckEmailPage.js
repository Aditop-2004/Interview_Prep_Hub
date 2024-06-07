import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import uploadFile from "../helpers/uploadFile";
import axios from "axios";
import toast from "react-hot-toast";
import { PiUserCircle } from "react-icons/pi";
import sideimage from "../../src/assets/sideimage.png";
import icon from "../../src/assets/interview_icon.png";

const CheckEmailPage = () => {
  const [data, setData] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;

    try {
      const response = await axios.post(URL, data);

      toast.success(response.data.message);

      if (response.data.success) {
        setData({
          email: "",
        });
        navigate("/password", {
          state: response?.data?.data,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex mt-5 justify-center items-center">
      <div style={{ height: "100%", width: "50%" }}>
        <img
          src={sideimage}
          alt="description of image"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="mt-5 ml-4 bg-indigo-100"
        style={{
          height: "400px",
          width: "40%",
          borderRadius: "5%",
        }}
      >
        <div className=" w-full max-w-md  rounded overflow-hidden p-4 mx-auto">
          <div className="w-fit mx-auto mb-2">
            {/* <PiUserCircle size={80} /> */}
            <img src={icon} />
          </div>

          <div className="text-2xl font-bold text-center text-black">
            Welcome to InterviewPrepHub
          </div>

          <form className="grid gap-4 mt-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 text-xl">
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

            <button className="bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide">
              Let's Go
            </button>
          </form>

          <p className="my-3 text-center">
            New User ?{" "}
            <Link to={"/register"} className="hover:text-primary font-semibold">
              Register
            </Link>
          </p>
          <p className="my-3 text-center">
            <Link to={"/forgot-password"} className="hover:text-primary font-semibold">
                Forget Password
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckEmailPage;