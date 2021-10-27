import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const Homepage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>React meetups</title>
				<meta name='description' content="Browse a wonderful list of fake meetups I made for this course I'm studying"/>
			</Head>
			<MeetupList meetups={props.meetups} />;
		</Fragment>
	);
};

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;
// 	//fetch data from API
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	//fetch data from API
	const client = await MongoClient.connect(
		'mongodb+srv://Deon:q2Mp5OhjkMBt6R1z@cluster0.u2gr5.mongodb.net/meetups?retryWrites=true&w=majority'
	);

	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 10,
	};
}

export default Homepage;
