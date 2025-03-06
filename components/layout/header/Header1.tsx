import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Link from 'next/link'
import OffCanvas from '../OffCanvas'
import MobileMenu from '../MobileMenu'
import { useEffect, useState } from 'react';

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas }: any) {

	const [activeSection, setActiveSection] = useState<string>('');

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
		e.preventDefault();
		const element = document.querySelector(id) as HTMLElement | null;
		if (element) {
			const offset = 80; // Adjust based on navbar height
			const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
			window.scrollTo({ top: elementPosition, behavior: 'smooth' });
			setActiveSection(id);
		}
	};

	useEffect(() => {
		const handleScrollSpy = () => {
			const sections = ['#about', '#resume', '#skills', '#services', '#projects', '#contact'];
			for (const id of sections) {
				const section = document.querySelector(id) as HTMLElement | null;
				if (section) {
					const rect = section.getBoundingClientRect();
					if (rect.top <= 100 && rect.bottom >= 100) {
						setActiveSection(id);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScrollSpy);
		return () => window.removeEventListener('scroll', handleScrollSpy);
	}, []);

	const navItems = [
		{ href: '#about', label: 'About me' },
		{ href: '#resume', label: 'Resume' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#services', label: 'Services' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#contact', label: 'Contact' },
	];


	return (
		<>
			<header>
				<div className="container position-relative">
					<div className="position-relative">

						<nav className={`navbar navbar-expand-lg navbar-home-2 w-100 flex-nowrap z-999 p-0 ${scroll ? 'navbar-stick' : ''}`} style={{ position: `${scroll ? "fixed" : "absolute"}`, top: `${scroll ? "0" : "20px"}`, borderRadius: `${scroll ? "0px" : "8px"}`, }}>
							{/* <nav className="navbar navbar-expand-lg navbar-home-2 flex-nowrap z-999 p-0 border border-1 rounded-3"> */}
							<a className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex" data-bs-target=".offCanvas__info" aria-controls="offCanvas__info" onClick={handleOffCanvas}>
								<i className="ri-menu-2-line" />
							</a>
							<div className="container py-3 px-4">
								<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
									<img src="assets/imgs/home-page-2/template/favicon.svg" alt="zelio" />
									<span className="fs-4 ms-2">Pranav.dev</span>
								</Link>
								<div className="d-none d-lg-flex">
									<div className="collapse navbar-collapse" id="navbarSupportedContent">
										<ul className="navbar-nav me-auto mb-2 mb-lg-0">
											{navItems.map((item) => (
												<li key={item.href} className="nav-item">
													<Link
														href={item.href}
														className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
														onClick={(e) => handleScroll(e, item.href)}
													>
														{item.label}
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
									<div className="d-md-flex d-none gap-3">
										<Link href="/http://facebook.com">
											<i className="ri-facebook-circle-fill fs-18" />
										</Link>
										<Link href="/http://twitter.com">
											<i className="ri-twitter-x-fill fs-18" />
										</Link>
										<Link href="/http://linkedin.com">
											<i className="ri-linkedin-fill fs-18" />
										</Link>
										<Link href="/http://github.com">
											<i className="ri-github-fill fs-18" />
										</Link>
									</div>
									<div className="burger-icon burger-icon-white border rounded-3" onClick={handleMobileMenu}>
										<span className="burger-icon-top" />
										<span className="burger-icon-mid" />
										<span className="burger-icon-bottom" />
									</div>
								</div>
							</div>
							{/* <ThemeSwitch /> */}
						</nav>
					</div>
					{/* offCanvas-menu */}
					<OffCanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
					<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
				</div>
			</header>
		</>
	)
}
