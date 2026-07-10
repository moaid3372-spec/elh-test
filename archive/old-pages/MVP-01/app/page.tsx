"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    username: "",
    password: "",
    grade: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // سيتم ربطه لاحقًا بـ Supabase

    console.log(form);

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Student Registration
        </h1>

        <input
          name="fullName"
          placeholder="Student Name"
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <select
          name="grade"
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Select Grade</option>
          <option>Primary 1</option>
          <option>Primary 2</option>
          <option>Primary 3</option>
          <option>Primary 4</option>
          <option>Primary 5</option>
          <option>Primary 6</option>
          <option>Prep 1</option>
          <option>Prep 2</option>
          <option>Prep 3</option>
        </select>

        <button
          className="w-full bg-blue-600 text-white rounded-xl p-3"
        >
          Create Account
        </button>

      </form>

    </main>
  );
}const lessons = [
  {
    id: 1,
    title: "My Family",
    xp: 50,
    completed: true
  },
  {
    id: 2,
    title: "My School",
    xp: 60,
    completed: false
  },
  {
    id: 3,
    title: "My Friends",
    xp: 70,
    completed: false
  }
];

export default function Dashboard() {

  return (

    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Welcome Ahmed 👋
      </h1>

      <div className="grid gap-5">

        {lessons.map((lesson)=>(

          <div
            key={lesson.id}
            className="bg-white rounded-2xl shadow p-6 flex justify-between items-center"
          >

            <div>

              <h2 className="text-xl font-bold">
                {lesson.title}
              </h2>

              <p>
                XP : {lesson.xp}
              </p>

            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl">

              {lesson.completed ? "Review" : "Start"}

            </button>

          </div>

        ))}

      </div>

    </main>

  );

}