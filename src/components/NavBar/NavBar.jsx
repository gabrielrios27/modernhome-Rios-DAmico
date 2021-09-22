import { Link } from 'react-router-dom';
import logo from '../../logo.jpg';
import CartWidget from './CartWidget';
import style from './NavBar.module.css';

function NavBar() {
	return (
		<>
			<nav className={style.nav}>
				<Link exact to="/">
					<img src={logo} className={style.logo} alt="logo" />
				</Link>
				<ul className={style.categorias}>
					<Link exact to="/categoria/pisos">
						<li className={style.listas}>Pisos</li>
					</Link>

					<li className={style.listas + ' ' + style.listaRevestimientos}>
						Revestimientos
						<ul className={style.sublista}>
							<Link exact to="/categoria/vidrios">
								<li className={style.item}>Vidrios</li>
							</Link>
							<Link exact to="/categoria/ceramicos">
								<li className={style.item}>Ceramicos</li>
							</Link>
							<Link exact to="/categoria/piedras">
								<li className={style.item}>Piedra</li>
							</Link>
						</ul>
					</li>
					<Link to="/cart">
						<li>
							<CartWidget />
						</li>
					</Link>
				</ul>
			</nav>
		</>
	);
}

export default NavBar;
