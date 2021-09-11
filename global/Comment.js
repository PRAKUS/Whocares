import React from "react";

function Comment(props) {
	return (
		<div className='border p-3 my-4 rounded shadow' >
			<p className='myprimary-text border-bottom'>{props.name}</p>
			<p className='mysecondary-text'>{props.comment}</p>
		</div>
	);
}

export default Comment;
