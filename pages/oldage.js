import React from "react";
import { Card, Row, Col, Carousel, Image } from "react-bootstrap";
import { Cd1 } from "./Home/components";
function OldAge() {
	return (
		<div>
			<section className='overflow-hidden'>
				<Card>
					<Card.Img src='images/about.png' />
					<Card.ImgOverlay className='banner-overlay d-flex justify-content-center align-items-center'>
						<p className='text-white '>Working for the Unseen side of socity</p>
					</Card.ImgOverlay>
				</Card>
			</section>
			<section className=' p-2 section-mgap'>
				<div className=' container'>
					<Row>
						<Col xsm={12} sm={12} md={4}>
							<Cd1 img='images/icon/donate.png '></Cd1>
						</Col>
						<Col xsm={12} sm={12} md={4}>
							<Cd1 img='images/icon/fundraise.png'></Cd1>
						</Col>
						<Col xsm={12} sm={12} md={4}>
							<Cd1 img='images/icon/volunteer.png'></Cd1>
						</Col>
					</Row>
				</div>
			</section>
			<section className='my-primary section-mgap'>
				<div className='container section-pgap section-pbgap'>
					<Row>
						<Col xs={12} sm={12} md={8}>
							<p>About</p>
							<p>
								Lorem ipsum dolor sit amet, officia excepteur ex fugiat
								reprehenderit enim labore culpa sint ad nisi Lorem pariatur
								mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
								officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
								amet voluptate voluptate dolor minim nulla est proident. Nostrud
								officia pariatur ut officia. Sit irure elit esse ea nulla sunt
								ex occaecat reprehenderit commodo officia dolor Lorem duis
								laboris cupidatat officia voluptate. Culpa proident adipisicing
								id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
								Aliqua reprehenderit commodo ex non excepteur duis sunt velit
								enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur
								et est culpa et culpa duis.
							</p>
						</Col>
						<Col xs={12} sm={12} md={4} className=' rounded-circle'>
							<Carousel controls={false} indicators={false}>
								<Carousel.Item>
									<Card className='bg-transparent   border-0'>
										<Image
											src='images/photoGallery/gallery1.jpg'
											roundedCircle
										/>
									</Card>
								</Carousel.Item>
								<Carousel.Item>
									<Card className='bg-transparent  border-0'>
										<Image
											src='images/photoGallery/gallery1.jpg'
											roundedCircle
										/>
									</Card>
								</Carousel.Item>
								<Carousel.Item>
									<Card className='bg-transparent  border-0'>
										<Image
											src='images/photoGallery/gallery1.jpg'
											roundedCircle
										/>
									</Card>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</div>
			</section>
		</div>
	);
}

export default OldAge;
