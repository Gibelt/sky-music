import logo from './logo.png'

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
]

function MainScreen() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <TrackList />
          </div>
          <SideBar />
        </main>
        <Bar />
        <footer className="footer" />
      </div>
    </div>
  )
}

function Navigation() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
      </div>
      <Burger />
      <NavigationMenu />
    </nav>
  )
}

function NavigationMenu() {
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Главное
          </a>
        </li>
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Мой плейлист
          </a>
        </li>
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Войти
          </a>
        </li>
      </ul>
    </div>
  )
}

function Burger() {
  return (
    <div className="nav__burger burger">
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </div>
  )
}

function Search() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref="../../img/icons/sprite.svg#icon-search" />
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}

function Filter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__button button-author _btn-text">исполнителю</div>
      <div className="filter__button button-year _btn-text">году выпуска</div>
      <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
  )
}

function TrackList() {
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="../../img/icons/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
        {tracks.map(({ title, titleSpan, author, album, time }) => (
          <Track
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

function Track(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="../../img/icons/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {props.title}
              <span className="track__title-span">{props.titleSpan}</span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {props.author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="../../img/icons/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

function SideBar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="http://">
              <img
                className="sidebar__img"
                src="../../img/playlist01.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="http://">
              <img
                className="sidebar__img"
                src="../../img/playlist02.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="http://">
              <img
                className="sidebar__img"
                src="../../img/playlist03.png"
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Bar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <div className="bar__player player">
            <PlayerControls />
            <div className="player__track-play track-play">
              <TrackPlayerContain title="Ты та..." author="Баста" />
              <LikeDislike />
            </div>
          </div>
          <Volume />
        </div>
      </div>
    </div>
  )
}

function PlayerControls() {
  return (
    <div className="player__controls">
      <div className="player__btn-prev">
        <svg className="player__btn-prev-svg" alt="prev">
          <use xlinkHref="../../img/icons/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div className="player__btn-play _btn">
        <svg className="player__btn-play-svg" alt="play">
          <use xlinkHref="../../img/icons/sprite.svg#icon-play" />
        </svg>
      </div>
      <div className="player__btn-next">
        <svg className="player__btn-next-svg" alt="next">
          <use xlinkHref="../../img/icons/sprite.svg#icon-next" />
        </svg>
      </div>
      <div className="player__btn-repeat _btn-icon">
        <svg className="player__btn-repeat-svg" alt="repeat">
          <use xlinkHref="../../img/icons/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div className="player__btn-shuffle _btn-icon">
        <svg className="player__btn-shuffle-svg" alt="shuffle">
          <use xlinkHref="../../img/icons/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  )
}

function TrackPlayerContain(props) {
  return (
    <div className="track-play__contain">
      <div className="track-play__image">
        <svg className="track-play__svg" alt="music">
          <use xlinkHref="../../img/icons/sprite.svg#icon-note" />
        </svg>
      </div>
      <div className="track-play__author">
        <a className="track-play__author-link" href="http://">
          {props.title}
        </a>
      </div>
      <div className="track-play__album">
        <a className="track-play__album-link" href="http://">
          {props.author}
        </a>
      </div>
    </div>
  )
}

function LikeDislike() {
  return (
    <div className="track-play__like-dis">
      <div className="track-play__like _btn-icon">
        <svg className="track-play__like-svg">
          <use xlinkHref="../..img/icons/sprite.svg#icon-like" />
        </svg>
      </div>
      <div className="track-play__dislike _btn-icon">
        <svg className="track-play__dislike-svg">
          <use xlinkHref="../..img/icons/sprite.svg#icon-dislike" />
        </svg>
      </div>
    </div>
  )
}

function Volume() {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <div className="volume__image">
          <svg className="volume__svg" alt="volume">
            <use xlinkHref="../..img/icons/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className="volume__progress _btn">
          <input
            className="volume__progress-line _btn"
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  )
}

export default MainScreen
