import React from "react";
import { Card, Image } from "react-bootstrap";
function ThankyouCard({fooddonar}) {
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<Card className='bg-transparent w-50  border-0 px-4 d-flex align-items-center p-3'>
				<div className='profilepic overflow-hidden  rounded-circle'>
					<Image
					
					src={fooddonar.donarpicture.formats.thumbnail.url}
					style={{height:"200px",width:"100%"}}
					alt="profile"
				/>
				</div>
				<Card.Text className='text-center myprimary-text mt-3 h5'>
					{fooddonar.donarname}
				</Card.Text>
				<Card.Text className='text-center mysecondary-text'>
				{fooddonar.thankyoumessage}
				</Card.Text>
			</Card>
		</div>
	);
}

export default ThankyouCard;
