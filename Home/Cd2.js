import React from "react";
import { Card } from "react-bootstrap";


import Link from "next/link" 

function Cd2({event,url}) {

	const date=new Date(event.createdAt)
const patt=/\n/;
	
	return (
		
		
		
		<Card className="cursor" style={{maxWidth:"400px"}}>
	
	
		<Link href={url} passHref>
			<a className="text-decoration-none">
			<Card.Img variant='top' src={`${event.headerimage.url}`} />
			<Card.Body>
				<Card.Title className="myprimary-text" >{event.causename}</Card.Title>
				<Card.Text className="mysecondary-text " >
					{event.eventdetails.slice(event.eventdetails.search(patt),(event.eventdetails.search(patt)+100))}.....

					
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small className='text-muted'>Added on {date.toString().slice(0,10)} </small>
			</Card.Footer>
			</a>
			</Link>
		</Card> 
	
	
		
	
		 
	
		
	
	);
}

export default Cd2;
