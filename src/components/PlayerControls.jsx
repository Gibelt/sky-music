import s from './PlayerControls.module.css'

export default function PlayerControls() {
    return (
      <div className={s.controls}>
        <div className={s.prev}>
          <svg className={s.prev__svg} alt="prev">
            <use xlinkHref="../../img/icons/sprite.svg#icon-prev" />
          </svg>
        </div>
        <div className={s.play}>
          <svg className={s.play__svg} alt="play">
            <use xlinkHref="../../img/icons/sprite.svg#icon-play" />
          </svg>
        </div>
        <div className={s.next}>
          <svg className={s.next__svg} alt="next">
            <use xlinkHref="../../img/icons/sprite.svg#icon-next" />
          </svg>
        </div>
        <div className={s.repeat}>
          <svg className={s.repeat__svg} alt="repeat">
            <use xlinkHref="../../img/icons/sprite.svg#icon-repeat" />
          </svg>
        </div>
        <div className={s.shuffle}>
          <svg className={s.shuffle__svg} alt="shuffle">
            <use xlinkHref="../../img/icons/sprite.svg#icon-shuffle" />
          </svg>
        </div>
      </div>
    )
  }