import { Plan } from '@/types'

interface ChartDataPoint {
	age: number
	balance: number
}

export function calculateRetirementTrajectory(plan: Plan): ChartDataPoint[] {
	const trajectory: ChartDataPoint[] = []

	trajectory.push({ age: plan.currentAge, balance: plan.currentSavings })

	let currentBalance = plan.currentSavings
	const annualContribution = plan.monthlyContribution * 12
	const annualWithdrawal = plan.monthlyWithdrawal * 12
	const realGrowthRate =
		(plan.expectedAnnualReturn - plan.expectedInflationRate) / 100

	for (let age = plan.currentAge + 1; age <= 90; age++) {
		if (age <= plan.retirementAge) {
			// Accumulation (saving) math
			currentBalance =
				currentBalance * (1 + realGrowthRate) + annualContribution
		} else {
			// Withdrawal (spending) math
			currentBalance = currentBalance * (1 + realGrowthRate) - annualWithdrawal
		}

		if (currentBalance < 0) {
			currentBalance = 0
		}

		trajectory.push({ age, balance: currentBalance })
	}

	return trajectory
}
