import React from "react";
import { Row, Col, Card, Image, Button, Modal } from "react-bootstrap";
import Share from "./Share";
function DonationApeal() {
	return (
	
			<Card className='sm-card'>
				<Card.Img src='images/about.png' className='w-100 h-100 sm-card' />
				<Card.ImgOverlay className='light-overlay'>
					<Row>
						<Col xsm={12} sm={12} md={5}>
							<Image />
						</Col>
						<Col xsm={12} sm={12} md={7}>
							<p className='myprimary-text h3'>Cause Name</p>
							<div className='d-flex flex-row'>
								<p className='mysecondary-text p1'>
									<span className='my-orange p1'>Raised:</span>$1000
								</p>
								<p className='ml-4 mysecondary-text p1'>
									<span className='my-orange p1'>Goal:</span>$2000
								</p>
							</div>
							<div>
								<p className='p1 myprimary-text'>
									Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
									sint cillum sint.
								</p>
								<p className='text-secondary p1'>
									Lorem ipsum dolor sit amet, officia excepteur ex fugiat
									reprehenderit enim labore culpa sint ad nisi Lorem pariatur
									mollit ex esse exercitation amet. Nisi anim cupidatat
									excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
									est aliquip amet voluptate voluptate dolor minim nulla est
									proident. Nostrud officia pariatur ut officia. Sit irure elit
								</p>
								<p className='myprimary-text p1'>Read more</p>
							</div>
							<div className='d-flex justify-content-between align-items-center'>
								<Button className='rounded myorange-bg border-0'>Donate</Button>

								<div>
									<p className='m-0'>HELP US BY SHARE:</p>
									<Share></Share>
								</div>
							</div>
						</Col>
					</Row>
				</Card.ImgOverlay>
			</Card>
	
	);
}

export default DonationApeal;
