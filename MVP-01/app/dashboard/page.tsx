export default function Dashboard() {

  return (

    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold">
        Welcome to ELH
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        <div className="bg-white rounded-2xl p-6 shadow">
          📚
          <h2 className="font-bold mt-3">Continue Learning</h2>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          🧪
          <h2 className="font-bold mt-3">Placement Test</h2>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          📈
          <h2 className="font-bold mt-3">My Progress</h2>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          🏆
          <h2 className="font-bold mt-3">Achievements</h2>
        </div>

      </div>

    </main>

  );

}