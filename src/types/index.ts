export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
}

export interface Plan {
  _id?: string;
  userId: string;
  currentAge: number;
  currentSavings: number;
  monthlyContribution: number;
  retirementAge: number;
  monthlyWithdrawal: number;
  expectedInflationRate: number;
  expectedAnnualReturn: number;
  createdAt: Date;
}