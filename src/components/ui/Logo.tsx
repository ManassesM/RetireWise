import Image from 'next/image'

interface LogoProps {
	size?: number
	showText?: boolean
	className?: string
}

export default function Logo({
	size = 25,
	showText = true,
	className = '',
}: LogoProps) {
	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<Image
				src='/assets/arrow-growth.svg'
				alt='Growth Arrow'
				width={size}
				height={size}
				className='bg-green-700 rounded-lg p-1'
			/>
			{showText && (
				<p className='text-white font-bold  text-center'>RetireWise</p>
			)}
		</div>
	)
}
