import React from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
    size: string;
}

const Loader: React.FC<LoaderProps> = ( { size } ) => {
    return (
        <span
            className={ `${ styles.loader } ${ size === 'small' ? styles.loaderSmall : styles.loaderLarge }` }
        ></span>
    );
};

export default Loader;
