import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='bg-linear-to-b from-indigo-900 to-cyan-900 min-h-screen flex flex-col'>
			<header className='flex justify-between items-centerm-4 p-6'>
				<div className='flex items-center gap-2'>
					<Image
						src='/assets/arrow-growth.svg'
						alt='Growth Arrow'
						width={25}
						height={25}
						className='bg-green-700 rounded-lg p-1'
					/>
					<p className='text-white font-bold  text-center'>RetireWise</p>
				</div>
				<div className='text-slate-300 hover:text-white cursor-pointer'>
					Sign in
				</div>
			</header>
			<main className='grow flex flex-col justify-center items-center gap-2'>
				<div className='bg-gray-100/10 rounded-full py-2 px-4 flex gap-2 w-fit border border-white'>
					<Image
						src='/assets/shield.svg'
						alt='Shield'
						width={25}
						height={25}
					/>
					<p className='text-white'>Your retirement, planned with clarity</p>
				</div>
				<div className='text-6xl font-bold my-3'>
					<h2 className='text-white'>Retire with</h2>
					<h2 className='text-green-500'>confidence.</h2>
				</div>
				<p className='text-gray-200 w-1/6  text-center mb-4'>
					RetireWise turns your savings, contributions, and goals into a clear,
					personalized roadmap — no financial jargon, no guesswork.
				</p>
				<div className='bg-green-600 rounded-lg hover:bg-green-500  hover:cursor-pointer flex items-center py-2 px-6'>
					<Link
						href='/dashboard'
						className='text-white text-2xl py-1 px-6'>
						Go to Dashboard
					</Link>
					<Image
						src='/assets/arrow-right.svg'
						alt='Arrow Right'
						width='15'
						height='15'
					/>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white mt-8 mb-4 align-center justify-center'>
					<p className='bg-gray-100/10 rounded-full px-2 py-1 flex gap-2 border border-white justify-center'>
						Balance projections
					</p>
					<p className='bg-gray-100/10 rounded-full px-2 py-1 flex gap-2 border border-white justify-center'>
						Inflation adjusted
					</p>
					<p className='bg-gray-100/10 rounded-full px-2 py-1 flex gap-2 border border-white justify-center'>
						PDF reports
					</p>
					<p className='bg-gray-100/10 rounded-full px-2 py-1 flex gap-2 border border-white justify-center'>
						Instant results
					</p>
				</div>
			</main>
			<footer className='flex justify-center items-center p-4 my-2 text-gray-200'>
				<span className=''>@ 2026 RetireWise</span>
			</footer>
		</div>
	)
}
