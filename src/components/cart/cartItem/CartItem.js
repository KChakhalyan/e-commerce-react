import React from 'react';
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ item }) => {
	const classes = useStyles();
	return (
		<Card>
			<CardMedia image={item.media.source} alt={item.name} />
			<CardContent className={classes.content}>
				<Typography variant="h4">{item.name}</Typography>
				<Typography variant="h5">
					{item.line_total.formatted_with_symbol}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div className={classes.buttons}>
					<Button type="button" size="small">
						-
					</Button>
					<Typography>{item.quantity}</Typography>
					<Button type="button" size="small">
						+
					</Button>
				</div>
				<Button variant="contained" type="button" color="secondary">
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;
