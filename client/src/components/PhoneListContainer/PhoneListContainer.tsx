import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PhoneListContainer.module.scss';
import Loader from '../Loader/Loader';
import { getProducts, getProductsSelector } from '../../features/product/productSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const PhoneListContainer: React.FC = () => {

	const dispatch = useAppDispatch();
	const { isLoading, isError, message, products } = useAppSelector( getProductsSelector );

	const [ imgLoader, setImgLoader ] = useState<boolean>( true );

	useEffect( () => {
		dispatch( getProducts() );
	}, [ dispatch ] );

	return (
		<div className={ styles.container }>
			{
				isLoading ? (
					<div className={ styles.loaderContainer }>
						<Loader size='large' />
					</div>
				) : isError ? (
					<div className={ styles.errorContainer }>
						<p>{ message }</p>
					</div>
				) : (
					<div className={ styles.productContainer }>
						{
							products && products.length !== 0 && products.map( ( item, idx ) => (
								<div key={ item.title } className={ styles.item }>

									<div className={ styles.itemInfo }>

										<div className={ styles.imgContainer }>

											<div
												style={ { display: imgLoader ? "flex" : "none" } }
												className={ `${ styles.loaderContainer } ${ styles.imgLoader }` }
											>
												<Loader size='small' />
											</div>

											<img
												style={ { display: imgLoader ? "none" : "block" } }
												onLoad={ () => setImgLoader( false ) }
												src={ item.image }
												alt={ item.title }
											/>

										</div>

										<div className={ styles.itemHeader }>
											<h2>{ item.title }</h2>
											<span>${ item.price }</span>
										</div>

										<div className={ styles.itemDesc }>
											<p>{ item.description }</p>
										</div>
									</div>

									<div className={ styles.itemLink }>
										<Link to={ item.slug }>
											View Specifications
										</Link>
									</div>

								</div>
							) )
						}
					</div>
				)
			}
		</div>
	);
};

export default PhoneListContainer;