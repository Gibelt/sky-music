import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/slices/userSlice';
import s from './Personal.module.css';

export default function Personal() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(removeUser());
    localStorage.setItem('access', '');
    localStorage.setItem('refresh', '');
    localStorage.setItem('userId', '');
  };

  return (
    <div className={s.personal}>
      <p className={s.name}>Sergey.Ivanov</p>
      <div className={s.avatar}>
        <svg onClick={handleLogOut} className={s.svg} alt="exit">
          <use xlinkHref="../../img/icons/sprite.svg#icon-exit" />
        </svg>
      </div>
    </div>
  );
}
