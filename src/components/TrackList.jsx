import SkeletonTrackList from './skeletons/SkeletonTrackList'
import Track from './Track';
import s from './TrackList.module.css'

const skeletonTrackNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const tracks = [
    {
      title: 'Guilt ',
      titleSpan: '',
      author: 'Nero',
      album: 'Welcome Reality',
      time: '4:44',
    },
    {
      title: 'Elektro ',
      titleSpan: '',
      author: 'Dynoro, Outwork, Mr. Gee',
      album: 'Elektro',
      time: '2:22',
    },
    {
      title: 'I’m Fire ',
      titleSpan: '',
      author: 'Ali Bakgor',
      album: 'I’m Fire',
      time: '2:22',
    },
    {
      title: 'Non Stop ',
      titleSpan: '(Remix)',
      author: 'Стоункат, Psychopath',
      album: 'Non Stop',
      time: '4:12',
    },
    {
      title: 'Run Run ',
      titleSpan: '(feat. AR/CO)',
      author: 'Jaded, Will Clarke, AR/CO',
      album: 'Run Run',
      time: '2:54',
    },
    {
      title: 'Eyes on Fire ',
      titleSpan: '(Zeds Dead Remix)',
      author: 'Blue Foundation, Zeds Dead',
      album: 'Eyes on Fire',
      time: '5:20',
    },
    {
      title: 'Mucho Bien ',
      titleSpan: '(Hi Profile Remix)',
      author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
      album: 'Mucho Bien',
      time: '3:41',
    },
    {
      title: 'Knives n Cherries ',
      titleSpan: '',
      author: 'minthaze',
      album: 'Captivating',
      time: '1:48',
    },
    {
      title: 'How Deep Is Your Love ',
      titleSpan: '',
      author: 'Calvin Harris, Disciples',
      album: 'How Deep Is Your Love',
      time: '3:32',
    },
    {
      title: 'Morena ',
      titleSpan: '',
      author: 'Tom Boxer',
      album: 'Soundz Made in Romania',
      time: '3:36',
    },
    {
      title: '',
      titleSpan: '',
      author: '',
      album: '',
      time: '',
    },
  ]

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
            : tracks.map(({ title, titleSpan, author, album, time }) => (
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
    )
  }