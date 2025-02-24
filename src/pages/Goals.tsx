import React from 'react';
import { Target, TrendingUp, Plus } from 'lucide-react';

const Goals = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Financial Goals</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-indigo-700">
          <Plus className="h-5 w-5" />
          <span>Add New Goal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Emergency Fund',
            target: 500000,
            current: 325000,
            deadline: '2024-12-31',
            category: 'Savings'
          },
          {
            title: 'New Car',
            target: 1500000,
            current: 900000,
            deadline: '2025-06-30',
            category: 'Purchase'
          },
          {
            title: 'Vacation',
            target: 200000,
            current: 80000,
            deadline: '2024-08-31',
            category: 'Travel'
          },
        ].map((goal, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
              <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                {goal.category}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>₹{goal.current.toLocaleString('en-IN')}</span>
                  <span>₹{goal.target.toLocaleString('en-IN')}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${(goal.current / goal.target) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">
                  {Math.round((goal.current / goal.target) * 100)}%
                </span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Target Date</span>
                <span className="font-medium">{goal.deadline}</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Remaining</span>
                <span className="font-medium text-indigo-600">
                  ₹{(goal.target - goal.current).toLocaleString('en-IN')}
                </span>
              </div>

              <button className="w-full mt-4 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-indigo-100">
                <TrendingUp className="h-4 w-4" />
                <span>Add Progress</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;