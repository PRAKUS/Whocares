import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { DonationApeal, PhotoGallery, StaffList } from "../global";
import { IoFastFood, IoPeople } from "react-icons/io5";
import { FaDonate } from "react-icons/fa";
import axios from "axios";
import {HOST} from "../env/env"

function About({photos}) {
	useEffect(() => {
		//window.scroll(0, 0);
	}, []);
	return (
		<div>
			<section>
				<Card>
					<Card.Img src='images/about.png' />
					<Card.ImgOverlay className='banner-overlay d-flex justify-content-center align-items-center'>
						<p className='text-white h1 '>About</p>
					</Card.ImgOverlay>
				</Card>
			</section>
			<section className='container section-mgap'>
				<Row>
					<Col xs={12} sm={12} md={4}></Col>
					<Col xs={12} sm={12} md={8} className=''>
						<p className='my-orange'>About Us</p>
						<p className='myprimary-text h3 font-weight-bold'>Our Motto</p>
						<p className='mysecondary-text'>
							Lorem ipsum dolor sit amet, officia excepteur ex fugiat
							reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
							ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
							Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
							voluptate voluptate dolor minim nulla est proident. Nostrud
							officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
							occaecat reprehenderit commodo officia dolor Lorem duis laboris
							cupidatat officia voluptate. Culpa proident adipisicing id nulla
						</p>
					</Col>
				</Row>
			</section>
			<section className='my-primary section-mgap section-pgap section-pbgap'>
				<div className='container'>
					<header>
						<p className='text-center myprimary-text h2 '>
							You can help society by helping us
						</p>
					</header>
					<Row className='section-pgap'>
						<Col
							xs={12}
							sm={12}
							md={4}
							className='d-flex justify-content-center align-items-center flex-column'>
							<IoFastFood size='3em' />
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
							<IoPeople size='3em' />
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
							<FaDonate size='3em' />
							<p className='text-center primary-title my-orange mb-0'>
								Providing Donation
							</p>
							<p className='text-center mysecondary-text mt-0'>
								Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
								sint cillum sint consectetur cupidatat.
							</p>
						</Col>
					</Row>
				</div>
			</section>
			<section className='container section-mgap'>
			<p className='text-center h2 '>Your Precious Help Needed</p>
				<DonationApeal />
			</section>
			<section className='my-primary section-mgap section-pgap'>
				<PhotoGallery photo={photos}/>
			</section>
			<section className='container section-mgap section-pbgap'>
				<p className='myprimary-text text-center h3'>Meet our founder </p>
				<p className='text-center my-orange section-pbgap'>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
					cillum sint consectetur cupidatat.
				</p>
				<StaffList />
			</section>
		</div>
	);
}

export default About;


export  async  function getServerSideProps(){
	const count= await axios.get(`${HOST}/photoalbums/count`);
	let data=parseInt(Math.random() * (count.data - 1) + 1);
	const photo=await axios.get(`${HOST}/photoalbums/${data}`);
	let photos=photo.data;
	

	
	return{
		props:{
			photos,
			
		}
	}
}
