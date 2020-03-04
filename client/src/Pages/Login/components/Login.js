import React from "react";
import "../../../styles/Login.css"

function Login() {
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">Yogi!</h1>
                <p className="lead">Find your flow</p>
                <hr className="my-4"></hr>
                <p>For yogis alike, imorove your mind, body, and soul.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Sign Up</a>
                <a className="btn btn-danger btn-lg" href="#" role="button">Sign In </a>
            </div>


            <div className="signUp">
                <form>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>

                    <hr></hr>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>

                    <hr></hr>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Username</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>

                    <hr></hr>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>

                    <hr></hr>

                    <h3>Favorites</h3>


                    <div className="types">
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Vigorous Vinyasas</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Ashtanga</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Power Yoga</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Jivamukti</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Kali Ray TriYoga</label>
                        </div>
                    </div>


                    <div className="things">
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Relax </label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Energy</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Sweat</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Stretch</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Strength</label>
                        </div>
                    </div>


                    <button type="button" className="btnSubmit btn-secondary btn-lg btn-block">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Login;