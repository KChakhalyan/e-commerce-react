import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Navbar, Products } from './components';

const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
	};

	const fetchCart = async () => {
		const resposne = await commerce.cart.retrieve();
		setCart(resposne);
	};

	const handleAddToCart = async (productId, quantity) => {
		const item = await commerce.cart.add(productId, quantity);
		setCart(item.cart);
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);
	return (
		<>
			<Navbar totalItems={cart.total_items} />
			<Products products={products} onAddToCart={handleAddToCart} />
		</>
	);
};

export default App;
