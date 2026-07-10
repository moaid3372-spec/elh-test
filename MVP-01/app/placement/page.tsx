"use client";

import { useState } from "react";

const questions = [
  {
    question: "Hello means...",
    options: ["Bye", "Hi", "Night", "Book"],
    answer: "Hi"
  },
  {
    question: "Cat is a...",
    options: ["Animal", "Food", "Color", "Car"],
    answer: "Animal"
  }
];

export default function PlacementTest() {

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  function choose(option: string) {

    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      alert(`Score: ${score + (option === questions[current].answer ? 1 : 0)}/${questions.length}`);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-xl">

        <h2 className="text-2xl font-bold mb-6">
          Placement Test
        </h2>

        <p className="mb-6">
          {questions[current].question}
        </p>

        <div className="grid gap-3">

          {questions[current].options.map((item) => (

            <button
              key={item}
              onClick={() => choose(item)}
              className="border rounded-xl p-3 hover:bg-blue-600 hover:text-white"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </main>
  );
}