import Link from "next/link";

import Button from "./button";
import styles from "./nav.module.scss"

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<Link href="/" className={styles.home}>
				<img src="images/logo.svg" alt="logo" className={styles.logo} />
				<p className={styles.name}>陳子涵</p>
			</Link>
			<div className={styles.toSection}>
				<Button href="#project">專案</Button>
				<Button href="#practice">練習</Button>
				<Button href="#article">文章</Button>
				<Button href="#about">關於我</Button>
			</div>
		</nav>
	)
}