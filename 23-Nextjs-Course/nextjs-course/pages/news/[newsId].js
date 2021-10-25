import { useRouter } from 'next/router';

// This file will be served for requests to `www.ourdomain.com/news/detail-page`

function DetailPage() {
	const router = useRouter();

	console.log(router.query.newsId);

	return <h1>The Detail Page</h1>;
}

export default DetailPage;
