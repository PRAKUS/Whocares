import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ImLocation2, ImClock } from "react-icons/im";
import Link from "next/link";

import {HOST} from "../../env/env"

const EventCard = (props) => {
	const [month, setmonth] = useState();
	const [events, setEvent] = useState({
		id: "",
		Name: "",
		startdate: "",
		location: "",
		headerimage: {
			formats: {
				medium: {
					url: "",
					name: "",
				},
			},
		},
	});

	const [time, setTime] = useState();
	useEffect(() => {
		try {
			let program = props.event;
			if (program != undefined) {
				setEvent(program);
				timeFormater(events.startdate);
			}
		} catch (err) {
			console.log(err);
		}
	}, [props.event, events.startdate]);

	const timeFormater = () => {
		try {
			let dates = events.startdate;

			if (dates) {
				let date = new Date(dates);
				let month = date.toString().slice(3, 7);
				month = month.toUpperCase();
				let time = parseFloat(date.toString().slice(15, 20)).toFixed(2);

				setmonth(month);
				if (time > 12) {
					time = time % 12;
					setTime(time + "pm");
				} else {
					setTime(time + "am");
				}
			}
		} catch (err) {
			console.log("tf", err);
		}
	};
	return (
		<Col key={props.key} xsm={12} sm={12} md={6} lg={4} className='mt-4 cursor'>
			<Link href={`eventdetail/${events.id}`} passHref>
				<Card className=' overflow-hidden eventimgbg' >
					<Card.Img
						src={`${HOST}${events.headerimage.formats.medium.url}`}
						className='h-100 w-100' 
					/>
					<Card.ImgOverlay className='banner-overlay'>
						<Card.Footer
							className='text-white border-0 cardmargin'
							>
							<Row>
								<Col
									xs={3}
									sm={2}
									md={3}
									lg={3}
									className='myorange-bg d-flex justify-align-center align-items-center rounded '>
									<div >
									<p className='ml-2 m-0 text-center '>
										{events.startdate.slice(8, 10)}
									</p>
									<p className='ml-2 m-0 text-center' >{month}</p>
									</div>
									
								</Col>
								<Col xs={9} sm={10} md={9} lg={9}>
									<p className='h4'>{events.Name}</p>
									<div className='d-flex align-items-center '>
										<div className='d-flex align-items-center'>
											<ImLocation2 />
											<p className='m-0 p1 ml-1 text-truncate' style={{maxWidth:"100px"}}>{events.location}</p>
										</div>
										<div className='d-flex align-items-center ml-4'>
											<ImClock />
											<p className='m-0 p1 ml-1'>{time}</p>
										</div>
									</div>
								</Col>
							</Row>
						</Card.Footer>
					</Card.ImgOverlay>
				</Card>
			</Link>
		</Col>
	);
};

export default EventCard;
