import React, { useState, useEffect } from "react";
import YogaPlayer from "./components/YogaPlayer"

const Dashboard = () => {
    useEffect(() => {
        console.log("useEffect")
        console.log(document.getElementById("playerDiv"))
        setPlayerHeight(Math.ceil(document.getElementById("playerDiv").clientWidth * 0.6466666))
    }, [YogaPlayer])

    const [playerState, setPlayerState] = useState({
        url:'https://yogaflowapp.s3.us-east-2.amazonaws.com/oh-shit_2.mp3 ' ,
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
        loop: true
    });
    const [playerHeight, setPlayerHeight] = useState()
    const { url,
        pip,
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

    const handlePlay = () => {
        console.log('onPlay')
        setPlayerState({ ...playerState,playing: true })
    }

    const handleBack = () => {

    }

    const handleForward = () => {

    }

    const handlePause = () =>{
        console.log('onPause')
        setPlayerState({ ...playerState,playing: false })
    }


    document.addEventListener('resize', function () {
        // setViewPortwidth(window.innerWidth)
        // let playerHeight = document.getElementById("playerDiv").firstChild.offsetWidth;
        setPlayerHeight(Math.ceil(document.getElementById("playerDiv").clientWidth * 0.57))
    });

    return (
        <YogaPlayer height={playerHeight} playerProps={playerState} handlePause={handlePause} handlePlay={handlePlay} />
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
            onPlay={this.handlePlay}
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