import React, { useState } from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";
import axios from "axios";
import {HOST} from "../env/env"

export default function VolunteerForm() {
	const [input, setInput] = useState(
		useState({
			fname: "",
			lname: "",
			address: "",
			phonenumber: "",
			email: "",
		}),
	);
	const [status, setstatus] = useState();
	const [show, setShow] = useState(false);
	let url = `${HOST}/volunteerregistrations`;
	const inputHandler = (event) => {
		event.preventDefault();
		setInput((input) => ({
			...input,
			[event.target.name]: event.target.value,
		}));
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = await axios.post(url, input);
			statusHandler(data);
			setShow(true);
		} catch (err) {
			statusHandler(err);
			setShow(true);
			console.log(err);
		}

		setInput({
			fname: "",
			lname: "",
			address: "",
			phonenumber: "",
			email: "",
		});
	};

	const statusHandler = (data) => {
		console.log(data);
		if (data.status === 200) {
			setstatus(successModal);
		} else {
			setstatus(errmodal);
		}
	};

	const errmodal = () => {
		return (
			<>
				<Modal.Header closeButton className='text-danger'>
					Error
				</Modal.Header>
				<Modal.Body>
					<p className='text-danger'>Something Went wrong please try again</p>
				</Modal.Body>
			</>
		);
	};

	const successModal = () => {
		return (
			<>
				<Modal.Header closeButton className='text-success'>
					Success
				</Modal.Header>
				<Modal.Body>
					<p className='text-success'>
						Thank you for registration we will contact you.
					</p>
				</Modal.Body>
			</>
		);
	};
	return (
		<>
			<Modal
				show={show}
				backdrop='static'
				keyboard={false}
				onHide={() => {
					setShow(false);
				}}>
				{status}
			</Modal>
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId='firstname'>
						<Form.Label>First Name</Form.Label>
						<Form.Control
							name='fname'
							type='text'
							placeholder='First Name'
							onChange={inputHandler}
							value={input.fname}
							required
						/>
					</Form.Group>
					<Form.Group as={Col} controlId='lastname'>
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							type='text'
							onChange={inputHandler}
							value={input.lname}
							name='lname'
							placeholder='Last Name'
						/>
					</Form.Group>
				</Form.Row>

				<Form.Group controlId='address'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						type='text'
						name='address'
						placeholder='Address'
						value={input.address}
						onChange={inputHandler}
						required
					/>
				</Form.Group>

				<Form.Group controlId='phonenumber'>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type='text'
						name='phonenumber'
						placeholder='Phone Number'
						required
						onChange={inputHandler}
						value={input.phonenumber}
					/>
				</Form.Group>
				<Form.Group controlId='email'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						name='email'
						placeholder='Email'
						value={input.email}
						onChange={inputHandler}
						required
					/>
				</Form.Group>

				<Button className='myorange-bg border-0' onClick={handleSubmit}>
					Register
				</Button>
			</Form>
		</>
	);
}
