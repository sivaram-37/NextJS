import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import style from "@/components/main-header/main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./NavLink";

export default function MainHeader() {
	return (
		<>
			<MainHeaderBackground />
			<header className={style.header}>
				<Link className={style.logo} href="/">
					<Image src={Logo} alt="A Food in a plate" priority />
					NextLevel Food
				</Link>

				<nav className={style.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Foodies Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
