import React,{useState,useEffect} from "react";
import { Form, Button ,Col} from "react-bootstrap";
import axios from "axios"; 
const CommentForm = ({endpoints,commentrefresh}) => {

	const[comment,setComment]=useState({name:"",email:"",comment:"",event:{},recent_event:{}})

	const InputHandler=(event)=>{
		event.preventDefault();
		setComment((comment)=>({
			...comment,
			[event.target.name]:event.target.value
		}));
	}
	useEffect(()=>{
		if(endpoints.name==="events"){
			setComment({...comment,event:endpoints.value.post})
		}
		if(endpoints.name==="recentevent"){
			setComment({...comment,recent_event:endpoints.value.post})
		}
		
	},[endpoints.value])

	

	const submitHandler= async(event)=>{
		event.preventDefault();
		try{
			console.log(comment)
			const req=axios.post(`${HOST}/comments/`,comment);
			console.log(req)
			setComment({name:"",email:"",comment:"",event:{},recent_event:{}});
			commentrefresh(endpoints.value.post);
		}
		catch (err){
				console.log(err);
		}
	}
	
	return (
		<Form className='  sw-100 border-bottom' onSubmit={submitHandler}>
			<Form.Group className='mb-3'  controlId='exampleForm.ControlTextarea1'>
				<Form.Label>Your Thoughts</Form.Label>
				<Form.Control as='textarea' name="comment" value={comment.comment}  onChange={InputHandler} rows={3} required/>
			</Form.Group>
			<Form.Row>
			<Form.Group as={Col} md={5} className='mb-3' controlId='name'>
				
				<Form.Control type='text' name="name" value={comment.name} onChange={InputHandler} placeholder='your name' required/>
				</Form.Group>
			<Form.Group as={Col} md={5}>
				
				<Form.Control type='email' name="email"  value={comment.email} onChange={InputHandler} placeholder='name@example.com' required/>
			</Form.Group>
			<Form.Group as={Col} md={2}>
				
			<Button className='myorange-bg border-0 w-100' type="submit" > Comment</Button>
			</Form.Group>
			</Form.Row>
			
			
		</Form>
	);
};

export default CommentForm;
