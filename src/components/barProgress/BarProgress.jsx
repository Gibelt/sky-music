import s from './BarProgress.module.css';

export default function BarProgress(props) {
  const color = {
    width: `${props.width}%`,
    backgroundColor: 'red',
    height: 5,
  };

  return (
    <div className={s.progress}>
      <div style={color} />
    </div>
  );
}
