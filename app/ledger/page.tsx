"use client";

import { useEffect, useState } from "react";

type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category?: "needs" | "wants" | "savings";
  note?: string;
};

export default function LedgerPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) setTransactions(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction() {
    setTransactions((prev) => [
      {
        id: crypto.randomUUID(),
        date: new Date().toISOString().slice(0, 10),
        description: "",
        amount: 0,
        type: "expense",
        category: "needs",
        note: "",
      },
      ...prev,
    ]);
  }

  function update(id: string, field: keyof Transaction, value: any) {
    setTransactions((prev) =>
      prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
    );
  }

  function normalize(val: string) {
    if (val === "") return 0;
    return Number(val.replace(/^0+(?=\d)/, ""));
  }

  function remove(id: string) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <section className="p-10 max-w-7xl mx-auto animate-slide-up">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold">Ledger</h1>
        <button
          onClick={addTransaction}
          className="bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 active:scale-[0.98] transition"
        >
          + Add row
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50 text-neutral-700">
            <tr>
              <th className="px-5 py-3 text-left">Date</th>
              <th className="px-5 py-3 text-left">Description</th>
              <th className="px-5 py-3 text-left">Amount</th>
              <th className="px-5 py-3 text-left">Type</th>
              <th className="px-5 py-3 text-left">Category</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-10 text-neutral-400">
                  No transactions yet
                </td>
              </tr>
            )}

            {transactions.map((t) => (
              <tr
                key={t.id}
                className={`transition ${
                  t.type === "income" ? "bg-green-50" : "bg-rose-50"
                }`}
              >
                <td className="px-5 py-3">
                  <input
                    type="date"
                    value={t.date}
                    onChange={(e) => update(t.id, "date", e.target.value)}
                    className="bg-transparent text-neutral-900 outline-none"
                  />
                </td>

                <td className="px-5 py-3">
                  <input
                    value={t.description}
                    onChange={(e) => update(t.id, "description", e.target.value)}
                    className="w-full bg-transparent text-neutral-900 outline-none"
                  />
                </td>

                <td className="px-5 py-3">
                  <input
                    inputMode="numeric"
                    value={t.amount === 0 ? "" : t.amount}
                    onChange={(e) => update(t.id, "amount", normalize(e.target.value))}
                    className="w-24 bg-transparent text-neutral-900 outline-none"
                  />
                </td>

                <td className="px-5 py-3">
                  <select
                    value={t.type}
                    onChange={(e) => update(t.id, "type", e.target.value)}
                    className="bg-transparent text-neutral-900 outline-none"
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </td>

                <td className="px-5 py-3">
                  {t.type === "expense" && (
                    <>
                      <select
                        value={t.category}
                        onChange={(e) => update(t.id, "category", e.target.value)}
                        className="bg-transparent text-neutral-900 outline-none"
                      >
                        <option value="needs">Needs</option>
                        <option value="wants">Wants</option>
                        <option value="savings">Savings</option>
                      </select>
                      <input
                        placeholder="Note"
                        value={t.note}
                        onChange={(e) => update(t.id, "note", e.target.value)}
                        className="block text-xs text-neutral-600 bg-transparent outline-none"
                      />
                    </>
                  )}
                </td>

                <td className="px-5 py-3 text-right">
                  <button
                    onClick={() => remove(t.id)}
                    className="text-neutral-400 hover:text-neutral-900 transition"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}