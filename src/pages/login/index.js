import s from './LoginScreen.module.css';
import LoginAndRegistration from '../../components/loginAndRegistration/LoginAndRegistration';

export default function LoginScreen() {
  return (
    <div className={s.container}>
      <LoginAndRegistration type="login" />
    </div>
  );
}
