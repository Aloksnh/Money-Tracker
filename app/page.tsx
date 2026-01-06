"use client";

import { useState } from "react";

export default function Home() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const savings = income - expenses;

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-neutral-800">
          Money Tracker
        </h1>

        <p className="text-neutral-500 mt-2">
          Calm. Clear. In control.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-neutral-600">Income</label>
            <input
              type="number"
              className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="text-sm text-neutral-600">Expenses</label>
            <input
              type="number"
              className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-neutral-700">
            <span>Income</span>
            <span>${income}</span>
          </div>

          <div className="flex justify-between text-neutral-700">
            <span>Expenses</span>
            <span>${expenses}</span>
          </div>

          <div className="flex justify-between font-medium text-neutral-900">
            <span>Savings</span>
            <span>${savings}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

