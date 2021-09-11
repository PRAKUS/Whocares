import React,{useState} from "react";
import { Row, Col,Carousel } from "react-bootstrap";
import {IoMdClose} from "react-icons/io"
import{HOST} from "../env/env"


function ImageContainer(props) {
	return (
		<Col xs={4} sm={4} md={4} onClick={props.onClick}  className='p-1 cursor overflow-hidden h-100  photo'>
			<img className='w-100  ' src={`${HOST}${props.src}`} alt='' />
		</Col>
	);
}

function PhotoGallery({photo}) {



	const[singlePhoto,setSinglePhoto]=useState("none");
	const[sliderCount,setSliderCount]=useState(0);

	return (
		<>
	
		<div  className="photoDisplay w-100  section-mgap"   style={{display:singlePhoto,}}>
		
		<IoMdClose color="#fff" size={"2em"} className="cursor buttonRight"  style={{position:"absolute",zIndex:"99"}} onClick={()=>{setSinglePhoto("none")}}/>
		<div className="d-flex align-items-center h-100">
			<Carousel  indicators={false} activeIndex={sliderCount} onSelect={(selectIndex,e)=>{setSliderCount(selectIndex)}} >	
				{photo.photos.map((photo,index)=>{
					return(<Carousel.Item key={index}>

						<p className="text-center">
						<img key={index}  src={`${HOST}${photo.url}`}  className="p-4 h-50 w-50 " />
						</p>
						</Carousel.Item>)}
						)
				} 
				
			</Carousel>	
		</div>
		</div>
		<div className='container section-pbgap'>
			<header className='section-pbgap'>
				<p className='text-center myprimary-text h2 text-capitalize'>{photo.albumname}</p>
				<p className='text-center my-orange'>
					{photo.description}
				</p>
			</header>
			<Row>
				{photo.photos.map((photo,index)=>{return(<ImageContainer key={index} src={photo.url}  onClick={()=>{setSliderCount(index);setSinglePhoto("")}} />)})}	
			</Row> 
		</div>
		</>
	);
}

export default PhotoGallery;
