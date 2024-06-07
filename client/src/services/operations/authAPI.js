import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
// import { setLoading, setToken } from "../../redux/userSlice"
  // export  function login(email, password, navigate) {
  //   return async (dispatch) => {
  //     const toastId = toast.loading("Loading...")
  //     dispatch(setLoading(true))
  //     try {
  //       const response = await apiConnector("POST", LOGIN_API, {
  //         email,
  //         password,
  //       })
  
  //       console.log("LOGIN API RESPONSE............", response)
  
  //       if (!response.data.success) {
  //         throw new Error(response.data.message)
  //       }
  
  //       toast.success("Login Successful")
  //       dispatch(setToken(response.data.token))
  //       localStorage.setItem("token", JSON.stringify(response.data.token))
  //       localStorage.setItem("user", JSON.stringify(response.data.user))
  //       navigate("/community")
  //     } catch (error) {
  //       console.log("LOGIN API ERROR............", error)
  //       toast.error("Login Failed")
  //     }
  //     dispatch(setLoading(false))
  //     toast.dismiss(toastId)
  //   }
  // }

  export function sendOtp(email, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      // dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", "http://localhost:8080/api/sendotp", {
          email,
        })
        console.log("SENDOTP API RESPONSE............", response)
  
        console.log(response.data.success)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("OTP Sent Successfully")
        navigate("/verify-email")
      } catch (error) {
        console.log("SENDOTP API ERROR............", error)
        toast.error("Could Not Send OTP")
      }
      // dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
  
  export function signUp(
    name,
    email,
    password,
    otp,
    navigate
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      
      // dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", "http://localhost:8080/api/register", {
          name,
          email,
          password,
          otp
        }) 
        if (!response){
          toast.error("Signup Failed")
          throw new Error(response.data.message)
        }
  
        console.log("SIGNUP API RESPONSE............", response)
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify({...response.data.user,token:response.data.token}))
        // localStorage.setItem("userId",JSON.stringify(response.data.user._id))
        localStorage.setItem("LoggedIn",JSON.stringify("True"))
  
        toast.success("Signup Successful")
        toast.success("Please Login Again to Continue")
        navigate("/email")
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Wrong OTP Please Try Again!")
        navigate("/register")
        // dispatch(setLoading(false))
      }
     
      // dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  export function getPasswordResetToken(email , setEmailSent) {
    return async(dispatch) => {
      // dispatch(setLoading(true));
      const toastId = toast.loading("Loading...")
      try{
        const response = await apiConnector("POST", "http://localhost:8080/api/reset-password-token", {email})
  
        console.log("RESET PASSWORD TOKEN RESPONSE....", response);
  
        if(!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Reset Email Sent");
        setEmailSent(true);
      }
      catch(error) {
        console.log("RESET PASSWORD TOKEN Error", error);
        toast.error("Failed to send email for resetting password");
      }
      // dispatch(setLoading(false));
      toast.dismiss(toastId)
    }
  }
  
  export function resetPassword(password, confirmPassword, token,navigate) {
    return async(dispatch) => {
      // dispatch(setLoading(true));
      const toastId = toast.loading("Loading...")
      try{
        const response = await apiConnector("POST","http://localhost:8080/api/reset-password", {password, confirmPassword, token});
  
        console.log("RESET Password RESPONSE ... ", response);
  
  
        if(!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Password has been reset successfully");
        navigate("/email");
      }
      catch(error) {
        console.log("RESET PASSWORD TOKEN Error", error);
        toast.error("Unable to reset password");
      }
      // dispatch(setLoading(false));
      toast.dismiss(toastId)
    }
  }