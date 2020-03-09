import ReactPlayer from "react-player";
import React from "react"
const YogaPlayer = (props) => {
    const { handleBack, handlePlay, handleForward, height, playerProps,handlePlayButton, handlePause, handleVolume, handleDuration, handleSeekMouseDown, handleSeekMouseUp, inref } = props
    return (
        <div className="row">
            <div className="col-12" id="playerDiv" style={{ height: height + "px" }}>
                <ReactPlayer 
                ref={inref} {...playerProps}  
                width={"100%"} height={"100%"}
                onPause={handlePause} 
                onPlay={handlePlay}
                onBuffer={() => console.log('onBuffer')}/>
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