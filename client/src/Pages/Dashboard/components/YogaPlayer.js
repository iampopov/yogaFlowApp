import ReactPlayer from "react-player";
import React from "react"
const YogaPlayer = (props) => {
    const { handleBack, handlePlay, handleForward, handleProgress, height, playerProps, handlePlayButton, handlePause, handleVolume, handleDuration, handleSeekMouseDown, handleSeekMouseUp, inref } = props
    let width = "0%"
    if (playerProps.url.includes("youtube.com")) {
        width = "100%"
    }

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
                                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.shape.mdpcdn.com%2Fsites%2Fshape.com%2Ffiles%2Fstyles%2Fslide%2Fpublic%2F2._side-plank-420x420_0.jpg&f=1&nofb=1"
                                        alt="" />
                                </div>
                                <div className="col-5">
                                    <p>Name of Pose</p>
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