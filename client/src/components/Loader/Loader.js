import React from 'react';
import styles from './Loader.module.scss';

const Loader = ({ size }) => {
    return (
        <span
            className={`${styles.loader} ${size === 'small' ? styles.loaderSmall : styles.loaderLarge}`}
        ></span>
    )
}

export default Loader;
