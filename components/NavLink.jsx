import Link from 'next/link'

export default function NavLink({ href, tag, style }) {
	return (
		<Link
			href={href}
			className={`text-orange-800 hover:underline ${style}`}
		>
			{tag}
		</Link>
	)
}
