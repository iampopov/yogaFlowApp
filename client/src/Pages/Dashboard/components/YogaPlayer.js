import ReactPlayer from "react-player"
import React from "react"
const YogaPlayer = (props) => {
    const { handleBack, handlePlay, handleForward, height, playerProps, handlePause } = props
    return (
        <div className="row">
            <div className="col-12" id="playerDiv" style={{ height: height + "px" }}>
                <ReactPlayer {...playerProps} width={"100%"} height={"100%"} />
                {/* https://yogaflowapp.s3.us-east-2.amazonaws.com/oh-shit_2.mp3   https://www.youtube.com/watch?v=b1H3xO3x_Js*/}


                <nav className="navbar navbar-dark bg-primary justify-content-center bg-dark">

                    <div className=" btn-group justify-content-center" role="group" aria-label="Basic example">
                        <button type="button" onClick={handleBack} className="btn btn-secondary text-center"><i className="fas fa-backward"></i></button>
                        <button type="button" onClick={!playerProps.playing ? handlePlay : handlePause} className="btn btn-secondary rounded-circle text-center">{!playerProps.playing ? <i className="fas fa-play"></i> : <i class="fas fa-pause"></i>}</button>
                        <button type="button" onClick={handleForward} className="btn btn-secondary text-center"><i className="fas fa-forward"></i></button>
                    </div>

                </nav>
            </div>
        </div>

    )
}


export default YogaPlayer;