import React, { useState, useEffect } from "react";
import song from "../static/music.mp3";

const useAudio = () => {
    const [audio] = useState(new Audio(song));
    const [playing, setPlaying] = useState(false);

    console.log(audio);
    
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
    [playing]
    );
    
    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);
    
    return [playing, toggle];
};

const Player = () => {
    const [playing, toggle] = useAudio();

    return (
        <div>
            <button onClick={toggle}>{playing ? "Pause" : "Play Sound"}</button>
        </div>
    );
};

export default Player;