import s from './TrackPlayerContain.module.css';

export default function TrackPlayerContain(props) {
  return (
    <div className={s.contain}>
      <div className={s.image}>
        <svg className={s.svg} alt="music">
          <use xlinkHref="../../img/icons/sprite.svg#icon-note" />
        </svg>
      </div>
      <div className={s.author}>
        <a className={s.author__link} href="http://">
          {props.title}
        </a>
      </div>
      <div className={s.album}>
        <a className={s.album__link} href="http://">
          {props.author}
        </a>
      </div>
    </div>
  );
}
