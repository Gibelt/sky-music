import s from './LikeDislike.module.css';

export default function LikeDislike() {
  return (
    <div className={s.like_dis}>
      <div className={s.like}>
        <svg className={s.like__svg} alt="like">
          <use xlinkHref="../../img/icons/sprite.svg#icon-like" />
        </svg>
      </div>
      <div className={s.dislike}>
        <svg className={s.dislike__svg}>
          <use xlinkHref="../../img/icons/sprite.svg#icon-dislike" />
        </svg>
      </div>
    </div>
  );
}
