import Link from 'next/link'
import NavLink from './NavLink'

export default function NavBar() {
	return (
		<nav>
			<ul className="flex gap-2">
				<li className="font-orbitron font-bold">
					<NavLink href={'/'}>Top Gamer</NavLink>
				</li>
				<li className="ml-auto">
					<NavLink href={'/reviews'}>Reseñas</NavLink>
				</li>
				<li>
					<NavLink
						href={'/about'}
						prefetch={false}
					>
						Acerca de
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
