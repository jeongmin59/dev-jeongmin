/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	images: {
		remotePatterns: [
			{
				protocol: 'https' as const,
				hostname: '**'
			}
		]
	}
}

export default nextConfig
