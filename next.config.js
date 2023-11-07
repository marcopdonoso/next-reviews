/** @type{import('next').NextConfig} */

const nextConfig = {
	// output: 'export',
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
				pathname: '/uploads/**',
			},
		],
	},
}

module.exports = nextConfig
