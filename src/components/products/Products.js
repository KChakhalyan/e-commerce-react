import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/Product';
import useStyles from './styles';
const products = [
	{
		id: 1,
		name: 'Shoes',
		description: 'Running Shoes',
		price: '$59.99',
		image:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lightweight-shoe-roundup-6990-1581370694.jpg?crop=0.755xw:0.851xh;0.0769xw,0.00240xh&resize=640:*',
	},
	{
		id: 2,
		name: 'MacBook',
		description: 'Apple MacBook',
		price: '$599.99',
		image:
			'https://res-5.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1585067771/qu1hso8d0e0nrz8cnmgz.png',
	},
];

const Products = () => {
	const classes = useStyles();
	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justify="center" spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} xl={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
