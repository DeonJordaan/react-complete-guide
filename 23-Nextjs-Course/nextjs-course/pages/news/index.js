import { Fragment } from 'react';
import Link from 'next/link';

// This file will be served for requests to `www.ourdomain.com/news`

function NewsPage() {
	return;
	<Fragment>
		<h1>The News Page</h1>;
		<ul>
			<li>
				<Link href="news/NextJS-News">NextJS News</Link>
			</li>
			<li>
				<Link href="news/Better-React">Better React</Link>
			</li>
		</ul>
	</Fragment>;
}

export default NewsPage;
