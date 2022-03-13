import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './PhoneDetail.module.scss';
import Loader from '../Loader/Loader';
import PhoneSpecsListItem from './PhoneSpecsList/PhoneSpecsListItem';
import { getProducts, getProductsSelector, Products } from '../../features/product/productSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const PhoneDetail: React.FC = () => {

	const { titleSlug } = useParams();
	const dispatch = useAppDispatch();
	const { isLoading, isError, message, products } = useAppSelector( getProductsSelector );

	const [ product, setProduct ] = useState<Products>( {
		title: '',
		slug: '',
		description: '',
		color: '',
		price: 0,
		image: '',
		specifications: {
			display: '',
			processor: '',
			frontCam: '',
			rearCam: '',
			ram: '',
			storage: '',
			batteryCapacity: '',
			os: ''
		}
	} );

	useEffect( () => {

		if ( products && products.length !== 0 ) {
			const findProduct = products.find( item => item.slug === titleSlug );
			setProduct( findProduct as Products );
		}

	}, [ products, titleSlug ] );

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

						<div className={ styles.header }>
							<Link to='/'>
								Go Back
							</Link>
						</div>

						<div className={ styles.productInfo }>

							<div className={ styles.productImg }>
								<img src={ product.image } alt={ product.title } />
							</div>

							<div className={ styles.productSpecifications }>

								<div className={ styles.productSpecificationsInner }>

									<div className={ styles.productHeader }>
										<h1>{ product.title }</h1>
										<span>{ product.color }</span>
									</div>

									<div className={ styles.productPrice }>
										<span>${ product.price }</span>
									</div>

									<div className={ styles.productDesc }>
										<p>{ product.description }</p>
									</div>

									<div className={ styles.productSpecs }>

										<ul>

											<PhoneSpecsListItem title='Display' specs={ product.specifications?.display } />
											<PhoneSpecsListItem title='Processor' specs={ product.specifications?.processor } />
											<PhoneSpecsListItem title='RAM' specs={ product.specifications?.ram } />
											<PhoneSpecsListItem title='Storage' specs={ product.specifications?.storage } />
											<PhoneSpecsListItem title='Front Camera' specs={ product.specifications?.frontCam } />
											<PhoneSpecsListItem title='Rear Camera' specs={ product.specifications?.rearCam } />
											<PhoneSpecsListItem title='Battery' specs={ product.specifications?.batteryCapacity } />
											<PhoneSpecsListItem title='OS' specs={ product.specifications?.os } />

										</ul>

									</div>

								</div>

							</div>

						</div>

					</div>
				)
			}

		</div>
	);
};

export default PhoneDetail;