import ReactPlayer from "react-player"
import React from "react"
const YogaPlayer = (props) => {

    return (
    <div className="row">
        <div className="col-12" id="playerDiv" style={{ height: props.height + "px" }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=v7AYKMP6rOE' playing={true} controls={false} volume={0.8} width={"100%"} height={"100%"} />


            <nav class="navbar navbar-dark bg-primary">

                <a class="navbar-brand" href="#">Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    </div>

    )
}



export default YogaPlayer;