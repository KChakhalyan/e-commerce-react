import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
	const classes = useStyles();
	return (
		<>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<Toolbar>
					<Typography variant="h6" className={classes.title} color="inherit">
						<img
							src={logo}
							alt="Commerce.js"
							height="25px"
							className={classes.image}
						/>
						KINN.COM
					</Typography>
					<div className={classes.grow} />
					<div className={classes.button}>
						<IconButton area-label="Show card items" color="inherit">
							<Badge badgeContent={totalItems} color="secondary">
								<ShoppingCartIcon />
							</Badge>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
