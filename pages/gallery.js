import axios from 'axios';
import React, { useRef, useState ,useEffect} from 'react'
import {Card} from "react-bootstrap"
import {PhotoGallery} from "../global/"
import {HOST} from "../env/env"
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import Head from "next/head";


const Album=(props)=>{

    return (
    <div className="cursor overflow-hidden " style={{flex:"0 0 350px"}}  onClick={props.onClick}>
    <Card > 
        <Card.Img  src={`${props.photo}`}   />
		<Card.ImgOverlay className='banner-overlay   '>
			<p className='text-white h2 text-center '>{props.ablumname}</p>
            <p className='text-white p1 text-center'>{props.description}</p>
		</Card.ImgOverlay>
    </Card>

    </div>
    )
}
    



function Gallery({photo}) {

    const[selectAlbum,setSelectlbum]=useState(0);
    const [slideCount,setslidesCount]=useState(0);

    const slides=useRef();
    useEffect(()=>{
        window.scroll(0, 0);
    },[])

    const prev=()=>{
        let element=slides.current;
      
        if(slideCount<element.children.length/parseInt(window.screen.width/350)-1){
            let newSlides=slideCount+1;
            setslidesCount(newSlides);
            slides.current.style.transitionDuration = "0.5s";
            element.style.transform=`translate(-${newSlides*350}px)`

        }
    };
    const next=()=>{
        let element=slides.current;
        if(slideCount){
            let newSlides=slideCount-1;
            setslidesCount(newSlides);
            slides.current.style.transitionDuration = "0.5s";
            element.style.transform=`translate(-${newSlides*350}px)`

        }
    };
    
    return (
        <div>
            <Head>
				<title>Gallery:Whocares</title>
			</Head>
           <section >
				<Card className='overflow-hidden banner2'>
					<Card.Img  src='images/about.png' />
					<Card.ImgOverlay className='banner-overlay d-flex justify-content-center align-items-center'>
						<p className='text-white h1 '>Memories to be cheeries</p>
					</Card.ImgOverlay>
				</Card>
			</section>


            <section className="container mt-4">
                <p className="text-center h1 myprimary-text pb-4">Memories  Lane</p>
            <div className="d-flex overflow-hidden sliderContainer"  style={{position:"relative"}}>
                    <BiLeftArrow  className=" button  buttonleft " onClick={next}/>
                    <BiRightArrow className=" button  buttonRight " onClick={prev} />
             
                <div ref={slides} className="d-flex flex-row"  >
                   
               {photo.map((photo,index)=>{
                return(<Album key={index} ablumname={photo.albumname} description={photo.description} photo={photo.photos[0].url} onClick={()=>{setSelectlbum(index)}} />)
                   
               })}
               </div>
                </div>
              
            </section>

            <section className="section-mgap">
                <PhotoGallery  photo={photo[selectAlbum]}/>
            </section>
            
        </div>
    )
}

export default Gallery;

export async function getServerSideProps(){

const res= await axios.get(`${HOST}/photoalbums`);



const photo=res.data;





return{
    props:{
        photo,
    }
}

}




