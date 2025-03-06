'use client';
import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	// Enhanced menu handler with scroll and close functionality
	const handleMenuAndScroll = (targetId: string) => {
		handleMobileMenu(); // Close menu popup

		// Smooth scrolling logic with offset
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			const offset = 80; // Adjust for fixed headers or layout
			const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - offset,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div
			className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''
				}`}
		>
			<div className="mobile-header-wrapper-inner">
				<div className="mobile-header-logo">
					<Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
						<img src="/assets/imgs/home-page-2/template/favicon.svg" alt="infinia" />
						<span className="fs-4 ms-2 text-dark">Pranav.dev</span>
					</Link>
					<div
						className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''
							}`}
						onClick={handleMobileMenu}
					>
						<span className="burger-icon-top" />
						<span className="burger-icon-mid" />
						<span className="burger-icon-bottom" />
					</div>
				</div>

				<div className="mobile-header-content-area">
					<PerfectScrollbar className="perfect-scroll">
						<div className="mobile-menu-wrap mobile-header-border">
							<nav>
								<ul className="mobile-menu font-heading ps-0">
									<li className="nav-item"
										onClick={() => handleMenuAndScroll('about')}>
										<a
											className="nav-link"

										>
											About me
										</a>
									</li>
									<li className="nav-item" onClick={() => handleMenuAndScroll('resume')}>
										<a
											className="nav-link"


										>
											Resume
										</a>
									</li>
									<li className="nav-item" onClick={() => handleMenuAndScroll('skills')}>
										<a
											className="nav-link"


										>
											Skills
										</a>
									</li>
									<li className="nav-item" onClick={() => handleMenuAndScroll('services')}>
										<a
											className="nav-link"


										>
											Services
										</a>
									</li>
									<li className="nav-item" onClick={() => handleMenuAndScroll('projects')}>
										<a
											className="nav-link"

										>
											Projects
										</a>
									</li>
									<li className="nav-item" onClick={() => handleMenuAndScroll('contact')}>
										<a
											className="nav-link"
										>
											Contact
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</PerfectScrollbar>
				</div>
			</div>
		</div>
	);
}
