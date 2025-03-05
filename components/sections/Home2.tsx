
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export default function Home2() {
	return (
		<>

			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<img style={{borderRadius:'10px'}} src="assets/Pranav Pokharkar - Full Stack Developer (3).png" alt="zelio" />
										
									</div>
								</div>
								<div className="col-lg-6 mx-lg-auto col-md-12">
									<div className="p-lg-0 p-md-8 p-3">
										<div className="text-secondary-2 d-flex align-items-center">
											&lt;span&gt;
											<div className="text-dark">
												<div className="typewriter">
													<h1 className="fs-6 fw-medium">Hey, I’m Pranav</h1>
												</div>
											</div>
											&lt;/span&gt;
										</div>
										<h1 className="fs-50 my-3"><span className="text-linear-4">{'{'}Full Stack{'}'}</span>Web developer<span className="flicker">_</span></h1>
										<p className="mb-6 text-secondary-2">&lt;p&gt;<span className="text-dark">With expertise in modern web technologies like</span> <span className="text-secondary-2">React.js</span>, <span className="text-secondary-2">Next.js</span>, <span className="text-secondary-2">Node.js</span>, and <span className="text-secondary-2">Express.js</span><span className="text-dark">, I specialize in building responsive, high-performance web applications. From leading complex projects like Audio Pitara at Channel 176 to optimizing client websites and improving analytics using tools like Mixpanel and Google Analytics, I deliver innovative and scalable web solutions.</span>&lt;/p&gt;</p>
<div className="row">
											<div className="col-7">
												{/* Carausel Scroll */}
												<Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
												<ul className="carouselTicker__list">
															<li className="carouselTicker__item ">
																<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/icon-4.svg" alt="brand" />
																</Link>
															</li>
															<li className="carouselTicker__item ">
																<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/icons8-express-js.svg" alt="brand" />
																</Link>
															</li>
															<li className="carouselTicker__item ">
																<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/icon-1.svg" alt="brand" />
																</Link>
															</li>
															
															<li className="carouselTicker__item">
																<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/icon-6.svg" alt="brand" />
																</Link>
															</li>
															<li className="carouselTicker__item ">
																<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																	<img src="assets/imgs/home-page-2/hero-1/icons8-java-logo.svg" alt="brand" />
																</Link>
																
															</li>
															
														</ul>
													
												</Marquee>
											</div>
											<div className="col-5 d-flex align-items-end">
												<span className="fs-6 text-300 mb-2">...and more</span>
											</div>
										</div>
										<Link href="assets/resume.pdf" className="btn me-2 text-300 ps-0 mt-4" target="_blank">
											<i className="ri-download-line text-primary-2" />
											[ Download my CV ]
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="background position-absolute top-0 start-0 w-100 h-100">
					<img className="bg-w" src="assets/imgs/home-page-2/hero-1/bg.png" alt="zelio" />
					<img className="bg-d" src="assets/imgs/home-page-2/hero-1/bg-dark.png" alt="zelio" />
				</div>
			</section>

		</>
	)
}
