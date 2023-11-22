import Image from 'next/image'
import Heading from '@/components/Heading'
import { getReviews } from '@/lib/reviews'
import Link from 'next/link'

// export const revalidate = 30

export default async function HomePage() {
	const { reviews } = await getReviews(3)
	// console.log(
	// 	'[HomePage] rendering: ',
	// 	reviews.map((review) => review.slug).join(',')
	// )
	return (
		<>
			<Heading>Top Gamer</Heading>
			<p className="pb-3">
				Tu sitio web preferido para encontrar reseñas sobre videojuegos
			</p>
			<ul className="flex flex-col gap-3">
				{reviews.map((review, index) => (
					<li
						key={review.slug}
						className="bg-white w-80 sm:w-full border rounded shadow hover:shadow-xl"
					>
						<Link
							href={`/reviews/${review.slug}`}
							className="flex flex-col sm:flex-row"
						>
							<Image
								priority={index === 0}
								src={review.image}
								alt=""
								width="320"
								height="180"
								className="rounded-t sm:rounded-l sm:rounded-r-none"
							/>
							<div className="px-2 py-1 text-center sm:text-left">
								<h2 className="font-orbitron font-semibold">{review.title}</h2>
								<p className="hidden pt-2 sm:block">{review.subtitle}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
