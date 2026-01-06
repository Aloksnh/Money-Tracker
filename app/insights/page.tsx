"use client";

export default function InsightsPage() {
  return (
    <section className="p-10 max-w-3xl mx-auto animate-slide-up">
      <h1 className="text-2xl font-semibold mb-6">Insights</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 text-neutral-900 space-y-3">
        <p>This page will show:</p>
        <ul className="list-disc pl-5 text-sm text-neutral-700">
          <li>Total income & expenses</li>
          <li>Needs / Wants / Savings breakdown</li>
          <li>Charts & monthly views</li>
        </ul>

        <p className="text-xs text-neutral-500">
          Coming soon.
        </p>
      </div>
    </section>
  );
}
