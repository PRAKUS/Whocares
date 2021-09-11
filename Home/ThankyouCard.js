import React from "react";
import { Card, Image } from "react-bootstrap";
function ThankyouCard() {
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<Card className='bg-transparent w-50  border-0 px-4 d-flex align-items-center p-3'>
				<Image
					className='profilepic w-100 '
					src='images/icon/profilepic.jpg'
					roundedCircle
					alt="profile"
				/>
				<Card.Text className='text-center myprimary-text'>
					Loresm sister
				</Card.Text>
				<Card.Text className='text-center mysecondary-text'>
					Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
					enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
					exercitation amet. Nisi anim cupidatat duis.
				</Card.Text>
			</Card>
		</div>
	);
}

export default ThankyouCard;
