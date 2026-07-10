export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold">
        ELH Admin
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mt-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          👨‍🎓
          <h2>Students</h2>
          <strong>1,250</strong>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          👨‍🏫
          <h2>Teachers</h2>
          <strong>38</strong>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          📚
          <h2>Lessons</h2>
          <strong>540</strong>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          📝
          <h2>Tests</h2>
          <strong>92</strong>
        </div>

      </div>

    </main>
  );
}prisma/schema.prisma