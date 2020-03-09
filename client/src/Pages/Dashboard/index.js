import React, { useState, useEffect, useRef } from "react";
import YogaPlayer from "./components/YogaPlayer"
import "../../styles/YogaPlayer.css";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API"

const Dashboard = (props) => {
    const { id } = useParams();
    const refff = useRef(null);

    const [playerState, setPlayerState] = useState({
        url: "",
        pip: false,
        playing: false,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
        seeking: false,
        poses: [],
        flow: {}
    });
    const [playerHeight, setPlayerHeight] = useState()
    const { url,
        pip,
        seeking,
        playing,
        controls,
        light,
        volume,
        muted,
        played,
        loaded,
        duration,
        playbackRate,
        loop } = playerState;



    useEffect(() => {
        loadFlow();
        setPlayerHeight(Math.ceil(document.getElementById("playerDiv").clientWidth * 0.6466666))
    }, [])

  
 
    
    const loadFlow = () => {
        API.findFlow(id)
        .then((res) => { 
            let temp = {};
            if (res.data) {
                temp = { ...temp, flow: res.data }
                if (res.data.sound) {
                    console.log(res.data.sound)
                    temp = { ...temp, url: res.data.sound }
                    if (!temp.url.includes("youtube.com")) {
                        console.log("yeah buddy") 
                        API.findFlowContent(id).then((data2) => {
                            console.log(data2.data)
                            temp = { ...temp, poses: data2.data }
                            setPlayerState({ ...playerState,...temp})
                        })
                    }else{
                        console.log(temp)
                        setPlayerState({ ...playerState,...temp})
                    }
                    //     if(!res.data.sound.includes("youtube.com")){
                    //     API.findFlowContent(id).then((data2)=>{
                    //        console.log( data2)
                    //     })
                    // }}
                }
            }
            
            
        })
    }


    

  

    /* https://yogaflowapp.s3.us-east-2.amazonaws.com/oh-shit_2.mp3   https://www.youtube.com/watch?v=b1H3xO3x_Js*/

   

    const handlePlayButton = () => {
        setPlayerState({ ...playerState, playing: !playing })
    }

    const handlePlay = () => {
        console.log('onPlay')
        setPlayerState({ ...playerState, playing: true })
    }

    const handleBack = () => {

    }

    const handleForward = () => {

    }

    const handlePause = () => {
        setPlayerState({ ...playerState, playing: false })
    }

    const handleSeekMouseDown = e => {
        setPlayerState({ ...playerState, seeking: true })
    }

    const handleSeekMouseUp = e => {
        console.log(refff.current)
        setPlayerState({ ...playerState, seeking: false })
        refff.current.seekTo(parseFloat(e.target.value))
    }

    const handleDuration = (e) => {
        console.log(played)
        setPlayerState({ ...playerState, played: parseFloat(e.target.value) })
    }


    const handleVolume = (e) => {

        setPlayerState({ ...playerState, volume: e.target.value })
    }

    const handleProgress = state => {
        // We only want to update time slider if we are not currently seeking
        if (!seeking) {
            setPlayerState({ ...playerState, played: state.played })
        }
    }

    document.addEventListener('resize', function () {
        // setViewPortwidth(window.innerWidth)
        // let playerHeight = document.getElementById("playerDiv").firstChild.offsetWidth;
        setPlayerHeight(Math.ceil(document.getElementById("playerDiv").clientWidth * 0.57))
    });

    return (
        <YogaPlayer
            handlePlay={handlePlay}
            inref={refff}
            handlePause={handlePause}
            height={playerHeight} playerProps={playerState}
            handleSeekMouseUp={handleSeekMouseUp}
            handleDuration={handleDuration}
            handleVolume={handleVolume}
            handlePlayButton={handlePlayButton}
            handleSeekMouseDown={handleSeekMouseDown}
            handleProgress={handleProgress}
        />
        // <div className='player-wrapper'>
        /* <ReactPlayer
            // ref={this.ref}
            className='react-player'
            width='100%'
            height='100%'
            url={url}
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={this.handlePlayButton}
            onEnablePIP={this.handleEnablePIP}
            onDisablePIP={this.handleDisablePIP}
            onPause={this.handlePause}
            onBuffer={() => console.log('onBuffer')}
            onSeek={e => console.log('onSeek', e)}
            onEnded={this.handleEnded}
            onError={e => console.log('onError', e)}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
        />
    </div> */
    )
}

export default Dashboard;