/** @type{import('next').NextConfig} */

const nextConfig = {
	// output: 'export',
	images: {
		remotePatterns: [toRemotePattern(process.env.CMS_IMAGE_PATTERN)],
	},
}

function toRemotePattern(urlString) {
	const url = new URL(urlString)
	return {
		protocol: url.protocol.replace(':', ''),
		hostname: url.hostname,
		port: url.port,
		pathname: url.pathname,
	}
}

module.exports = nextConfig
