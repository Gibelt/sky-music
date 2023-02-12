import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import PlayerControls from '../playerControls/PlayerControls';
import TrackPlayerContain from '../trackPlayerContain/TrackPlayerContain';
import LikeDislike from '../likeDislike/LikeDislike';
import Volume from '../volume/Volume';
import SkeletonPlayerContain from '../skeletons/skeletonPlayerContain/SkeletonPlayerContain';
import s from './Bar.module.css';
/* eslint-disable jsx-a11y/media-has-caption */

export default function Bar(props) {
  const { source } = useSelector((state) => state.track);
  const audio = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const togglePlay = () => setIsPlay(!isPlay);
  const [progress, setProgress] = useState(0);
  const isReady = useRef(false);
  const intervalRef = useRef();

  const { duration } = audio.current || 0;

  const currentPercentage = duration ? `${(progress / duration) * 100}%` : '0%';
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #B672FF), color-stop(${currentPercentage}, var(--background-progress)))
`;

  const toPrevTrack = () => {
    console.log('go to prev');
  };

  const toNextTrack = () => {
    console.log('go to next');
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);

    if (source) {
      intervalRef.current = setInterval(() => {
        if (audio.current.ended) {
          toNextTrack();
        } else {
          setProgress(audio.current.currentTime);
        }
      }, [1000]);
    }
  };

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audio.current.currentTime = value;
    setProgress(audio.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlay) {
      setIsPlay(true);
    }
    startTimer();
  };

  useEffect(() => {

    if (isPlay) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [isPlay]);

  useEffect(
    () => () => {
      audio.current.pause();
      clearInterval(intervalRef.current);
    },
    []
  );

  useEffect(() => {

    audio.current.pause();

    audio.current = new Audio(source);
    setProgress(audio.current.currentTime);

    if (isReady.current) {
      audio.current.play();
      setIsPlay(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [source]);

  return (
    <div className={s.bar}>
      <audio ref={audio}>
        <source src={source} type="audio/mp3" />
      </audio>
      <div className={s.content}>
        <input
          className={s.progressLine}
          type="range"
          value={progress}
          step="1"
          min="0"
          max={duration || `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
        <div className={s.block}>
          <div className={s.player}>
            <PlayerControls
              onPlayPauseClick={togglePlay}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
            />
            <div className={s.track__play}>
              {props.loader ? (
                <SkeletonPlayerContain />
              ) : (
                <TrackPlayerContain title="Ты та..." author="Баста" />
              )}
              <LikeDislike />
            </div>
          </div>
          <Volume />
        </div>
      </div>
    </div>
  );
}
