import { Link } from 'react-router-dom';
import s from './NavigationMenu.module.css';
import { useThemeContext } from '../../context/themes';

export default function NavigationMenu() {
  const { currentTheme, toggleTheme } = useThemeContext();
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
      <div role="presentation" onClick={toggleTheme} className={s.changeTheme}>
        <svg className={s.svg} alt="theme">
          <use xlinkHref={`../../img/icons/sprite.svg#icon-${currentTheme}`} />
        </svg>
      </div>
    </div>
  );
}
