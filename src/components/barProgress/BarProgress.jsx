import s from './BarProgress.module.css';

export default function BarProgress(props) {
  const activeProgress = {
    width: `${props.width}%`,
    backgroundColor: '#B672FF',
    height: 5,
  };

  return (
    <div className={s.progress}>
      <div style={activeProgress} />
    </div>
  );
}
