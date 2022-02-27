import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.container} >
            <Link to='/'>
                ziglogue
            </Link>
        </div>
    )
}

export default Header;