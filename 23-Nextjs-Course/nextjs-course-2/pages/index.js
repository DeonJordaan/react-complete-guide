import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image: 'https://unsplash.com/photos/1uWanmgkd5g',
		address: 'Some Street, Some City, 6666',
		description: 'A First Meetup for NextJS',
	},
	{
		id: 'm2',
		title: 'A Second Meetup',
		image: 'https://unsplash.com/photos/KbOgNPPbH6U',
		address: 'Another Street, Another City, 6666',
		description: 'A Second Meetup for NextJS',
	},
];

const Homepage = () => {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Homepage;
