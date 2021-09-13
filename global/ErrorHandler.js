import React,{useState, useEffect} from 'react'
import {Modal} from "react-bootstrap" 

function ErrorHandler(props) {
	
const [status, setstatus] = useState();
const [show, setShow] = useState(false);


useEffect(()=>{
	console.log(props)
	if(props.status){
		setShow(true);
	}
	
    statusHandler(props.status)
},[props.status])

const statusHandler = () => {
    console.log(props.status)

    if (props.status === 200) {
        setstatus(successModal);
		
        console.log("scmodal")
        return;
    } else {
        setstatus(errmodal);
		
        console.log(props.status)
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
        </>
    )
}

export default ErrorHandler;
