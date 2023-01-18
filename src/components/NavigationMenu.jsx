import s from './NavigationMenu.module.css'

export default function NavigationMenu() {
    return (
      <div className={s.menu}>
        <ul className={s.list}>
          <li className={s.item}>
            <a href="http://" className={s.link}>
              Главное
            </a>
          </li>
          <li className={s.item}>
            <a href="http://" className={s.link}>
              Мой плейлист
            </a>
          </li>
          <li className={s.item}>
            <a href="http://" className={s.link}>
              Войти
            </a>
          </li>
        </ul>
      </div>
    )
  }