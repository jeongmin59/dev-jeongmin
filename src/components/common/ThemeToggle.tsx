'use client'

import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<button
				type='button'
				className='p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
				aria-label='테마 변경'>
				<RiSunFill className='w-5 h-5' />
			</button>
		)
	}

	return (
		<button
			type='button'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
			aria-label='테마 변경'>
			{theme === 'dark' ? (
				<RiMoonFill className='w-6 h-6' />
			) : (
				<RiSunFill className='w-6 h-6' />
			)}
		</button>
	)
}
