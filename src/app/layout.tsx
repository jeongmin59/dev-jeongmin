import type { Metadata } from 'next'
import '@/layouts/globals.css'

export const metadata: Metadata = {
	title: '정민 기술 블로그',
	description: '기술 블로그 제작 중 입니다.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>{children}</body>
		</html>
	)
}
