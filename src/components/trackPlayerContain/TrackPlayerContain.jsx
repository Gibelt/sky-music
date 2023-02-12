import { useSelector } from 'react-redux';
import { useGetTrackByIdQuery } from '../../services/track';
import s from './TrackPlayerContain.module.css';

export default function TrackPlayerContain() {
  const { trackId } = useSelector((state) => state.track);
  const { data } = useGetTrackByIdQuery({ trackId });

  return (
    <div className={s.contain}>
      <div className={s.image}>
        <svg className={s.svg} alt="music">
          <use xlinkHref="../../img/icons/sprite.svg#icon-note" />
        </svg>
      </div>
      <div className={s.author}>
        <a className={s.author__link} href="http://">
          {data && data.name}
        </a>
      </div>
      <div className={s.album}>
        <a className={s.album__link} href="http://">
          {data && data.author}
        </a>
      </div>
    </div>
  );
}
