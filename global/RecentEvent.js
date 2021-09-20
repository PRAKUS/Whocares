import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

function RecentEvent(props) {
	let date = props.date;

	const defaultValue = () => {
		return (
			<>
				<p className='text-white m-0'>{props.eventName}</p>
				<small className='text-white'>
					{date != undefined ? date.slice(0, 10) : " "}
				</small>
			</>
		);
	};
	return (
		<Link href={props.link} passHref>
			<a>
			<Row
				className={`${props.className} d-flex m-0 align-items-center cursor`}>
				<Col
					xs={3}
					sm={3}
					md={3}
					className='p-0 m-0 overflow-hidden'
					style={{ height: "40px", maxWidth: "80px" }}>
					<img src={props.img} className=' bg-light w-100' alt='' />
				</Col>
				<Col xs={8} sm={8} md={8} className='m-0 p-0'>
					<div className='d-flex flex-column ml-1'>
						{props.children ? props.children : defaultValue()}
					</div>
				</Col>
			</Row>
			</a>
		</Link>
	);
}

export default RecentEvent;
