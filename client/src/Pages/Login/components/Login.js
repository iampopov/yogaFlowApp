import React from "react";
import "../../../styles/Login.css"

function Login() {
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">Y<i class="fas fa-peace"></i><strong>GI</strong></h1>
                <p className="lead"><strong>Find Your Flow</strong></p>
                <hr className="my-4"></hr>
                <p className="lead"><strong>For yogis alike, imorove your mind, body, and soul.</strong></p>
                <a className="btn btn-lg" href="#" role="button">Sign Up</a>
                <a className="btn btn-lg" href="#" role="button">Sign In </a>
            </div>


            <div className="signUp">
                <form>
                    <div className="form-group">
                        <label for="exampleInputPassword1"><strong>Name</strong></label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>

                    <hr></hr>

                    <div className="form-group">
                        <label for="exampleInputEmail1"><strong>Email Address</strong></label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>

                    <hr></hr>

                    <div className="form-group">
                        <label for="exampleInputPassword1"><strong>Username</strong></label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>

                    <hr></hr>

                    <div className="form-group">
                        <label for="exampleInputPassword1"><strong>Password</strong></label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>

                    <hr></hr>

                    <h3>Favorites</h3>
                    <p>Select your favorite yoga categories</p>

                    <hr></hr>

                    <div className="types">
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Vigorous Vinyasas</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck2"></input>
                            <label className="form-check-label" for="exampleCheck2">Ashtanga</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck3"></input>
                            <label className="form-check-label" for="exampleCheck3">Power Yoga</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck4"></input>
                            <label className="form-check-label" for="exampleCheck4">Jivamukti</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck5"></input>
                            <label className="form-check-label" for="exampleCheck5">Kali Ray TriYoga</label>
                        </div>
                    </div>


                    <div className="things">
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck6"></input>
                            <label className="form-check-label" for="exampleCheck6">Relief</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck7"></input>
                            <label className="form-check-label" for="exampleCheck7">Energy</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck8"></input>
                            <label className="form-check-label" for="exampleCheck8">Healing</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck9"></input>
                            <label className="form-check-label" for="exampleCheck9">Flexibility</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck10"></input>
                            <label className="form-check-label" for="exampleCheck10">Strength</label>
                        </div>
                    </div>


                    <button type="button" className="btnSubmit btn-lg btn-block">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Login;