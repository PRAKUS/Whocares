import React from "react";
import { Card ,Image} from "react-bootstrap";


function Cd1(props) {
	return (
		<div className='m-1'>
			<Card className='my-primary border-0'>
				<div className='d-flex justify-content-center item-center'>
					<Image src={props.img} className='icon w-100' alt='' />
				</div>
				<Card.Body>
					<p className='myprimary-text text-center h4 primary-title'>
						Our Mission
					</p>
					<p className='my-orange text-center p1'>
						Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
						cillum sint consectetur cupidatat.
					</p>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Cd1;
