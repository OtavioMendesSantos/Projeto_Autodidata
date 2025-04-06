import React, { useEffect, useRef, useState } from 'react'
import videoSrc from '../assets/video.mp4'
import Button from '../components/Button'

const Video = () => {
    // Adicione funcionalidades ao player de vídeo:

    // 1 - Use um estado reativo para verificar se o vídeo está tocando ou não.
    // 2 - Função para avançar o vídeo em +2s.
    // 3 - Função para alterar o playbackRate do vídeo.
    // 4 - Função para entrar/sair do modo pictureInPicture.
    // 5 - Função para alternar o som (mudo/não mudo) do vídeo.

    const videoRef = useRef<HTMLVideoElement>(null)
    const [running, setRunning] = useState(false)
    const [playbackRate, setPlaybackRate] = useState(1)
    const [muted, setMuted] = useState(false)

    useEffect(() => {
        if (videoRef.current !== null) {
            videoRef.current.volume = 0.5
            videoRef.current.addEventListener('play', () => {
                console.log('Video is playing')
            })
        }
    }, [])

    function handlePlay() {
        if (videoRef.current) {
            const videoRunning = videoRef.current.paused ? false : true
            setRunning(videoRunning)
            if (videoRunning) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
        }
    }

    function handleForward() {
        if (videoRef.current) {
            videoRef.current.currentTime += 2
        }
    }

    function handlePlaybackRate() {
        if (videoRef.current) {
            setPlaybackRate(playbackRate === 1 ? 2 : 1)
            if (videoRef.current.playbackRate === 1) {
                videoRef.current.playbackRate = 2
            } else {
                videoRef.current.playbackRate = 1
            }
        }
    }

    function pictureInPicture() {
        if (videoRef.current) {
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture()
            } else {
                videoRef.current.requestPictureInPicture()
            }
        }
    }

    function handleMute() {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setMuted(videoRef.current.muted)
        }
    }

    return (
        <div>
            <video
                ref={videoRef}
                src={videoSrc}
                controls
                loop
            />
            <div
                className="flex"
                style={{
                    gap: '1rem',
                    marginTop: '1rem',
                    flexWrap: 'wrap',
                }}
            >
                <Button onClick={handlePlay}>
                    {running ? 'Play' : 'Pause'}
                </Button>
                <Button onClick={handleForward}>
                    +2s
                </Button>
                <Button onClick={handlePlaybackRate}>
                    {playbackRate === 1 ? '2x' : '1x'}
                </Button>
                <Button onClick={pictureInPicture}>
                    Picture in Picture
                </Button>
                <Button onClick={handleMute}>
                    {muted ? 'Unmute' : 'Mute'}
                </Button>
                <Button onClick={() => { videoRef.current ? videoRef.current.currentTime = 0 : null; }}>
                    Reset
                </Button>
            </div>
        </div>
    )
}

export default Video