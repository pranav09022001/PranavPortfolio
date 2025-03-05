'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
							<img src="/assets/imgs/footer-1/logo.svg" alt="infinia" />
							<span className="fs-4 ms-2 text-dark">Pranav.dev</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
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
										<li className="nav-item">
											<Link className="nav-link active" href="#about" onClick={handleMobileMenu}>About me</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="#resume" onClick={handleMobileMenu}>Resume</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="#skills" onClick={handleMobileMenu}>Skills</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="#services" onClick={handleMobileMenu}>Services</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="#projects" onClick={handleMobileMenu}>Projects</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="#contact" onClick={handleMobileMenu}>Contact</Link>
										</li>
									</ul>
								</nav>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			</div>
		</>
	)
}