import { useRef, useState } from 'react';
import PlayerControls from '../playerControls/PlayerControls';
import TrackPlayerContain from '../trackPlayerContain/TrackPlayerContain';
import LikeDislike from '../likeDislike/LikeDislike';
import Volume from '../volume/Volume';
import BarProgress from '../barProgress/BarProgress';
import SkeletonPlayerContain from '../skeletons/skeletonPlayerContain/SkeletonPlayerContain';
import s from './Bar.module.css';
/* eslint-disable jsx-a11y/media-has-caption */

export default function Bar(props) {
  const audio = useRef(null);

  const [isPlay, setPlay] = useState(true);
  const togglePlay = () => setPlay(!isPlay);

  const [id, setId] = useState(null);

  const [width, setWidth] = useState(0);

  const playTrack = () => {
    togglePlay();
    if (isPlay) {
      audio.current.play();
      setId(setInterval(() => {
          setWidth((c) => c + 1 / (audio.current.duration / 50));
        }, 500)
      );
    } else {
      setId(clearInterval(id));
      audio.current.pause();
    }
  };

  return (
    <div className={s.bar}>
      <audio ref={audio}>
        <source src="../../Bobby_Marleni_-_Dropin.mp3" type="audio/mp3" />
      </audio>
      <div className={s.content}>
        <BarProgress width={width} />
        <div className={s.block}>
          <div className={s.player}>
            <PlayerControls isPlay={playTrack} />
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
