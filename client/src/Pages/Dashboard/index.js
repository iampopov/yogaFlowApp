import React, { useState, useEffect, useRef } from "react";
import YogaPlayer from "./components/YogaPlayer"
import "../../styles/YogaPlayer.css";


const Dashboard = () => {
    useEffect(() => {
        console.log("useEffect")
        console.log(document.getElementById("playerDiv"))
        setPlayerHeight(Math.ceil(document.getElementById("playerDiv").clientWidth * 0.6466666))
    }, [YogaPlayer])


    const refff = useRef(null);

    const [playerState, setPlayerState] = useState({
        url: 'https://www.youtube.com/watch?v=b1H3xO3x_Js',
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
        loop: true,
        seeking: false
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