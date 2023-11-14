import Image from 'next/image'
import Link from 'next/link'
import Heading from '@/components/Heading'
import { getReviews } from '@/lib/reviews'

// export const revalidate = 30

export const metadata = {
	title: 'Reseñas',
}

const PAGE_SIZE = 6

export default async function ReviewsPage({ searchParams }) {
	const page = parsePageParams(searchParams.page)
	const { reviews, meta } = await getReviews(PAGE_SIZE, page)
	return (
		<>
			<nav>
				<Heading>Reseñas</Heading>
				<div className="flex gap-2 pb-3">
					<a href={`/reviews?page=${page - 1}`}>&lt;</a>
					<span>
						Página {page} de {meta.pagination.pageCount}
					</span>
					<a href={`/reviews?page=${page + 1}`}>&gt;</a>
				</div>
				<ul className="flex flex-wrap gap-3">
					{reviews.map((review, index) => (
						<li
							key={review.slug}
							className="bg-white w-80 border rounded shadow hover:shadow-xl"
						>
							<Link href={`/reviews/${review.slug}`}>
								<Image
									priority={index === 0}
									src={review.image}
									alt=""
									width="320"
									height="180"
									className="rounded-t"
								/>
								<h2 className="font-orbitron font-semibold text-center py-1">
									{review.title}
								</h2>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	)
}

function parsePageParams(paramValue) {
	if (paramValue) {
		const page = parseInt(paramValue)
		if (page > 0 && isFinite(page)) {
			return page
		}
	}
	return 1
}
