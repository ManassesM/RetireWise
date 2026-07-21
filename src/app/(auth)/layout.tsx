import AuthSidebar from '@/components/AuthSidebar'
import SplitScreenLayout from '@/components/layouts/SplitScreenLayout'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='bg-linear-to-b from-indigo-900 to-cyan-900 min-h-screen'>
			<SplitScreenLayout
				className='hidden sm:flex align-middle justify-center'
				sidebar={<AuthSidebar />}>
				{children}
			</SplitScreenLayout>
		</div>
	)
}
