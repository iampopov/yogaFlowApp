import React from "react";
import "../../../styles/Card.css"

function Card() {
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
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>

                    <hr></hr>
                    {/* {/*  */}
                    <h3>Types</h3>


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


                    <h3>Things</h3>
                    <div className="things">


                        <div className="things">
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" for="exampleCheck1">Realxing</label>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" for="exampleCheck1">Sweat</label>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" for="exampleCheck1">Pain</label>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" for="exampleCheck1">Breath</label>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" for="exampleCheck1">help</label>
                            </div>
                        </div>

                    </div>














                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Card;