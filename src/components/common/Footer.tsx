export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='w-full'>
			<div className='max-w-5xl mx-auto px-4 py-8 flex flex-col items-center justify-center'>
				<p className='text-xs text-slate-500 font-medium tracking-wide'>
					© {currentYear}. Jeongmin Gong All rights reserved.
				</p>
			</div>
		</footer>
	)
}
