import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { ImLocation2, ImClock } from "react-icons/im";
import Link from "next/link";
import {HOST} from "../env/env"


function GEventCard(props) {
	

	const [month, setmonth] = useState();
	const [time, setTime] = useState();
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

	useEffect(() => {
		try {
			let program = props.event;
			if (program != undefined) {
				setEvent(program);
				timeFormater();
			}
		} catch {}
	}, [props.event, events.startdate]);

	return (
		<Link href={`eventdetail/${events.id}`}>
		
			<Card
				className='h-100 overflow-hidden cursor'
				style={{ maxHeight: "350px" }}>
				<Card.Img
					src={`${events.headerimage.formats.medium!=undefined?events.headerimage.formats.medium.url:events.headerimage.url||events.headerimage.formats.small.url}`}
				/>
				<Card.ImgOverlay className='banner-overlay'>
					<Card.Footer className='text-white border-0 cardmargin'>
						<Row>
							<Col xs={3} sm={2} md={3} lg={2} className='myorange-bg  rounded'>
								<p className='m-0 text-center h2'>
									{events.startdate.slice(8, 10)}
								</p>
								<p className='m-0 text-center'>{month}</p>
							</Col>
							<Col xs={9} sm={10} md={9} lg={10}>
								<p className='h4'>{events.Name}</p>
								<div className='d-flex align-items-center '>
									<div className='d-flex align-items-center'>
										<ImLocation2 />
										<p className='m-0 ml-1 p1'>{events.location}</p>
									</div>
									<div className='d-flex align-items-center ml-4'>
										<ImClock />
										<p className='m-0 ml-1 p1'>{time}</p>
									</div>
								</div>
							</Col>
						</Row>
					</Card.Footer>
				</Card.ImgOverlay>
			</Card>
			
			
		</Link>
	);
}

export default GEventCard;
