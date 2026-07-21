import Sidebar from '@/components/Sidebar'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='bg-linear-to-b from-indigo-900 to-cyan-900 min-h-screen flex'>
			<Sidebar />
			<div className='w-full'>{children}</div>
		</div>
	)
}
