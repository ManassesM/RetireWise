import DashboardSidebar from '@/components/DashboardSidebar'
import SplitScreenLayout from '@/components/layouts/SplitScreenLayout'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<SplitScreenLayout sidebar={<DashboardSidebar />}>
			{children}
		</SplitScreenLayout>
	)
}
