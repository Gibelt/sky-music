import { useEffect, useState } from 'react';
import s from './Hundred.module.css';
import Navigation from '../../components/navigation/Navigation';
import Search from '../../components/search/Search';
import TrackList from '../../components/trackList/TrackList';
import Personal from '../../components/personal/Personal';
import Bar from '../../components/bar/Bar';

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
];

export default function PlayList100() {
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
          <h2 className={s.title}>100 Танцевальных хитов</h2>
          <TrackList tracks={tracks} loader={loader} />
        </div>
        <div className={s.sidebar}>
          <Personal />
        </div>
      </main>
      <Bar loader={loader} />
      <footer className={s.footer} />
    </div>
  );
}
