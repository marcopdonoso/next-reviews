import Image from 'next/image'
import Link from 'next/link'
import Heading from '@/components/Heading'
import { getReviews } from '@/lib/reviews'

export const metadata = {
	title: 'Reseñas',
}

export default async function ReviewsPage() {
	const reviews = await getReviews(6)
	return (
		<>
			<nav>
				<Heading>Reseñas</Heading>
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
