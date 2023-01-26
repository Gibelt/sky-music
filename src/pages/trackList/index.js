import { useEffect, useState } from 'react';
import s from './MainTrackList.module.css';
import Navigation from '../../components/navigation/Navigation';
import Search from '../../components/search/Search';
import Filter from '../../components/filter/Filter';
import TrackList from '../../components/trackList/TrackList';
import Personal from '../../components/personal/Personal';
import PlayListBlock from '../../components/playListBlock/PlayListBlock';
import Bar from '../../components/bar/Bar';
import SkeletonSideBar from '../../components/skeletons/skeletonSideBar/SkeletonSideBar';

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
];

export default function MainTrackList() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  });

  return (
    <div className={s.container}>
      <main className={s.main}>
        <Navigation />
        <div className={s.centerblock}>
          <Search />
          <h2 className={s.title}>Треки</h2>
          <Filter />
          <TrackList tracks={tracks} loader={loader} />
        </div>

        {loader ? (
          <SkeletonSideBar />
        ) : (
          <div className={s.sidebar}>
            <Personal />
            <PlayListBlock />
          </div>
        )}
      </main>
      <Bar loader={loader} />
      <footer className={s.footer} />
    </div>
  );
}
