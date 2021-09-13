import React,{useEffect} from "react";
import { Card, Row, Col,Image } from "react-bootstrap";
import { IoFastFood, IoPeople } from "react-icons/io5";
import { FaDonate } from "react-icons/fa";
import { VolunteerForm } from "../global/index";
function GetInvolved() {
	useEffect(()=>{
		window.scroll(0, 0);
	},[])
	return (
		<div>
			<section className='overflow-hidden'>
				<Card>
					<Card.Img src='images/about.png' alt=""/>
					<Card.ImgOverlay className='banner-overlay d-flex justify-content-center align-items-center'>
						<p className='text-white h1 '>
							Working for the Unseen side of socity
						</p>
					</Card.ImgOverlay>
				</Card>
			</section>
			<section className='my-primary section-pgap section-pbgap'>
				<div className='container'>
					<header>
						<p className='text-center myprimary-text h2 '>
							You Can Involved By
						</p>
					</header>
					<Row className='section-pgap'>
						<Col
							xs={12}
							sm={12}
							md={4}
							className='d-flex justify-content-center align-items-center flex-column'>
							<IoFastFood color="#373d57" size='3em' />
							<p className='text-center primary-title my-orange mb-0'>
								Food Donation
							</p>
							<p className='text-center mysecondary-text mt-0'>
								Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
								sint cillum sint consectetur cupidatat.
							</p>
						</Col>
						<Col
							xs={12}
							sm={12}
							md={4}
							className='d-flex justify-content-center align-items-center flex-column'>
							<IoPeople size='3em' color="#373d57"/>
							<p className='text-center primary-title my-orange  mb-0'>
								Volunteer
							</p>
							<p className='text-center mysecondary-text mt-0'>
								Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
								sint cillum sint consectetur cupidatat.
							</p>
						</Col>
						<Col
							xs={12}
							sm={12}
							md={4}
							className='d-flex justify-content-center align-items-center flex-column'>
							<FaDonate size='3em' color="#373d57" />
							<p className='text-center primary-title my-orange mb-0'>
								Sponsoring Cause
							</p>
							<p className='text-center mysecondary-text mt-0'>
								Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
								sint cillum sint consectetur cupidatat.
							</p>
						</Col>
					</Row>
				</div>
			</section>
			<section className='section-pgap section-pbgap'>
				<div className='container'>
					<p className='myprimary-text h2 pb-2 text-center mb-4'>
						Become Volunteer
					</p>

					<Row>
						<Col xs={12} sm={12} md={12} lg={6} className='d-flex justify-content-center align-items-center'>
							<Image className="clipcart w-100" src='images/5299.jpg' alt=""/>
						</Col>
						<Col xs={12} sm={12} md={12} lg={6} >
							<VolunteerForm />
						</Col>
					</Row>
				</div>
			</section>
			<section></section>
		</div>
	);
}

export default GetInvolved;
