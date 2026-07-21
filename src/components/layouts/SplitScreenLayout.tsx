import React from 'react'

interface SplitScreenLayoutProps {
	sidebar: React.ReactNode
	children: React.ReactNode
	className?: string
}

export default function SplitScreenLayout({
	sidebar,
	children,
	className,
}: SplitScreenLayoutProps) {
	return (
		<div className='flex'>
			<div
				className={`min-h-screen w-1/3 border-r py-4 px-6 border-gray-500 ${className}`}>
				{sidebar}
			</div>
			<main className=' border border-amber-700 w-full'>{children}</main>
		</div>
	)
}
