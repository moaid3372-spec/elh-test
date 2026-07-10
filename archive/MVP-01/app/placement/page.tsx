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
}"use client";

import {useEffect,useState} from "react";
import {useRouter} from "next/navigation";


export default function Placement(){


const [test,setTest]=useState<any>();

const [answers,setAnswers]=useState<any>({});


const router=useRouter();



useEffect(()=>{

fetch("/api/placement")
.then(r=>r.json())
.then(setTest);


},[]);



function submit(){


console.log(answers);


// لاحقا يرسل للـ AI Engine


router.push("/dashboard");


}



if(!test)

return <div className="p-10">
Loading Test...
</div>



return (

<div className="
max-w-3xl
mx-auto
p-8
">


<h1 className="
text-3xl
font-bold
mb-8
">

ELH Discovery Test

</h1>



{test.questions.map(
(q:any,index:number)=>(


<div
key={q.id}
className="
bg-white
shadow
rounded-xl
p-5
mb-5
"
>


<h2 className="font-bold mb-4">

{index+1}. {q.question}

</h2>



{[
q.optionA,
q.optionB,
q.optionC,
q.optionD

].map(option=>(


<label
key={option}
className="block mb-2"
>


<input

type="radio"

name={q.id}

onChange={()=>


setAnswers({

...answers,

[q.id]:option

})


}

/>


{" "}

{option}


</label>


))}


</div>


)

)}



<button

onClick={submit}

className="
bg-blue-600
text-white
px-8
py-3
rounded-xl
"

>

Finish Test

</button>


</div>

);

}