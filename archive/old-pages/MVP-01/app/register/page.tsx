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
}import Button from "@/components/Button";

export default function Register(){

return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-slate-100
">

<form className="
bg-white
p-8
rounded-2xl
shadow-xl
w-full
max-w-md
">

<h1 className="
text-3xl
font-bold
mb-6
text-center
">
Join ELH
</h1>


<input
placeholder="Student Name"
className="input"
/>


<input
placeholder="Username"
className="input"
/>


<input
placeholder="Password"
type="password"
className="input"
/>


<select className="input">

<option>
Primary 1
</option>

<option>
Primary 2
</option>

<option>
Prep 3
</option>

</select>


<Button type="submit">
Create Account
</Button>


</form>

</div>

);

}"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";


export default function Register(){

const router = useRouter();

const [form,setForm]=useState({
name:"",
username:"",
password:"",
grade:"Primary 1"
});


const [message,setMessage]=useState("");



async function handleSubmit(e:React.FormEvent){

e.preventDefault();


const res = await fetch("/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(form)

});


const data = await res.json();


if(res.ok){

setMessage("Account created successfully");

setTimeout(()=>{

router.push("/login");

},1000);


}else{

setMessage(data.message);

}

}



return (

<div className="min-h-screen flex items-center justify-center bg-slate-100">


<form
onSubmit={handleSubmit}
className="
bg-white
p-8
rounded-2xl
shadow-xl
w-full
max-w-md
"
>


<h1 className="
text-3xl
font-bold
mb-6
text-center
">
Join ELH
</h1>



<input
className="input"
placeholder="Student Name"
onChange={(e)=>
setForm({...form,name:e.target.value})
}
/>



<input
className="input"
placeholder="Username"
onChange={(e)=>
setForm({...form,username:e.target.value})
}
/>



<input
className="input"
type="password"
placeholder="Password"
onChange={(e)=>
setForm({...form,password:e.target.value})
}
/>



<select
className="input"
onChange={(e)=>
setForm({...form,grade:e.target.value})
}
>

<option>
Primary 1
</option>

<option>
Primary 2
</option>

<option>
Prep 3
</option>

</select>



<button
className="
bg-blue-600
text-white
w-full
py-3
rounded-xl
font-bold
"
>

Create Account

</button>


<p className="text-center mt-4">
{message}
</p>


</form>


</div>

);

}