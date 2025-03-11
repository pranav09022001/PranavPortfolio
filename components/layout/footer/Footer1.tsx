export default function Footer2() {

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
		e.preventDefault();
		const element = document.querySelector(id);
		if (element) {
			const offset = 80; // Adjust this value based on navbar height
			const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
			window.scrollTo({ top: elementPosition, behavior: 'smooth' });
		}
	};

	return (
		<>
			<footer>
				<div className="section-footer-2 position-relative">
					<div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
						<div className="text-center">
							<a className="d-flex main-logo align-items-center justify-content-center mb-3">
								<img src="assets/imgs/home-page-2/template/favicon.svg" alt="zelio" />
								<span className="fs-4 ms-2">Pranav.dev</span>
							</a>
							<div className="d-flex justify-content-center gap-3">
								<a href="https://www.instagram.com/pranavp_9/" target='_blank'>
									<i className="ri-instagram-fill fs-18" />
								</a>

								<a href="https://www.linkedin.com/in/pranav-pokharkar-b408111b6/" target='_blank'>
									<i className="ri-linkedin-fill fs-18" />
								</a>
								<a href="https://github.com/pranav09022001" target='_blank'>
									<i className="ri-github-fill fs-18" />
								</a>
							</div>
							<div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								<a href="#about" className="fs-6" style={{ color: 'white' }} onClick={(e) => handleScroll(e, '#about')}> About me </a>
								<a href="#resume" className="fs-6" style={{ color: 'white' }} onClick={(e) => handleScroll(e, '#resume')}> Resume </a>
								<a href="#skills" className="fs-6" style={{ color: 'white' }} onClick={(e) => handleScroll(e, '#skills')}> Skills </a>
								<a href="#services" className="fs-6" style={{ color: 'white' }} onClick={(e) => handleScroll(e, '#services')}> Services </a>
								<a href="#projects" className="fs-6" style={{ color: 'white' }} onClick={(e) => handleScroll(e, '#projects')}> Projects </a>
								<a href="#contact" className="fs-6" style={{ color: 'white' }} onClick={(e) => handleScroll(e, '#contact')}> Contact </a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
