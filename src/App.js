import { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const videoRef = useRef();
    useEffect(() => {
        document.addEventListener(
            "scroll",
            function () {
                if (isInViewport(videoRef.current)) {
                    videoRef.current.play();
                }
            },
            {
                passive: true,
            }
        );
    }, []);
    return (
        <div className="App">
            <div style={{ height: "100vh" }}></div>
            <video ref={videoRef} src="./video.mp4" controls preload="auto"></video>
        </div>
    );
}

export default App;
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
