import s from './Personal.module.css';

export default function Personal() {
  return (
    <div className={s.personal}>
      <p className={s.name}>Sergey.Ivanov</p>
      <div className={s.avatar} />
    </div>
  );
}
