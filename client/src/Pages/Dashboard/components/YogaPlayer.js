import ReactPlayer from "react-player"
import React from "react"
const YogaPlayer = (props) => {

    return (<div className="row">
        <div className="col-12" id="playerDiv" style={{height:props.height+"px"}}>
            <ReactPlayer url='https://www.youtube.com/watch?v=v7AYKMP6rOE' playing={true} controls={false} volume={0.8} width={"100%"} height={"100%"}/>
        </div>
    </div>)
}

export default YogaPlayer;