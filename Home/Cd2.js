import React from "react";
import { Card } from "react-bootstrap";
import {HOST} from "../env/env"
function Cd2({event}) {
	return (
		<Card>
			<Card.Img variant='top' src={`${HOST}${event.headerimage.url}`} />
			<Card.Body>
				<Card.Title>{event.causename}</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small className='text-muted'>Last updated {event.created_at} mins ago</small>
			</Card.Footer>
		</Card>
	);
}

export default Cd2;
