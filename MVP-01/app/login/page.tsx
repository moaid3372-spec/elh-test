"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(e: React.FormEvent) {
    e.preventDefault();

    // سيتم ربطه بـ Supabase لاحقاً

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={login}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <input
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border rounded-xl p-3"
        />

        <button className="w-full bg-blue-600 text-white rounded-xl p-3">
          Login
        </button>

      </form>

    </main>
  );

}import Button from "@/components/Button";

export default function Login(){

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
Welcome Back
</h1>


<input
placeholder="Username"
className="input"
/>


<input
placeholder="Password"
type="password"
className="input"
/>


<Button type="submit">
Login
</Button>


<p className="
text-center
mt-5
text-sm
text-gray-500
">
Forgot Password?
</p>


</form>

</div>

);

}export default function Dashboard(){

return (

<div className="
min-h-screen
bg-slate-100
p-6
">


<h1 className="
text-4xl
font-bold
mb-8
">
Welcome, Hero ⭐
</h1>


<div className="
grid
md:grid-cols-3
gap-6
">


<div className="
bg-white
rounded-2xl
p-6
shadow
">

<h2 className="font-bold text-xl">
Current Mission
</h2>

<p className="mt-3">
Discover Your First English Adventure
</p>

</div>



<div className="
bg-white
rounded-2xl
p-6
shadow
">

<h2 className="font-bold text-xl">
Progress
</h2>

<p className="text-3xl mt-3">
25%
</p>

</div>



<div className="
bg-white
rounded-2xl
p-6
shadow
">

<h2 className="font-bold text-xl">
Achievements
</h2>

<p className="mt-3">
🏅 First Explorer
</p>

</div>


</div>


</div>

);

}