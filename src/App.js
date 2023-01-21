import s from './style/App.module.css'
import AppRoutes from './routes'

function App() {
 return (
  <div className={s.wrapper}>
    <AppRoutes />
  </div>
 );
}

export default App
