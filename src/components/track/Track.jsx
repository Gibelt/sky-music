import s from './Track.module.css';

export default function Track(props) {
  return (
    <div className={s.item}>
      <div className={s.track}>
        <div className={s.title}>
          <div className={s.image}>
            <svg className={s.title__svg} alt="music">
              <use xlinkHref="../../img/icons/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className={s.title__link} href="http://">
              {props.title}
              <span className={s.span}>{props.titleSpan}</span>
            </a>
          </div>
        </div>
        <div className={s.author}>
          <a className={s.author__link} href="http://">
            {props.author}
          </a>
        </div>
        <div className={s.album}>
          <a className={s.album__link} href="http://">
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className={s.time__svg} alt="time">
            <use xlinkHref="../../img/icons/sprite.svg#icon-like" />
          </svg>
          <span className={s.time__text}>{props.time}</span>
        </div>
      </div>
    </div>
  );
}
