import { useEffect, useState } from 'react'
import './style/style.css'
import s from './style/App.module.css'
import Navigation from './components/Navigation'
import Search from './components/Search'
import Filter from './components/Filter'
import TrackList from './components/TrackList'
import SideBar from './components/SideBar'
import Bar from './components/Bar'
import SkeletonSideBar from './components/skeletons/SkeletonSideBar'

function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 5000)
  })

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <main className={s.main}>
          <Navigation />
          <div className={s.centerblock}>
            <Search />
            <h2 className={s.title}>Треки</h2>
            <Filter />
            <TrackList loader={loader} />
          </div>
          {loader ? <SkeletonSideBar /> : <SideBar />}
        </main>
        <Bar loader={loader} />
        <footer className={s.footer} />
      </div>
    </div>
  )
}

export default App
