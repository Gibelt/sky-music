import { Link } from "react-router-dom";
import s from './LoginAndRegistration.module.css'
import logo from '../../logo_black.png'

export default function loginAndRegistration(props) {
    const text = props.type === "login" ? "Войти" : "Зарегестрироваться";
    return (
        <div className={s.content}>
            <div className={s.logo}>
                <img className={s.logoImg} src={logo} alt="logo" />
            </div>
            <div className={s.form}>
                <input className={s.input} type="text" placeholder="Логин" />
                <input className={s.input} type="password" placeholder="Пароль" />
                {props.type === "registration" && <input className={s.input} type="password" placeholder="Повоторите пароль" />}
            </div>
            <Link className={s.enterLink} to={props.type === "login" ? "/main" : "/"}><button type="button" className={s.buttonColored}>{text}</button></Link>
            {props.type === "login" && <Link to="/registration"><button type="button" className={s.button}>Зарегестрироваться</button></Link>}
        </div>
    );
}