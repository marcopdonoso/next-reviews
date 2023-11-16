import Link from 'next/link'
import NavLink from './NavLink'

export default function NavBar() {
	return (
		<nav>
			<ul className="flex gap-2">
				<li>
					<NavLink
						href={'/'}
						tag={'Top Gamer'}
						style={'font-orbitron font-bold'}
					/>
				</li>
				<li className="ml-auto">
					<NavLink
						href={'/reviews'}
						tag={'Reseñas'}
					/>
				</li>
				<li>
					<NavLink
						href={'/about'}
						tag={'Acerca de'}
					/>
				</li>
			</ul>
		</nav>
	)
}
