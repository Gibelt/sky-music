import { Link } from 'react-router-dom';
import s from './NavigationMenu.module.css';

export default function NavigationMenu() {
  return (
    <div className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>
          <Link to="/main" className={s.link}>
            Главное
          </Link>
        </li>
        <li className={s.item}>
          <Link to="/my_tracks" className={s.link}>
            Мой плейлист
          </Link>
        </li>
        <li className={s.item}>
          <Link to="/" className={s.link}>
            Выйти
          </Link>
        </li>
      </ul>
    </div>
  );
}
