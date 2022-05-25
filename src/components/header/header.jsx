import { NavLink } from 'react-router-dom';
import cmedia from './header.module.css';
import me from './../../media/mecartoon.jpg';
import profile from './../../media/profile.png';
import money from './../../media/money.png';
import task from './../../media/task.png';
import report from './../../media/report.png';
const Header = () => {
    return (
        <div className={cmedia.header}>
            <h1>financyx</h1>
            <div className={cmedia.accountBlock}>
                <img src={me} alt="" />
                <p>Sergey Lobets</p>
            </div>

            <nav>
                <li><img src={profile} /><NavLink to="/">Обзор</NavLink></li>
                <li><img src={money} /><NavLink to="/">Транзакции</NavLink></li>
                <li><img src={task} /><NavLink to="/">Планы и цели</NavLink></li>
                <li><img src={report} /><NavLink to="/">Отчеты</NavLink></li>
            </nav>
        </div>
    )
}

export default Header;