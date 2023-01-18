import PlayerControls from '../playerControls/PlayerControls'
import TrackPlayerContain from '../trackPlayerContain/TrackPlayerContain'
import LikeDislike from '../likeDislike/LikeDislike'
import Volume from '../volume/Volume'
import SkeletonPlayerContain from '../skeletons/skeletonPlayerContain/SkeletonPlayerContain'
import s from './Bar.module.css'

export default function Bar(props) {
  return (
    <div className={s.bar}>
      <div className={s.content}>
        <div className={s.progress} />
        <div className={s.block}>
          <div className={s.player}>
            <PlayerControls />
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
  )
}
