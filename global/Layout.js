import { Navigation, Footer } from "./";
import Head from "next/head";
import EventState from "../Context/EventContext/EventState";

function Layout({ children }) {
	return (
		<div>
			<Head>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Rubik'
				/>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Nunito'
				/>
			</Head>
			<Navigation />
			<EventState>
				<>{children}</>

				<Footer />
			</EventState>
		</div>
	);
}

export default Layout;
