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
	let photos=[]
	try{
	 	photos=photo.photos===undefined?[]:photo.photos;
	}
	catch{
		photos=[]
	}

	

	return (
		<>
		{photos.length>0?<><div  className="photoDisplay w-100  section-mgap"   style={{display:singlePhoto,}}>
				
				<IoMdClose color="#fff" size={"2em"} className="cursor buttonRight"  style={{position:"absolute",zIndex:"99"}} onClick={()=>{setSinglePhoto("none")}}/>
				
					<Carousel  indicators={false} activeIndex={sliderCount} onSelect={(selectIndex,e)=>{setSliderCount(selectIndex)}} >	
						{photos.map((photo,index)=>{
							return(<Carousel.Item key={index}>
		
								<p className="text-center">
								<img key={index}  src={`${HOST}${photo.url}`}  className="h-100" style={{maxHeight:"600px" ,margin:"5% 0"}} />
								</p>
								
								</Carousel.Item>)}
								)
						} 
						
					</Carousel>	
				
				</div>
				<div className='container section-pbgap'>
					<header className='section-pbgap'>
						<p className='text-center myprimary-text h2 text-capitalize'>{photo.albumname}</p>
						<p className='text-center my-orange'>
							{photo.description}
						</p>
					</header>
					<Row>
						{photos.map((photo,index)=>{
							return(
							<ImageContainer key={index} src={photo.url}  onClick={()=>{setSliderCount(index);setSinglePhoto("")}} />
							)})}
						
					</Row> 
				</div></>:<div className='container section-pbgap'>
					<header className='section-pbgap'>
						<p className='text-center myprimary-text h2 text-capitalize'>Photo Not Available</p>
						<p className='text-center my-orange'>
							We will update you soon
						</p>
					</header>
					
				</div>}
		</>)


		
		
}

export default PhotoGallery;
