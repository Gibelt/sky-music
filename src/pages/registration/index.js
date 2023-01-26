import s from './RegistrationScreen.module.css';
import LoginAndRegistration from '../../components/loginAndRegistration/LoginAndRegistration';

export default function RegistrationScreen() {
  return (
    <div className={s.container}>
      <LoginAndRegistration type="registration" />
    </div>
  );
}
