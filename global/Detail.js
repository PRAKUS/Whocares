import React, { useState} from "react";
import { Row, Col, Image, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { ImLocation2, ImClock } from "react-icons/im";
import { CommentForm, Comment } from "./";


import axios from "axios";
import { HOST } from "../env/env";


const Detail = ({ post ,endpoints}) => {
	let [commentchecker,setComment]=useState(post.comments)

	

	const commentHandler=async(req)=>{
		try{const res = await axios.get(
			`${HOST}/${endpoints}/${req.id}`,
		);
		const post = res.data.comments;
		setComment(post)}catch(err){console.log(err)}
		
	}
	const timeFormater = (time) => {
		let date = new Date(time);
		return date.toString().slice(3, 21);
	};

	return (
		<div className='container section-pbgap'>
			<section>
				<Row>
					<Col xs={12} sm={12} md={12}>
						<Card style={{ maxHeight: "400px" }} className='overflow-hidden'>
							<Image
								className='w-100 '
								src={`${HOST}${post.headerimage.url}`}
								alt="coverimage"
							/>
							<Card.ImgOverlay className='banner-overlay d-flex justify-content-center align-items-center'>
								<Card.Text className='h1 text-white'>{post.Name}{post.causename}</Card.Text>
							</Card.ImgOverlay>
						</Card>

						<Col className='postcontainer ' xs={12} sm={12} md={8}>
							<div>
								<div className='d-flex align-items-center '>
									<div className='d-flex align-items-center'>
										<ImLocation2 color='#fb743e' />
										<p className='m-0 ml-1 p1'>{post.location}</p>
									</div>
									<div className='d-flex align-items-center ml-4'>
										<ImClock color='#fb743e' />
										<p className='m-0 ml-1 p1 py-4'>
											{timeFormater(post.published_at)}
										</p>
									</div>
								</div>
								<ReactMarkdown className='markdown' transformImageUri={(uri) =>
								uri.startsWith("http") ? uri : `${HOST}${uri}`
							}>
									{post.eventdetails}
								</ReactMarkdown>

								{post.coordinatorNo?
									<div className='d-flex flex-column  '>
									<div className='d-flex '>
										<p className='m-0  p1'>Co-ordinator no:</p>
										<p className='m-0 ml-1 p1 myprimary-text'>
											{post.coordinatorNo},
										</p>
									</div>
									<div className='d-flex '>
										<p className='m-0 p1'>Sponsor By:</p>
										<p className='m-0 ml-1 myprimary-text'>
											{post.sponsorName}
										</p>
									</div>
								</div>
								:<div></div>}

								
							</div>
						
							<div className='section-mgap '>
								<p className='h3 myprimary-text mb-4'>Leave your thoughts: </p>
								<div className="border p-4">
								<CommentForm endpoints={endpoints} post={post}  commentrefresh={commentHandler}/>
								<div className='mt-3' >
									<p className="myprimary-text">Peoples Thoughts:-</p>
									<div style={{maxHeight:"300px",overflow:"scroll"}}>
									{commentchecker.length>0?commentchecker.sort(function(a,b){return a-b}).map((comment,index)=>{
										return (<Comment key={index} name={comment.name} comment={comment.comment}/>)
									}):<p className="border p-2">Be first to comment</p>
								}
									</div>
									
								</div>
								</div>
							
							</div>
						</Col>
					</Col>
				</Row>
			</section>
		</div>
	);
};


export default Detail;
