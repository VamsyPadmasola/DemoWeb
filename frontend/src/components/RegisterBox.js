const RegisterBox = () =>{
    return (
        <div className = {"divRegisterBox"}>
            <div className = {"divInputdetails"}>
                <input type = "text" className = {"inputText-small"} placeholder = {"First Name"}></input> 
                <input type = "text" className = {"inputText-small"} placeholder = {"Last Name"}></input>
                <input type = "text" className = {"inputText-small"} placeholder = {"Gender"}></input>
                <input type = "number" className = {"inputText-small"} placeholder = {"Contact"}></input>
                <input type = "text" className = {"inputText"} placeholder = {"Username"}></input>
                <input type = "Password" className = {"inputText-small"} placeholder = {"Password"}></input>
                <input type = "Password" className = {"inputText-small"} placeholder = {"Confirm Password"}></input>
            </div>
            <div className={"divButtons"}>
                <button className = {"buttonLogin"}>
                    <span>Register</span>
                </button>
            </div>
        </div>
    );
}

export default RegisterBox;