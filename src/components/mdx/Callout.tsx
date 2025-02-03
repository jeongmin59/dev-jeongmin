import {
	RiInformationFill,
	RiStickyNoteFill,
	RiQuestionFill
} from 'react-icons/ri'

type CalloutType = 'info' | 'note' | 'question'

interface CalloutProps {
	type?: CalloutType
	children: React.ReactNode
	hasIcon?: boolean
}

const calloutConfig = {
	note: {
		icon: RiStickyNoteFill,
		style:
			'bg-indigo-100/50 text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-200',
		iconColor: 'text-indigo-600 dark:text-indigo-400'
	},
	info: {
		icon: RiInformationFill,
		style:
			'bg-emerald-100/50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200',
		iconColor: 'text-emerald-600 dark:text-emerald-400'
	},
	question: {
		icon: RiQuestionFill,
		style:
			'bg-amber-100/50 text-amber-800 dark:bg-amber-950/30 dark:text-amber-200',
		iconColor: 'text-amber-600 dark:text-amber-400'
	}
}

export function Callout({
	type = 'note',
	children,
	hasIcon = true
}: CalloutProps) {
	const config = calloutConfig[type]
	const Icon = config.icon

	const style = hasIcon
		? config.style
		: 'bg-slate-100/50 text-slate-800 dark:bg-slate-950/30 dark:text-slate-200'

	return (
		<div className={`my-6 flex items-center gap-3 rounded-md p-4 ${style}`}>
			{hasIcon && (
				<div className='flex-shrink-0'>
					<Icon className={`h-6 w-6 ${config.iconColor}`} />
				</div>
			)}
			<div>
				<div className='[&>p]:my-0 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0'>
					{children}
				</div>
			</div>
		</div>
	)
}
