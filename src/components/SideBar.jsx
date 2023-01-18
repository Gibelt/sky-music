import s from './SideBar.module.css'

export default function SideBar() {
    return (
      <div className={s.sidebar}>
        <div className={s.personal}>
          <p className={s.name}>Sergey.Ivanov</p>
          <div className={s.avatar} />
        </div>
        <div className={s.block}>
          <div className={s.list}>
            <div className={s.item}>
              <a className={s.link} href="http://">
                <img
                  className={s.img}
                  src="../../img/playlist01.png"
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className={s.item}>
              <a className={s.link} href="http://">
                <img
                  className={s.img}
                  src="../../img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className={s.item}>
              <a className={s.link} href="http://">
                <img
                  className={s.img}
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