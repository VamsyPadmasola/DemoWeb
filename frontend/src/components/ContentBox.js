import { useState } from "react";
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";

const ContentBox = () =>{

    const [LoginState, setLoginState] = useState(0);

    const getRegisterState = () => {
        setLoginState(1);
    }

    const gettLoginState = () => {
        setLoginState(0);
    }

    return (
        <div className = {"divContentBox"}>
            <div className = {"divContentBox-title"}>
                <button id = {"btnTitleLogin"} className = {LoginState === 0 ? "btnTitle active" : "btnTitle"} onClick = {gettLoginState}>
                    <span className = {"spnContentBox-title"}>Login</span>
                </button>
                <button id = {"btnTitleRegister"} className = {LoginState === 1 ? "btnTitle active" : "btnTitle"} onClick = {getRegisterState}>
                    <span className = {"spnContentBox-title"}>Register</span>
                </button>
            </div>
            {
                LoginState === 0 
                ?
                <LoginBox></LoginBox>
                :
                <RegisterBox></RegisterBox>
            }
        </div>
        
    );
}

export default ContentBox;