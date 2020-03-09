import React, { useState } from "react";
import API from "../../../utils/API";

const SignUpForm = () => {

    const [formObject, setFormObject] = useState({
        student_name: "",
        email: "",
        password: "",
        login: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formObject)
        API.createNewUser(formObject)
            .then(newUser => {
                setFormObject({
                    student_name: "",
                    email: "",
                    password: "",
                    login: ""
                })
            })
            .catch(err => {
                console.log("err")
            })
    }

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormObject({ ...formObject, [name]: value })
    }


    return (<div className="signUp">
        <form>
            <div className="form-group">
                <label htmlFor="Inputstudent_name"><strong>Name</strong></label>
                <input type="text" name="student_name" onChange={handleChangeForm} value={formObject.student_name} className="form-control" id="Inputstudent_name"></input>
            </div>

            <hr></hr>

            <div className="form-group">
                <label htmlFor="Inputemail"><strong>Email Address</strong></label>
                <input type="email" name="email" onChange={handleChangeForm} value={formObject.email} className="form-control" id="Inputemail" aria-describedby="emailHelp"></input>
            </div>

            <hr></hr>

            <div className="form-group">
                <label htmlFor="Inputlogin"><strong>Username</strong></label>
                <input type="text" name="login" onChange={handleChangeForm} value={formObject.login} className="form-control" id="Inputlogin"></input>
            </div>

            <hr></hr>

            <div className="form-group">
                <label htmlFor="InputPassword"><strong>Password</strong></label>
                <input type="password" name="password" onChange={handleChangeForm} value={formObject.password} className="form-control" id="InputPassword"></input>
            </div>

            <hr></hr>
        
            <h3>Favorites</h3>
            <p>Select your favorite yoga categories</p>

            <hr></hr>

            <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" for="exampleCheck1">Please check box if you are a yoga teacher</label>
                </div>

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


            <button type="submit" className="btnSubmit btn-lg btn-block" onClick={handleSubmit}>Sign Up</button>
        </form>
    </div>);
}

export default SignUpForm;