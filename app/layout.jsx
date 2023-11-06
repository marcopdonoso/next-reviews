import NavBar from '@/components/NavBar'
import './globals.css'
import { exo2, orbitron } from './fonts'

export const metadata = {
	title: {
		default: 'Top Gamer',
		template: '%s | Top Gamer',
	},
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="es"
			className={`${orbitron.variable} ${exo2.variable}`}
		>
			<body className="bg-orange-50 flex flex-col min-h-screen px-4 py-2">
				<header>
					<NavBar />
				</header>
				<main className="grow py-3">{children}</main>
				<footer className="border-t py-3 text-center text-xs text-slate-500">
					<p>
						Datos de los juegos e imágenes cortesía de{' '}
						<a
							href="https://rawg.io/"
							target="_blank"
							className="text-orange-800 hover:underline"
						>
							RAWG
						</a>
					</p>
				</footer>
			</body>
		</html>
	)
}
