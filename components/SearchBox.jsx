'use client'

import { Combobox } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SearchBox() {
	const router = useRouter()
	const [query, setQuery] = useState('')
	const [reviews, setReviews] = useState([])

	useEffect(() => {
		const fetchSearchReviews = async () => {
			const response = await fetch('api/search?query=' + encodeURIComponent(query))
			const reviews = await response.json()
			setReviews(reviews)
		}
		if (query.length > 1) {
			fetchSearchReviews()
		} else {
			setReviews([])
		}
	}, [query])

	const handleChange = (review) => {
		router.push(`/reviews/${review.slug}`)
	}

	return (
		<div className="relative w-48">
			<Combobox onChange={handleChange}>
				<Combobox.Input
					placeholder="Buscar..."
					className="border px-2 py-1 rounded w-full"
					onChange={(event) => setQuery(event.target.value)}
					value={query}
				/>
				<Combobox.Options className="absolute bg-white py-1 w-full">
					{reviews.map((review) => (
						<Combobox.Option
							key={review.slug}
							value={review}
						>
							{({ active }) => (
								<span
									className={`block px-2 truncate ${active ? 'bg-orange-100' : ''} `}
								>
									{review.title}
								</span>
							)}
						</Combobox.Option>
					))}
				</Combobox.Options>
			</Combobox>
		</div>
	)
}
