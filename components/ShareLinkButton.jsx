'use client'

import { LinkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function ShareLinkButton() {
	const [clicked, setClicked] = useState(false)
	const handleClick = () => {
		navigator.clipboard.writeText(window.location.href)
		setClicked(true)
		setTimeout(() => setClicked(false), 1500)
	}

	return (
		<button
			onClick={handleClick}
			className="flex items-center gap-1 border rounded px-2 py-1 text-sm text-slate-500 hover:bg-orange-100 hover:text-slate-700"
		>
			<LinkIcon className="h-4 w-4" />
			{clicked ? 'Link copiado!' : 'Compartir Link'}
		</button>
	)
}
