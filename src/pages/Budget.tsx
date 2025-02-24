import React from 'react';
import { PieChart, Pencil, Plus } from 'lucide-react';

const Budget = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Budget Planning</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-indigo-700">
          <Plus className="h-5 w-5" />
          <span>Create Budget</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Monthly Budget Overview</h2>
          <div className="space-y-6">
            {[
              { category: 'Housing', spent: 45000, budget: 50000 },
              { category: 'Food & Dining', spent: 15000, budget: 20000 },
              { category: 'Transportation', spent: 8000, budget: 10000 },
              { category: 'Entertainment', spent: 5000, budget: 7500 },
              { category: 'Utilities', spent: 6000, budget: 8000 },
              { category: 'Shopping', spent: 10000, budget: 15000 },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-gray-700">{item.category}</span>
                    <div className="text-sm text-gray-500">
                      ₹{item.spent.toLocaleString('en-IN')} spent of ₹{item.budget.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Pencil className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      (item.spent / item.budget) > 0.9
                        ? 'bg-red-500'
                        : (item.spent / item.budget) > 0.7
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${(item.spent / item.budget) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Budget Summary</h2>
          <div className="flex justify-center mb-6">
            <PieChart className="h-32 w-32 text-indigo-600" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Total Budget</span>
              <span className="font-semibold">₹1,10,500</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Total Spent</span>
              <span className="font-semibold">₹89,000</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Remaining</span>
              <span className="font-semibold text-green-600">₹21,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Budget Health</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Good
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;