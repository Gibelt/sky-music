import { Link } from 'react-router-dom';
import s from './Personal.module.css';

export default function Personal() {
  return (
    <div className={s.personal}>
      <p className={s.name}>Sergey.Ivanov</p>
      <div className={s.avatar}>
        <Link to="/" >
        <svg className={s.svg} alt="exit">
          <use xlinkHref="../../img/icons/sprite.svg#icon-exit" />
        </svg>
        </Link>
      </div>
    </div>
  );
}
