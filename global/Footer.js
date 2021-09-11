import React, { useEffect, useState, useContext } from "react";
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt, FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Col, Row } from "react-bootstrap";
import { RecentEvent } from ".";
import Link from "next/link";
import EventContext from "../Context/EventContext/EventContext";
import { HOST } from "../env/env";

const Iconcontainer = (props) => {
	return (
		<div className='d-flex align-items-center mt-1'>
			{props.children}

			<Link href={props.link}>
				<p className='text-white ml-2 primary-font '> {props.label}</p>
			</Link>
		</div>
	);
};

const Footer = () => {
	const [presentWindow, windowchange] = useState({
		style: "text-white text-right primary-font",
	});
	const [lpresentWindow, change] = useState({
		style: "text-white primary-font",
	});

	/*
	 *@sereenChange is for credit in bottom of page
	 *
	 *
	 */
	let screenChange = () => {
		if (window.screen.width > 500) {
			windowchange({ style: "text-white text-right primary-font " });
			change({ style: "text-white  primary-font " });
		} else {
			windowchange({ style: "text-white text-center primary-font " });
			change({ style: "text-white text-center  primary-font " });
		}
	};

	/*



*/

	const { state } = useContext(EventContext);
	const [list, setlist] = useState();
	useEffect(() => {
		window.addEventListener("resize", screenChange());
		latestEvent();
	}, [state.events]);

	const latestEvent = () => {
		try {
			const component = state.events.map((events) => {
				return (
					<li className='py-2 ' key={events.id}>
						<RecentEvent
							eventName={events.Name}
							link={`/eventdetail/${events.id}`}
														date={events.startdate}
							img={`${HOST}${events.headerimage.formats.thumbnail.url}`}
						/>
					</li>
				);
			});
			setlist(
				component.sort(function (a, b) {
					return a - b;
				}),
			);
		} catch (err) {
			console.log("work");
			return <div className='text-white'>hhh</div>;
		}
	};

	return (
		<div className='my-dark '>
			<div className='container'>
				<Row>
					<Col xl={3} lg={3} md={3} sm={12} xs={12} className='pt-4 '>
						<img
							src={`${HOST}/uploads/logo_9b5ab53b51.png`}
							style={{ height: "40px" }}
							alt='logo'
						/>
						<label className='my-orange ml-2 primary-title'>Who Cares</label>
						<p className='my-3 text-white primary-font  '>
							Albert Villa,12mile,kalimpong <br />
							West Bengal, India
						</p>

						<ul className='list-inline mt-2'>
							<li>
								<Iconcontainer
									link='/'
									color=' #3395ff'
									label='teamwhocares123@gmail.com'>
									<AiOutlineMail />{" "}
								</Iconcontainer>
							</li>
							<li>
								<Iconcontainer color=' #3395ff' label='+91-9876543210' link='/'>
									<FaPhoneAlt />{" "}
								</Iconcontainer>
							</li>
						</ul>
					</Col>
					<Col xl={3} lg={3} md={3} sm={12} xs={12} className=' pt-4'>
						<header className='primary-title  myborder-orange pb-2 my-orange'>
							Pages
						</header>
						<ul className='list-inline mt-2 text-white'>
							<li>
								<Link href='/' className=''>
									<p className='text-white  cursor m-0'>Home</p>
								</Link>
							</li>
							<li>
								<Link href='/about' className='text-white'>
									<p className='text-white cursor m-0'>About</p>
								</Link>
							</li>
							<li>
								<Link href='/event' className='text-white'>
									<p className='text-white  cursor m-0'>Events</p>
								</Link>
							</li>
							<li>
								<Link href='/getinvolved' className='text-white'>
									<p className='text-white   cursor m-0'>Get Involved</p>
								</Link>
							</li>
							<li>
								<Link href='/gallery' className='text-white'>
									<p className='text-white    cursor m-0'>Our Gallery</p>
								</Link>
							</li>
						</ul>
					</Col>
					<Col xl={3} lg={3} md={3} sm={12} xs={12} className=' p-4'>
						<header className='primary-title myborder-orange pb-2 my-orange'>
							Useful Links
						</header>
						<ul className='list-inline mt-2 text-white'>
							<li className='py-2' style={{ borderBottom: "1px dashed white" }}>
								<Link href='/getinvolved'>
									<p className='text-white cursor m-0'>Become Volunteer</p>
								</Link>
							</li>
							<li className='py-2' style={{ borderBottom: "1px dashed white" }}>
								<Link href='/event'>
									<p className='text-white cursor m-0'>Recent Events</p>
								</Link>
							</li>
							<li className='py-2' style={{ borderBottom: "1px dashed white" }}>
								<Link href='/'>
									<p className='text-white cursor m-0'>Fund Raise</p>
								</Link>
							</li>
						</ul>
					</Col>
					<Col xl={3} lg={3} md={3} sm={12} xs={12} className=' p-4'>
						<header className='primary-title myborder-orange pb-2 my-orange'>
							Upcoming Events
						</header>
						<ul className='list-inline mt-2 text-white'>{list}</ul>
					</Col>
					<Col xl={12} lg={12} sm={12} md={12} xs={12}>
						<header className='text-center my-orange'>
							Connect with us on
						</header>
						<div className='d-flex justify-content-center my-2'>
							<Iconcontainer link='/'>
								<FaFacebook size='40px' color='#fff' />{" "}
							</Iconcontainer>
							<Iconcontainer link='/'>
								<IoLogoWhatsapp size='40px' color='#fff' />{" "}
							</Iconcontainer>
							<Iconcontainer link='/'>
								<AiFillInstagram size='40px' color='#fff' />{" "}
							</Iconcontainer>
							<Iconcontainer link='/'>
								<FaFacebookMessenger size='40px' color='#fff' />{" "}
							</Iconcontainer>
						</div>
					</Col>
					<Col xl={12} lg={12} sm={12} md={12} xs={12}>
						<Row>
							<Col
								className={lpresentWindow.style}
								xl={6}
								lg={6}
								sm={12}
								md={6}
								xs={12}>
								All right reserved by Who Cares
							</Col>
							<Col
								className={presentWindow.style}
								xl={6}
								lg={6}
								sm={12}
								md={6}
								xs={12}>
								Designed and Devloped with love by Pramod.
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Footer;
