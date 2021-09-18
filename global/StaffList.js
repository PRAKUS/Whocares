import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll"
const SCd = (props) => {
	return (
		<Card>
			
			<Card.Img src='images/icon/profilePic.jpg' />
			<Card.Footer>
				<p className='text-center myprimary-text h5'>{props.des.name}</p>
				<p className='text-center my-orange '>{props.des.degenation}</p>
			</Card.Footer>
		
		</Card>
	);
};

function StaffList() {
	return (
		<ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
		<CardDeck className='d-flex'>
			<SCd des={{ name: "Pramod", degenation: "Manager" }} />
			<SCd des={{ name: "Pramod", degenation: "Manager" }} />
			<SCd des={{ name: "Pramod", degenation: "Manager" }} />
			<SCd des={{ name: "Pramod", degenation: "Manager" }} />	
		</CardDeck>
		</ScrollAnimation>
		
	);
}

export default StaffList;
