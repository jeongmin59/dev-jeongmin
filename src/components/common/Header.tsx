import Link from 'next/link'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'

const NAV_LINKS = [
	{ href: '/', label: 'Home' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/about', label: 'About' }
]

const SOCIAL_LINKS = [
	{ href: 'https://github.com/jeongmin59', icon: RiGithubFill },
	{
		href: 'https://www.linkedin.com/in/jeongmin-gong-961519276/',
		icon: RiLinkedinBoxFill
	}
]

const navLinkStyles = 'transition-colors duration-200 hover:text-indigo-600'
const socialLinkStyles = 'transition-transform hover:scale-110'

export default function Header() {
	return (
		<header className='w-full fixed top-0 z-50 backdrop-blur-sm bg-white/75 transition-all duration-200'>
			<div className='max-w-5xl mx-auto h-14 flex items-center justify-between'>
				<nav className='flex items-center space-x-6'>
					{NAV_LINKS.map(({ href, label }) => (
						<Link key={href} href={href} className={navLinkStyles}>
							<span className='text-md font-semibold tracking-wide'>
								{label}
							</span>
						</Link>
					))}
				</nav>

				<nav className='flex items-center space-x-4'>
					{SOCIAL_LINKS.map(({ href, icon: Icon }) => (
						<Link
							key={href}
							href={href}
							target='_blank'
							className={socialLinkStyles}>
							<Icon className='w-7 h-7' />
						</Link>
					))}
				</nav>
			</div>
		</header>
	)
}
