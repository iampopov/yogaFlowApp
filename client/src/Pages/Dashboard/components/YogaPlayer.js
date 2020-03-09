import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react"
import API from "../../../utils/API";
const YogaPlayer = (props) => {
    const { handleBack, handlePlay, handleForward, handleProgress, height, playerProps, handlePlayButton, handlePause, handleVolume, handleDuration, handleSeekMouseDown, handleSeekMouseUp, inref } = props
    let width = "0%"
    if (playerProps.url.includes("youtube.com")) {
        width = "100%"
    }

    const [renderPose, setRenderPose] = useState({})
    useEffect(() => {
        if (playerProps.poses.length > 0) {
            API.findIndividualPose(playerProps.poses[0].PoseId).then(res => {
                setRenderPose(res.data);
            })
        }
        // var myVar = setInterval(myTimer, 1000);

        // function myTimer() {
        //     var d = new Date();
        //     var t = d.toLocaleTimeString();
        //     document.getElementById("demo").innerHTML = t;
        // }
        // function myStopFunction() {
        //     clearInterval(myVar);
        // }
    }, [playerProps]);

    const myTimer = () => {
        var d = new Date();
        var t = d.toLocaleTimeString();
    }

    
    const loadPose = (pose)=>{
        setRenderPose(pose);
    }
    // useEffect(()=>{},[])


    return (
        <div className="row">
            <div className="col-12" id="playerDiv" style={{ height: height + "px" }}>

                {width === "0%" ? (<div className="card-body">
                    <h2>Name of Flow</h2>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <img
                                        src={renderPose ? renderPose.picture : ""}
                                        alt="no worked" />
                                </div>
                                <div className="col-5">
                                    <p>Name of Pose: {renderPose.pose_name}</p>
                                    <p>Creator</p>
                                    <p>Timer Current Pose</p>
                                    <p>Timer Overall</p>
                                    <p>Teacher Notes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : <></>}

                <ReactPlayer
                    ref={inref} {...playerProps}
                    width={width} height={width}
                    onPause={handlePause}
                    onPlay={handlePlay}
                    onProgress={handleProgress}
                    onBuffer={() => console.log('onBuffer')} />
                {/* https://yogaflowapp.s3.us-east-2.amazonaws.com/oh-shit_2.mp3   https://www.youtube.com/watch?v=b1H3xO3x_Js*/}


                <nav className="navbar navbar-dark bg-primary bg-dark justify-content-between ">

                    <div className=" btn-group d-flex justify-content-center " role="group" aria-label="Basic example">
                        <button type="button" onClick={handleBack} className="btn btn-secondary text-center"><i className="fas fa-backward"></i></button>
                        <button type="button" onClick={handlePlayButton} className="btn btn-secondary rounded-circle text-center">{!playerProps.playing ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>}</button>
                        <button type="button" onClick={handleForward} className="btn btn-secondary text-center"><i className="fas fa-forward"></i></button>
                    </div>
                    <div className="d-flex justify-content-end align-items-center w-50">
                        <input type="range" value={playerProps.played} className="form-control-range align-bottom ml-1 mb-0"
                            onMouseDown={handleSeekMouseDown}
                            onChange={handleDuration}
                            onMouseUp={handleSeekMouseUp}
                            id="durationRange"
                            min="0" max="1" step="0.01" />
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                        <label id="volumeRangeLabel" htmlFor="volumeRange"><i className="fas fa-volume-up"></i></label>
                        <input type="range" value={playerProps.volume} className="form-control-range align-bottom ml-1 mb-0" onChange={handleVolume} id="volumeRange"
                            min="0" max="1" step="0.01" />
                    </div>


                </nav>
            </div>
        </div>

    )
}


export default YogaPlayer;
// ref={ref.useRef()}