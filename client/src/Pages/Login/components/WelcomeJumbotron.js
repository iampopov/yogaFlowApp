import React from "react";

const WelcomeJumbotron = (props) => {
    return (<div className="jumbotron">
        <h1 className="display-4">Y<i className="fas fa-peace"></i><strong>GI</strong></h1>
        <p className="lead"><strong>Find Your Flow</strong></p>
        <hr className="my-4"></hr>
        <p className="lead"><strong>For yogis alike, improve your mind, body, and soul.</strong></p>
        <a className="btn btn-lg" href="#" role="button" onClick={props.handleFormRender}>Sign Up</a>
        <a className="btn btn-lg" href="#" role="button" onClick={e => { props.handleFormRender(e, true) }}>Sign In </a>
    </div>)
}

export default WelcomeJumbotron;