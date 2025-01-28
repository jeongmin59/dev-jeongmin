import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

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
				<main className='min-h-screen py-4 mt-14 sm:py-6 md:py-8'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
