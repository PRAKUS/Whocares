import React, { useEffect, useContext, useState } from "react";
import {
	Row,
	Col,
	Card,
	CardDeck,
	Image,
	Carousel,
	Button,
} from "react-bootstrap";
import { Cd1, Cd2, MissionCard, ThankyouCard } from "../Home";
import { service } from "../data/data";
import {

	GEventCard,
	PhotoGallery,
	RecentEvent,
} from "../global";
import Head from "next/head";
import EventContext from "../Context/EventContext/EventContext";
import Link from "next/link";
import axios from "axios";
import{HOST} from "../env/env"
import ScrollAnimation from "react-animate-on-scroll";





function Home({photos,recentEvent,donar}) {

	

	const { state } = useContext(EventContext);
	

	const[eventCount,setEventCount]=useState(0);
	const [list, setlist] = useState();
	useEffect(() => {
		// window.scroll(0, 0);
		latestEvent(state.events);
		setEventCount(state.events.length)
		
	}, [state.events]);


	const latestEvent = () => {
		
		try {

				const component = state.events.slice((state.events.length-4),state.events.length-1).map((events,index) => {
					return (
						<li className='py-2 ' key={events.id}>
							<ScrollAnimation animateOnce={true} animateIn="animate__fadeIn" >
							<RecentEvent
								eventName={events.Name}
								link={`/eventdetail/${events.id}`}
								date={events.startdate}
								img={`${events.headerimage.formats.thumbnail.url}`}
							/>
							</ScrollAnimation>
						</li>
					);
				});
				setlist(
					component.sort(function (a, b) {
						return a - b;
					}),
				);
			
			
		} catch (err) {
			return <div className='text-white'>hhh</div>;
		}
	};
	return (
		<div>
			<Head>
				<title>Home:Whocares</title>
				<meta name="google-site-verification" content="gGPnokFRag0gS6BqOQPh-cqkpr8YlGp0b6SvUfeYEgw" />
			</Head>
			<section className='overflow-hidden banner'>
				<Card>
					<Card.Img src='images/about.png' />
					<Card.ImgOverlay className='banner-overlay d-flex justify-content-center align-items-center'>
						<p className='text-white h1 '>
							Working for the Unseen side of socity
						</p>
					</Card.ImgOverlay>
				</Card>
			</section>
			<section className=' p-2' style={{ marginTop: "-5%" }}>
				<div className=' container'>
					<Row>
						<Col xsm={12} sm={12} md={4}>
							<ScrollAnimation animateOnce={true} animateIn="animate__fadeInDownBig" >
							<Cd1 img="/images/icon/donate.png"></Cd1>
							</ScrollAnimation>
						
						</Col>
						<Col xsm={12} sm={12} md={4}>
							<ScrollAnimation animateOnce={true} animateIn="animate__fadeInDownBig" delay={300}>
							<Cd1 img="/images/icon/fundraise.png"></Cd1>
							</ScrollAnimation>
						
						</Col>
						<Col xsm={12} sm={12} md={4}>
						<ScrollAnimation animateOnce={true} animateIn="animate__fadeInDownBig" delay={600}>
							<Cd1 img="/images/icon/volunteer.png"></Cd1>
							</ScrollAnimation>
							
						</Col>
					</Row>
				</div>
			</section>
			<section className=' p-2 section-gap'>
				<div className=' container section-mgap'>
					<Row>
						<Col xsm={12} sm={12} md={6}>
							<ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeft" >
				
							<p className='primary-title myprimary-text'>About us</p>
							<p className='mysecondary-text justify-text p1'>
							WHO CARES is one of the largest and Social organization started from Kalimpong, 
							[Darjeeling] in 2012. Since its foundation the organization has been working 
							selflessly for the causes of humanities with its members coming from all
							 walks of life. Despite having different social, religious and economic 
							 backgrounds the one thing that unites the members is to BE AN INSPIRATION in 
							 serving the humanities.
							</p>
							<Image src='' alt=""/>
							<Link href='/about' passHref>
								<Button className='border-0 myorange-bg p1'>Read More</Button>
							</Link>
							</ScrollAnimation>
						</Col>
					
						<Col xsm={12} sm={12} md={6} className='d-flex flex-column'>
							<label className='text-center primary-title myprimary-text  '>
								Our Activities
							</label>
							<ScrollAnimation animateOnce={true} animateIn="animate__fadeInRight"> 
								<MissionCard missioncard={service[0]} />
							</ScrollAnimation>
							<ScrollAnimation animateOnce={true} animateIn="animate__fadeInRight" delay={200}>
								<MissionCard missioncard={service[1]} />
							</ScrollAnimation>
							<ScrollAnimation animateOnce={true} animateIn="animate__fadeInRight" delay={300}>
								<MissionCard missioncard={service[2]} />
							</ScrollAnimation>
						
							
						</Col>
					</Row>
				</div>
			</section>

			<section className='my-primary section-mgap '>
				<div className='container section-pgap section-pbgap'>
					<p className='text-center myprimary-text h2 mb-0 pb-3'>
						Thank you for your support
					</p>
					
				
						<Carousel controls={true} indicators={false}>
						{donar.map((fooddonar,index)=>{
								return(<Carousel.Item key={index}>
									<ThankyouCard fooddonar={fooddonar}/>
								</Carousel.Item>)
							})}
						</Carousel>
					
				</div>
			</section>

			<section className='mypicturebackground '>
				<div
					className='section-pgap section-pbgap'
					style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
					<div className='container'>
						<header className='section-pbgap'>
							<p className='text-white h2 text-center'>Our upcoming Events</p>
						</header>
						{eventCount>0?<Row>
							<Col md={6}>
								<ScrollAnimation animateOnce={true} animateIn="animate__fadeIn">
								<GEventCard
									event={
										state.events != "undefined"
											? state.events[state.events.length - 1]
											: ""
									}
								/>
								</ScrollAnimation>
								
							</Col>
							<Col md={3} className=' m-0'>
								<ul className='list-inline m-0'>{list}</ul>
							</Col>
						</Row>:<p className="text-center">We will update soon</p>}


						
						
					</div>
				</div>
			</section>

			<section className=' my-primary '>
				<div className='container section-pgap '>
					<p className='text-center myprimary-text m-0 h2'>Recent Activities</p>
					<p className='text-center m-0 my-orange sm-font'>
						Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
						cillum sint consectetur cupidatat..
					</p>
					{recentEvent.length>0?
					<ScrollAnimation animateOnce={true} animateIn='animate__fadeInUp'>
					<CardDeck className='section-pgap section-pbgap'>
					
							
						{recentEvent.slice(0,4).map((event, index)=>{
							
							
								return (<Cd2 key={index} event={event} url={`/recentevent/${event.id}`}/>)
						 }).sort((a,b)=>{return a-b})} 
						 {/* first sort , limit, map */}
					
						
					</CardDeck></ScrollAnimation>:<p className="text-center mt-4 section-pbgap">No Recent Event updated</p>}
				</div>
			</section>
			<div className='section-mgap'>
						
				<PhotoGallery photo={photos[parseInt(Math.random()*photos.length)]}/>  
			</div>
		</div>
	);
}



export default Home;

export  async  function getServerSideProps(){
	
	// 9578286
	// DC7D66

	try
	{
	const res= await axios.get(`${HOST}/photoalbums`);
	const photos=res.data;
	const res1=await axios.get(`${HOST}/recent-events`)
	const recentEvent=res1.data;
	const res2 =await axios.get(`${HOST}/food-donars`);
	const donar=res2.data;
	

		return{
			props:{
				donar,
				photos,
				recentEvent
			}
		}
	
	}
	catch(err){
		console.log(err)
		return{
			props:{
				donar:[],
				photos:[],
				recentEvent:[]
			}
		}
	}
	
	
}
