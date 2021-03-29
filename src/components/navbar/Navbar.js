import React from 'react';
import {
	AppBar,
	ToolBar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from '@material-ui/core';
import { ShoppingCard } from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = () => {
	const classes = useStyles();
	return (
		<>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<ToolBar>
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
							<Badge badgeContent={2} color="secondary">
								<ShoppingCard />
							</Badge>
						</IconButton>
					</div>
				</ToolBar>
			</AppBar>
		</>
	);
};

export default Navbar;
