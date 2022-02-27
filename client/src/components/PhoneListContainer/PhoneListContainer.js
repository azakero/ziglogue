import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PhoneListContainer.module.scss';
import { getProducts } from '../../actions/productActions';
import Loader from '../Loader/Loader';

const PhoneListContainer = () => {

	const dispatch = useDispatch();

	const [imgLoader, setImgLoader] = useState(true);

	const getAllProducts = useSelector(state => state.getProducts);
	const { loading, products, error } = getAllProducts;

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch])

	return (
		<div className={styles.container}>
			{
				loading ? (
					<div className={styles.loaderContainer}>
						<Loader size='large' />
					</div>
				) : error ? (
					<div className={styles.errorContainer}>
						<p>{error}</p>
					</div>
				) : (
					<div className={styles.productContainer}>
						{
							products && products.length !== 0 && products.map((item, idx) => (
								<div key={item.title} className={styles.item}>

									<div className={styles.itemInfo}>

										<div className={styles.imgContainer}>

											<div
												style={{ display: imgLoader ? "flex" : "none" }}
												className={`${styles.loaderContainer} ${styles.imgLoader}`}
											>
												<Loader size='small' />
											</div>

											<img
												style={{ display: imgLoader ? "none" : "block" }}
												onLoad={() => setImgLoader(false)}
												src={item.image}
												alt={item.title}
											/>

										</div>

										<div className={styles.itemHeader}>
											<h2>{item.title}</h2>
											<span>${item.price}</span>
										</div>

										<div className={styles.itemDesc}>
											<p>{item.description}</p>
										</div>
									</div>

									<div className={styles.itemLink}>
										<Link to={item.slug}>
											View Specifications
										</Link>
									</div>

								</div>
							))
						}
					</div>
				)
			}
		</div>
	)
}

export default PhoneListContainer;