import React from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.root}>
				<CardMedia
					className={classes.media}
					image={product.media.source}
					title={product.name}
				/>
				<CardContent>
					<div className={classes.cardContent}>
						<Typography variant="h5" gutterBottom>
							{product.name}
						</Typography>
						<Typography variant="h5">
							{product.price.formated_with_symbol}
						</Typography>
					</div>
					<Typography
						dangerouslySetInnerHTML={{ __html: product.description }}
						variant="body2"
						color="textSecondary"
					/>
				</CardContent>
				<CardActions disableSpacing className={classes.cardActions}>
					<IconButton
						area-label="Add to Card"
						onClick={() => onAddToCart(product.id, 1)}
					>
						<AddShoppingCartIcon />
					</IconButton>
				</CardActions>
			</Card>
		</div>
	);
};

export default Product;
