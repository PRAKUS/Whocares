import React from "react";
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterCircle,
} from "react-icons/ai";

import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";
function Share(props) {
	return (
		<div className='d-flex'>
			<FacebookShareButton
				color='#fb743e'
				url={props.link}
				title={props.causename}
				size='1.5em'>
				{" "}
				<AiFillFacebook color='#fb743e' size='1.5em' />
			</FacebookShareButton>
			<TwitterShareButton
				color='#fb743e'
				url={props.link}
				title={props.causename}
				size='1.5em'>
				<AiFillTwitterCircle color='#fb743e' size='1.5em' />
			</TwitterShareButton>

			<WhatsappShareButton
				color='#fb743e'
				url={props.link}
				title={props.causename}
				size='1.5em'>
				<AiFillInstagram color='#fb743e' size='1.5em' />
			</WhatsappShareButton>
		</div>
	);
}

export default Share;
