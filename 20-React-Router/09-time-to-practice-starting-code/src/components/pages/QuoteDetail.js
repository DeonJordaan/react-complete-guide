import { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

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

const QuoteDetail = () => {
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No quote found</p>;
	}

	return (
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
