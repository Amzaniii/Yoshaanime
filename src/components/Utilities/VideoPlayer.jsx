"use client"

import React, { useState } from "react"
import Youtube from "react-youtube"

const option = {
        width: "300",
        height: "250"
    }

    const Player = ({ youtubeId, onClose}) => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={onClose}
                    className="text-color-primary float-right bg-color-secondary px-3 mb-1"
                >
                    X
                </button>
                <Youtube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Video is broken, please try another.")}
                />
            </div>
        )
    }

    const ButtonOpenPlayer = ({ onOpen }) => {
        return (
            <button
                onClick={onOpen}
                className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
            >
                Tonton Trailer
            </button>
        )
    }


const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const togglePlayer = () => setIsOpen((prev) => !prev);

    // const handleVideoPlayer = () => {
    //     setIsOpen((prevState) => !prevState)
    // }

  return isOpen ? (
        <Player youtubeId={youtubeId} onClose={togglePlayer} />
    ) : (
        <ButtonOpenPlayer onOpen={togglePlayer} />
    );

}

export default VideoPlayer