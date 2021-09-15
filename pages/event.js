import React, { useEffect, useState, useContext } from "react";
import EventCard from "./EventComponent/EventCard";
import { Row, Card ,Col} from "react-bootstrap";
import EventContext from "../Context/EventContext/EventContext";
import axios from "axios";
import {HOST} from "../env/env"
import Head from "next/head";

function Events({recentEvents}) {
	const { state } = useContext(EventContext);

	const [latestlist, setlist] = useState([]);

	useEffect(() => {
		window.scroll(0, 0);
		latestEvent(state.events);
	}, [state.events]);

	const latestEvent = () => {
		try {
			
				const component = state.events.map((events) => {
					return <EventCard key={events.id} event={events} endpoint={"eventdetail"}  />;
				});
				setlist(
					component.sort(function (a, b) {
						return a - b;
					}),
				);
			
		
		
		} catch (err) {
			console.log("work", err);
			return <div className='text-white'>hhh</div>;
		}
	};
	return (
		<div>
			<Head>
				<title>Event:Whocares</title>
			</Head>
			<section>
				<Card>
					<Card.Img src='images/about.png' />
					<Card.ImgOverlay className='banner-overlay d-flex justify-content-center align-items-center'>
						<p className='text-white h1 '>Our Events</p>
						<p></p>
					</Card.ImgOverlay>
				</Card>
			</section>
			<section className='container section-mgap'>
				<p className='text-center h2 myprimary-text section-pbgap '>
					{" "}
					Our upcoming Events
				</p>
				<Row>{latestlist.length>0?latestlist:<Col><p className="text-center">No upcoming events. Stay tuned for new Events </p></Col> }</Row>
			</section>
			<section className='my-primary section-mgap'>
				<div className='container  section-pgap section-pbgap'>
					<p className='text-center h2 myprimary-text  '> Our Pasts Events</p>
					<Row>
						{recentEvents.length>0?recentEvents.map((events,index)=>{return <EventCard key={index} event={events} endpoint={"recentevent"}/>}):<Col><p className="text-center">No events till now</p></Col> }
					</Row>
				</div>
			</section>
		</div>
	);
}

export default Events;

export  async  function getServerSideProps(){

	const res=await axios.get(`${HOST}/recent-events`)
	const	recentEvents=res.data;
	return{
		props:{
			recentEvents
		}
	}
}
