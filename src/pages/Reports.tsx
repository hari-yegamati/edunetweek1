import React from 'react';
import { BarChart3, Download, Calendar } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Financial Reports</h1>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50">
            <Calendar className="h-5 w-5" />
            <span>Last 30 Days</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            <Download className="h-5 w-5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Income vs Expenses</h2>
          <div className="flex justify-center items-center h-64">
            <BarChart3 className="h-full w-full text-indigo-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Spending by Category</h2>
          <div className="space-y-4">
            {[
              { category: 'Housing', amount: 45000, percentage: 40 },
              { category: 'Food & Dining', amount: 15000, percentage: 13 },
              { category: 'Transportation', amount: 8000, percentage: 7 },
              { category: 'Entertainment', amount: 5000, percentage: 5 },
              { category: 'Utilities', amount: 6000, percentage: 6 },
              { category: 'Shopping', amount: 10000, percentage: 10 },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">{item.category}</span>
                  <div className="text-right">
                    <div className="font-semibold">₹{item.amount.toLocaleString('en-IN')}</div>
                    <div className="text-sm text-gray-500">{item.percentage}%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Monthly Summary</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expenses</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { month: 'March 2024', income: 325000, expenses: 185000, savings: 140000, rate: 43 },
                  { month: 'February 2024', income: 315000, expenses: 195000, savings: 120000, rate: 38 },
                  { month: 'January 2024', income: 320000, expenses: 190000, savings: 130000, rate: 41 },
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">₹{item.income.toLocaleString('en-IN')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">₹{item.expenses.toLocaleString('en-IN')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">₹{item.savings.toLocaleString('en-IN')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.rate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;