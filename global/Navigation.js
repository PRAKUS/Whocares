import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
const style = {
	logoSize: { height: "45px", width: "45px" },
};

const Navigation = (props) => {
	const [position, changePosition] = useState(" ");
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 10) {
				changePosition(" fixed-top");
			} else {
				changePosition("");
			}
		});
	}, []);
	return (
		<div className={`${position} bg-light shadow`} style={{zIndex:5}}>
			<Navbar className={`${props.className}  container `} expand='md'>
				<Navbar.Brand href='/'>
					<img
						style={style.logoSize}
						alt='logo'
						src={`${HOST}/uploads/logo_9b5ab53b51.png`}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto text-white' activeKey='/home'>
						<Nav.Item>
							<Link href='/'>
								<p className='my-orange nav-link m-0 cursor'>Home</p>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link
								href='/about'
								className='my-orange nav-link'
								eventKey='link-1'>
								<p className='my-orange nav-link m-0 cursor'>About</p>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link
								href='/event'
								className='my-orange nav-link'
								eventKey='link-2'>
								<p className='my-orange nav-link m-0 cursor'>Events</p>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link
								href='/getinvolved'
								className='my-orange nav-link'
								eventKey='link-3'>
								<p className='my-orange nav-link m-0 cursor'>Get Involved</p>
							</Link>
						</Nav.Item>

						<Nav.Item>
							<Link href='/gallery' className='my-orange nav-link' eventKey='link-3'>
								<p className='my-orange nav-link m-0 cursor'>Our Gallery</p>
							</Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
