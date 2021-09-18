import React, { useEffect } from "react";
import { Card, Col, Row} from "react-bootstrap";
import {  PhotoGallery, StaffList } from "../global";
import { MissionCard} from "../Home";
import { IoFastFood, IoPeople } from "react-icons/io5";
import { FaDonate } from "react-icons/fa";
import axios from "axios";
import {HOST} from "../env/env"
import { service } from "../data/data";
import Head from "next/head"
import ScrollAnimation from "react-animate-on-scroll"

function About({photos}) {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	return (
		<div>
			<Head>
				<title>About:Whocares</title>
			</Head>
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
					<Col xs={12} sm={12} md={4}>

					</Col>
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
							>
							<ScrollAnimation className='d-flex justify-content-center align-items-center flex-column' animateOnce={true} animateIn="animate__fadeInUp" >
								<IoFastFood size='3em' />
								<p className='text-center primary-title my-orange mb-0'>
									Food Donation
								</p>
								<p className='text-center mysecondary-text mt-0'>
									Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
									sint cillum sint consectetur cupidatat.
								</p>
							</ScrollAnimation>
						
						</Col>
						<Col
							xs={12}
							sm={12}
							md={4}
						>
							<ScrollAnimation 	className='d-flex justify-content-center align-items-center flex-column' animateOnce={true} animateIn="animate__fadeInUp" delay={150}>
								<IoPeople size='3em' />
								<p className='text-center primary-title my-orange  mb-0'>
								Volunteer
								</p>
								<p className='text-center mysecondary-text mt-0'>
								Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
								sint cillum sint consectetur cupidatat.
								</p>
							</ScrollAnimation>
							
						</Col>
						<Col
							xs={12}
							sm={12}
							md={4}
							>
							<ScrollAnimation className='d-flex justify-content-center align-items-center flex-column' animateOnce={true} animateIn="animate__fadeInUp" delay={300}>
								<FaDonate size='3em' />
								<p className='text-center primary-title my-orange mb-0'>
								Providing Donation
								</p>
								<p className='text-center mysecondary-text mt-0'>
								Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
								sint cillum sint consectetur cupidatat.
								</p>
							</ScrollAnimation>
							
						</Col>
					</Row>
				</div>
			</section>
			<section className='mypicturebackground2 '>
				<div
					className='section-pgap section-pbgap'
					style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
					<div className='container'>
						<header className='section-pbgap'>
							<p className='myprimary-text h2 text-center'>Our Services</p>
						</header>
						<Row>
						<Col xsm={12} sm={12} md={6} className='d-flex flex-column'>
						<ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}> 
								<MissionCard shadow={true}  missioncard={service[0]} />
							</ScrollAnimation>
							<ScrollAnimation animateIn="animate__fadeInLeft" delay={200} animateOnce={true}>
								<MissionCard shadow={true} missioncard={service[1]} />
							</ScrollAnimation>
							<ScrollAnimation animateIn="animate__fadeInLeft" delay={300} animateOnce={true}>
								<MissionCard shadow={true} missioncard={service[2]} />
							</ScrollAnimation>
						</Col>
						<Col xsm={12} sm={12} md={6} className='d-flex flex-column'>
							
						<ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}> 
								<MissionCard shadow={true} missioncard={service[3]} />
							</ScrollAnimation>
							<ScrollAnimation animateIn="animate__fadeInRight" delay={200} animateOnce={true}>
								<MissionCard shadow={true} missioncard={service[4]} />
							</ScrollAnimation>
							<ScrollAnimation animateIn="animate__fadeInRight" delay={300} animateOnce={true}>
								<MissionCard shadow={true} missioncard={service[5]} />
							</ScrollAnimation>
						</Col>
					</Row>
						
					</div>
				</div>
			</section>
			<section className='container mt-4 section-pbgap'>
				<p className='myprimary-text text-center h3'>Meet our founder </p>
				<p className='text-center my-orange section-pbgap'>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
					cillum sint consectetur cupidatat.
				</p>
				<StaffList />
			</section>

			<section className="my-primary ">
			<div className='section-mgap pt-4'>
				
				<PhotoGallery photo={photos}/>  
			</div>
			</section>
		</div>
	);
}

export default About;


export  async  function getServerSideProps(){
	
	try{
	
		const count= await axios.get(`${HOST}/photoalbums/count`);
		
		if(count.data>1){
		let data=parseInt(Math.random() * (count.data - 1) + 1);
		const photo=await axios.get(`${HOST}/photoalbums/${data}`);
	
	
		let photos=photo.data;
	
		return{
			props:{
				photos,
				recentEvent
			}
		}
	
		}
	
		else{
			const photo=await axios.get(`${HOST}/photoalbums`)
			const photos=photo.data.length>0?photo.data[0]:[];
		
			return{
				props:{
					photos,
				
				}
			}
	
		}
	
	
	
		
		}catch(err){
			console.log(err)
			return{
				props:{
					photos:[],
					recentEvent:[]
				}
			}
		}
}
