"use client";

import { useState } from "react";

export default function LessonPage() {

  const [finished, setFinished] = useState(false);

  return (

    <main className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">

        <h1 className="text-4xl font-bold">
          Unit 1 • My Family
        </h1>

        <h2 className="text-2xl mt-8 font-semibold">
          Vocabulary
        </h2>

        <ul className="mt-4 space-y-2">
          <li>👨 Father</li>
          <li>👩 Mother</li>
          <li>👦 Brother</li>
          <li>👧 Sister</li>
        </ul>

        <h2 className="text-2xl mt-10 font-semibold">
          Story
        </h2>

        <p className="mt-4 leading-8">
          Adam loves his family. Every weekend he plays with his
          brother and helps his mother. His father reads stories
          every evening.
        </p>

        <h2 className="text-2xl mt-10 font-semibold">
          Quick Quiz
        </h2>

        <p className="mt-4">
          Who reads stories every evening?
        </p>

        <div className="grid gap-3 mt-4">

          <button className="border rounded-xl p-3">
            Father
          </button>

          <button className="border rounded-xl p-3">
            Brother
          </button>

          <button className="border rounded-xl p-3">
            Teacher
          </button>

        </div>

        <button
          onClick={() => setFinished(true)}
          className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-xl"
        >
          Finish Lesson
        </button>

        {finished && (
          <div className="mt-8 p-5 rounded-xl bg-green-100">
            🎉 Lesson Completed +50 XP
          </div>
        )}

      </div>

    </main>

  );

}