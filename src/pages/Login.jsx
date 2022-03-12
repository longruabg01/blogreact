import React from "react";
import { authentication } from "../firebase-config";
import { signInWithPopup,  GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}) {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re)=>{
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
      console.log(re);
      return signInWithGoogle(setIsAuth, provider);
    })
  }

  return (
    <div className='loginPage'>
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;