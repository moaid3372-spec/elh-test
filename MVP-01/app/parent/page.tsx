export default function ParentDashboard() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold">
        Parent Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold">Student Progress</h2>
          <p>Completed: 7 Lessons</p>
          <p>Progress: 35%</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold">Recommendations</h2>
          <p>Practice Reading 15 min today.</p>
        </div>

      </div>

    </main>
  );
}