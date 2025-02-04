import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { ThemeProvider } from 'next-themes'

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
			<body suppressHydrationWarning>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<Header />
					<main className='min-h-screen py-4 mt-14 sm:py-6 md:py-8'>
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
