import QuoteList from '../quotes/QuoteList';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'Deon',
		text: 'I love React',
	},
	{
		id: 'q2',
		author: 'Nadia',
		text: 'Ek lief Reageer',
	},
	{
		id: 'q3',
		author: 'Frikkie',
		text: 'Wat de fok?',
	},
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
