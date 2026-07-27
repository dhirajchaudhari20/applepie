import React, { useState, useRef, useEffect } from 'react';

const AmbientMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Soothing, royalty-free cafe-style acoustic track
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error("Audio playback failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (vol > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="music-player-widget glass-card">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        loop
      />
      <div className="player-body">
        {/* Vinyl/CD Disk representation */}
        <div className={`disc-container ${isPlaying ? 'rotating' : ''}`}>
          <div className="disc-inner">
            <i className="fa-solid fa-compact-disc disc-icon"></i>
          </div>
        </div>

        {/* Track details & Visualizer */}
        <div className="player-details">
          <div className="track-info">
            <span className="track-title">Cafe Lounge Jazz</span>
            <span className="track-subtitle">Setting the mood</span>
          </div>

          <div className="visualizer">
            <span className={`bar ${isPlaying ? 'animating' : ''}`}></span>
            <span className={`bar ${isPlaying ? 'animating' : ''}`}></span>
            <span className={`bar ${isPlaying ? 'animating' : ''}`}></span>
            <span className={`bar ${isPlaying ? 'animating' : ''}`}></span>
            <span className={`bar ${isPlaying ? 'animating' : ''}`}></span>
          </div>
        </div>

        {/* Controls */}
        <div className="player-controls">
          <button onClick={togglePlay} className="control-btn play-pause-btn" aria-label={isPlaying ? "Pause" : "Play"}>
            <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
        </div>
      </div>

      {/* Progress slider & Volume */}
      <div className="player-footer">
        <div className="progress-container">
          <span className="time-display">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleProgressChange}
            className="player-slider progress-slider"
          />
          <span className="time-display">{formatTime(duration)}</span>
        </div>

        <div className="volume-container">
          <button onClick={toggleMute} className="mute-btn" aria-label="Mute Toggle">
            <i className={`fa-solid ${isMuted || volume === 0 ? 'fa-volume-xmark' : volume < 0.5 ? 'fa-volume-low' : 'fa-volume-high'}`}></i>
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="player-slider volume-slider"
          />
        </div>
      </div>
    </div>
  );
};

export default AmbientMusicPlayer;
