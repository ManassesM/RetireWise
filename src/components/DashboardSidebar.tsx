interface DashboardSidebarProps {
	className?: string
}

export default function DashboardSidebar({ className }: DashboardSidebarProps) {
	return (
		<div className={`${className}`}>
			<p>Dashboard Sidebar</p>
		</div>
	)
}
