import React, { useEffect, useRef } from 'react'
import videoSrc from '../assets/video.mp4'
import Button from '../components/Button'

const Video = () => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
      if (videoRef.current !== null) {
        videoRef.current.volume = 0.5
        videoRef.current.addEventListener('play', () => {
          console.log('Video is playing')
        })
      }
    }, [])

    return (
        <div>
            <video
                ref={videoRef}
                src={videoSrc}
            />
            <div className="flex" style={{ gap: '1rem', marginTop: '1rem' }}>
                <Button onClick={() => { videoRef.current?.play(); }}>
                    Play
                </Button>
                <Button onClick={() => { videoRef.current?.pause(); }}>
                    Pause
                </Button>
                <Button onClick={() => { videoRef.current ? videoRef.current.currentTime = 0 : null; }}>
                    Reset
                </Button>
            </div>
        </div>
    )
}

export default Video