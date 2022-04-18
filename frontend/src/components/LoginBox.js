const LoginBox = () =>{
    return (
        <div className = {"divLoginBox"}>
            <div className = {"divInputdetails"}>
                <input type = "text" className = {"inputText"} placeholder = {"Username"}></input> 
                <input type = "password" className = {"inputText"} placeholder = {"Password"}></input>
            </div>
            <div className={"divButtons"}>
                <button className = {"buttonLogin"}>
                    <span>Login</span>
                </button>
            </div>
        </div>
    );
}

export default LoginBox;