import Image from 'next/image'
import Logo from './ui/Logo'

export default function Sidebar() {
	return (
		<section className='hidden w-1/3 px-6 py-8 border-r  border-gray-500 md:flex flex-col'>
			<Logo
				className='mb-4'
				size={35}
			/>
			<div className='my-8'>
				<p className='text-white text-2xl font-bold mb-4'>
					Your retirement roadmap starts here.
				</p>
				<p className='text-white/60 text-xl font-thin'>
					Build a personalized plan with smart projections, inflation-adjusted
					drawdowns, and instant PDF reports.
				</p>
			</div>
			<div className='mt-auto'>
				<ul>
					{[
						'Balance projections to age 90',
						'Inflation-adjusted drawdown modeling',
						'Instant PDF plan reports',
						'Simple inputs, powerful insights',
					].map((item, key) => (
						<small
							className='flex gap-2 items-center mb-3'
							key={key}>
							<Image
								src='/assets/check-circle.svg'
								alt='Check Circle'
								width={25}
								height={25}
							/>
							<p className='text-white/60'>{item}</p>
						</small>
					))}
				</ul>
			</div>
		</section>
	)
}
