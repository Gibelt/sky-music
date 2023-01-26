import SkeletonTrackList from '../skeletons/skeletonTrackList/SkeletonTrackList';
import Track from '../track/Track';
import s from './TrackList.module.css';

const skeletonTrackNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function TrackList(props) {
  return (
    <div className={s.content}>
      <div className={s.title}>
        <div className={s.title01}>Трек</div>
        <div className={s.title02}>ИСПОЛНИТЕЛЬ</div>
        <div className={s.title03}>АЛЬБОМ</div>
        <div className={s.title04}>
          <svg className={s.svg} alt="time">
            <use xlinkHref="../../img/icons/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={s.playlist}>
        {props.loader
          ? skeletonTrackNumber.map((n) => <SkeletonTrackList key={n} />)
          : props.tracks.map(({ title, titleSpan, author, album, time }) => (
              <Track
                key={title.toString()}
                title={title}
                author={author}
                album={album}
                time={time}
                titleSpan={titleSpan}
              />
            ))}
      </div>
    </div>
  );
}
