import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <div className={ styles.container } >
            <Link to='/'>
                ziglogue
            </Link>
        </div>
    );
};

export default Header;