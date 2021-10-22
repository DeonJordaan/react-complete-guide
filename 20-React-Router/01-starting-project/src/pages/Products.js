import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<section>
			<h1>Interresant Produkte</h1>
			<ul>
				<li>
					<Link to="/products/p1">A Book</Link>
				</li>
				<li>
					<Link to="/products/p2">A Bicycle</Link>
				</li>
				<li>
					<Link to="/products/p3">A Button</Link>
				</li>
			</ul>
		</section>
	);
};

export default Products;
