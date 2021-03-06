import React from "react";
import {Link} from "react-router-dom"


const SignInForm = () => {
    return (
        <div className="signUp">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1"><strong>Email Address</strong></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>

                <hr></hr>

                <div className="form-group">
                    <label for="exampleInputPassword1"><strong>Password</strong></label>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>

                <hr></hr>

                <Link to="/home" > 
                <button type="button" className="btn btn-lg btn-block">Sign in</button>
                </Link>


            </form>
        </div>)
}

export default SignInForm;