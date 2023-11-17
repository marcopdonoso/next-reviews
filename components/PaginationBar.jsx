import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function PaginationBar({ href, page, pageCount }) {
	return (
		<div className="flex items-center gap-2">
			<PaginationLink
				enabled={page > 1}
				href={`${href}?page=${page - 1}`}
			>
				<ChevronLeftIcon className="h-5 w-5" />
				<span className="sr-only">Página anterior</span>
			</PaginationLink>
			<span>
				Página {page} de {pageCount}
			</span>
			<PaginationLink
				enabled={page < pageCount}
				href={`${href}?page=${page + 1}`}
			>
				<ChevronRightIcon className="h-5 w-5" />
				<span className="sr-only">Página siguiente</span>
			</PaginationLink>
		</div>
	)
}

function PaginationLink({ children, enabled, href }) {
	if (!enabled) {
		return (
			<span className="border cursor-not-allowed rounded text-sm text-slate-300">
				{children}
			</span>
		)
	}
	return (
		<Link
			href={href}
			className="border rounded text-sm text-slate-500 hover:bg-orange-100 hover:text-slate-700"
		>
			{children}
		</Link>
	)
}
