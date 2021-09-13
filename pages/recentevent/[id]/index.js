import React from "react";
import axios from "axios";
import { HOST } from "../../../env/env";

import { Detail } from "../../../global";
const endpoints="recent-events";



const RecentEventdetail=({post})=>{

	return(<div>
        <Detail post={post} endpoints={endpoints}/>
    </div>)
}


export default RecentEventdetail;

export async function getServerSideProps(context) {
	const res = await axios.get(
		`${HOST}/${endpoints}/${context.params.id}`,
	);
	const post = res.data;

	return {
		props: {
			post,
		},
	};
}
