import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({setUser}) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(e){
        e.preventDefault();

        if(!userName || !password){
            setError("All fields are required to fill")
        }else{
            fetch("https://dummyjson.com/auth/login",{
                method: "POST",
                headers: {"Content-Type": "application"},
                body: JSON.stringify({
                    userName: userName,
                    password: password,
                }),
            }).then(async (response) => {
                console.log(response);
                if(response.status === 200){
                    console.log("success");
                    const userInfo = await response.json();
                    setUser(userInfo)
                    navigate("/profile")
                }else{
                    setError(`${response.status}: ${response.statusText || "Failed athentication"}`);
                }
            })
            .catch((error)=>{
                console.log(error);
                setError(error.message);
            });
        }
    }

    return(
        <div>
            <div className="login-page">
                <div className="welcome-title">Welcome back! 👋</div>
                <div className="sign-title">Sign in to your account</div>
                <div className="label">Username</div>
                <input type="text"
                    onChange={(e) => setUserName(e.target.value)} value={userName}
                />
                <div className="label">Password</div>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)} value={password}
                />
                <div className="continue-btn">
                    <button onClick={handleLogin}>CONTINUE</button>
                </div>
                <div className="forget-password-title">Forget your password?</div>
                <p style={{color: "red", textAlign: "center"}}>{error?error:""}</p>
            </div>
            <div className="no-account-title">Don't have an account? <span>Sign up</span></div>
        </div>
    );
};

const mapDispatchToProps = (dispatch)=>{
    return{
        setUser: (userInfo) => dispatch({type: "SET_USER", payload: userInfo}),
    };
};

export default connect(null, mapDispatchToProps)(Signin);