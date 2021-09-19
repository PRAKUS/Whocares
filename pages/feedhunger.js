import axios from "axios";
import React,{useState,useEffect} from "react";
import { Card, Row, Col, Form, Button, Image,Modal ,Carousel} from "react-bootstrap";
import { ThankyouCard } from "../Home";
import {HOST} from "../env/env";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";


function FeedHunger() {

useEffect(()=>{
	window.scroll(0, 0);
},[])
const [input,setInput]=useState({first_name:"",last_name:"",occasion:"",phone_number:""});
const [status, setstatus] = useState();
const [show, setShow] = useState(false);

const inputHandler=(event)=>{
	event.preventDefault();
	setInput((input)=>({
		...input,
		[event.target.name]:event.target.value,
	}))
}

const submitHandler=async(event)=>{
	event.preventDefault()
	try{
		const req=await axios.post(`${HOST}/fooddonations`,input);
		statusHandler(req);
			setShow(true);
		
	}catch(err){
		statusHandler(err);
			setShow(true);
		console.log(err)
	}
	setInput({first_name:"",last_name:"",occasion:"",phone_number:""})
}
const statusHandler = (data) => {
	
	if (data.status === 200) {
		setstatus(successModal);
	} else {
		setstatus(errmodal);
	}
};

const errmodal = () => {
	return (
		<>
			<Modal.Header closeButton className='text-danger'>
				Error
			</Modal.Header>
			<Modal.Body>
				<p className='text-danger'>Something Went wrong please try again</p>
			</Modal.Body>
		</>
	);
};

const successModal = () => {
	return (
		<>
			<Modal.Header closeButton className='text-success'>
				Success
			</Modal.Header>
			<Modal.Body>
				<p className='text-success'>
					Thank you for contacting us. We will contact you.
				</p>
			</Modal.Body>
		</>
	);
};




	return (
		<div>
			<Head>
				<title>Voak Lai Vojan:Whocares</title>
			</Head>
				<Modal
				show={show}
				backdrop='static'
				keyboard={false}
				onHide={() => {
					setShow(false);
				}}>
				{status}
			</Modal>
			<section className='overflow-hidden'>
				<Card>
					<Card.Img src='images/voklaivojanCover.png' />
					<Card.ImgOverlay className='banner-overlay d-flex justify-content-center align-items-center'>
						<p className='text-white h1'>Voko Lai Bojan</p>
					</Card.ImgOverlay>
				</Card>
			</section>
			<section className='container section-mgap section-mgap section-pbgap'>
				<p className='text-center h2 m-0 my-orange'>
					Care for one who dont have anyone
				</p>
				<p className='text-center h4 myprimary-text'>
					Be the reason for someone smiles
				</p>
				<p className='font-sm  text-center  mysecondary-text p1'>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
					cillum sint consectetur cupidatat.
				</p>
				<Row>
					<Col xs={12} sm={12} md={4}>
						<Card className="eventimgbg">
							<Card.Img className="h-100" src='images/oldman.png' />
							<Card.ImgOverlay></Card.ImgOverlay>
						</Card>
					</Col>
					<Col xs={12} sm={12} md={4}>
						<Card className="eventimgbg">
							<Card.Img className="h-100 w-100" src='images/voklaivojanCover.png' />
							<Card.ImgOverlay></Card.ImgOverlay>
						</Card>
					</Col>
					<Col xs={12} sm={12} md={4}>
						<Card className="eventimgbg">
							<Card.Img className="h-100" src='images/vlvcover.png' />
							<Card.ImgOverlay></Card.ImgOverlay>
						</Card>
					</Col>
				</Row>
			</section>

			<section className='my-primary section-mgap section-pgap section-pbgap'>
				<div className='container'>
					<p className='myprimary-text h2 text-left mb-4'>
						Contat us to Donate
					</p>

					<Row>
						<Col xs={12} sm={12} md={6}>
							<ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeft" >
							<Form onSubmit={submitHandler}>
								<Form.Row>
									<Form.Group as={Col} controlId='firstname'>
										<Form.Label>First Name</Form.Label>
										<Form.Control type='text' name="first_name" value={input.first_name} onChange={inputHandler} placeholder='First Name'  required/>
									</Form.Group>
									<Form.Group as={Col} controlId='lastname'>
										<Form.Label>Last Name</Form.Label>
										<Form.Control type='text' name="last_name" value={input.last_name} onChange={inputHandler} placeholder='Last Name' />
									</Form.Group>
								</Form.Row>

								<Form.Group controlId='firstname'>
									<Form.Label>Ocassion</Form.Label>
									<Form.Control type='text' name="occasion" value={input.occasion} onChange={inputHandler}  placeholder='Ocassion' />
								</Form.Group>

								<Form.Group controlId='phonenumber'>
									<Form.Label>Phone Number</Form.Label>
									<Form.Control type='number' name="phone_number" placeholder='Phone Number' value={input.phone_number} onChange={inputHandler}  required />
								</Form.Group>

								<Button variant='primary' type='submit'>
									Contact Us
								</Button>
							</Form>
							</ScrollAnimation>
						</Col>
						<Col className='d-flex justify-content-center align-items-center'>
							<ScrollAnimation animateOnce={true} animateIn="animate__fadeIn">
							<Image src='images/icon/fooddonation.png' className="clipcart w-100" alt=""/>
							</ScrollAnimation>
						</Col>
					</Row>
			
				</div>
			</section>

			<section className=' '>
				<div className='container section-pgap section-pbgap'>
					<p className='text-center myprimary-text h2 mb-0 pb-3'>
						Thank you for your support
					</p>
					<p className='text-center my-orange m-0 sm-font m-0'>
						Message from our suvrival
					</p>
				
						<Carousel controls={true} indicators={false}>
							<Carousel.Item>
								<ThankyouCard />
							</Carousel.Item>
							<Carousel.Item>
								<ThankyouCard />
							</Carousel.Item>
							<Carousel.Item>
								<ThankyouCard />
							</Carousel.Item>
						</Carousel>
					
				</div>
			</section>
		</div>
	);
}

export default FeedHunger;
