import type { Metadata } from 'next'
import '@/layouts/globals.css'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

export const metadata: Metadata = {
	title: 'dev-jeongmin',
	description: "jeongmin's dev blog"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ko' suppressHydrationWarning>
			<body>
				<Header />
				<main className='container min-h-screen px-4 py-8 mt-14'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
