import { useDispatch } from 'react-redux';
import SkeletonTrackList from '../skeletons/skeletonTrackList/SkeletonTrackList';
import Track from '../track/Track';
import s from './TrackList.module.css';
import { useGetAllTracksQuery } from '../../services/track';
import { setTrackId } from '../../store/slices/trackSlice';

const skeletonTrackNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function TrackList(props) {
  const { data, error, isLoading } = useGetAllTracksQuery();
  const dispatch = useDispatch();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const handleTrackClick = (id, file) => {
    dispatch(setTrackId({
      trackId: id,
      source: file,
    }));
  };

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
          : data.map((track) => (
              <Track
                handleClick={handleTrackClick}
                source={track.track_file}
                id={track.id}
                key={track.id}
                title={track.name}
                author={track.author}
                album={track.album}
                time={track.duration_in_seconds}
                titleSpan=""
              />
            ))}
      </div>
    </div>
  );
}
