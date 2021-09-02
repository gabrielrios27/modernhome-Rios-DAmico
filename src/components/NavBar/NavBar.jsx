import logo from '../../logo.jpg';
import style from './NavBar.module.css';

function NavBar() {
	return (
		<>
			<nav className={style.nav}>
				<img src={logo} className={style.logo} alt="logo" />
				<ul className={style.categorias}>
					<li className={style.listas}>Pisos</li>
					<li className={style.listas}>
						Revestimientos
						<ul className={style.sublista}>
							<li className={style.item}>Vidrios</li>
							<li className={style.item}>Ceramicos</li>
							<li className={style.item}>Piedra</li>
						</ul>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavBar;
