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

}"use client";

import {useEffect,useState} from "react";
import {useRouter} from "next/navigation";


export default function Dashboard(){

const router=useRouter();

const [student,setStudent]=useState<any>(null);



useEffect(()=>{

const user =
localStorage.getItem("elh-user");


if(!user){

router.push("/login");

return;

}


const data=JSON.parse(user);



fetch("/api/student/profile",
{
headers:{
"user-id":data.id
}
})

.then(res=>res.json())

.then(setStudent);



},[]);



if(!student){

return (

<div className="p-10">

Loading ELH Universe...

</div>

)

}



return (

<div className="
min-h-screen
bg-slate-100
p-8
">


<h1 className="
text-4xl
font-bold
mb-8
">

Welcome {student.user.name} ⭐

</h1>



<div className="
grid
md:grid-cols-3
gap-6
">



<div className="
bg-white
p-6
rounded-2xl
shadow
">

<h2 className="font-bold">
Grade
</h2>

<p className="text-2xl">
{student.grade}
</p>

</div>



<div className="
bg-white
p-6
rounded-2xl
shadow
">

<h2 className="font-bold">
Level
</h2>

<p className="text-2xl">
{student.level}
</p>

</div>



<div className="
bg-white
p-6
rounded-2xl
shadow
">

<h2 className="font-bold">
XP Points
</h2>

<p className="text-2xl">
{student.points}
</p>

</div>



</div>


</div>

);

}<div className="
bg-white
p-6
rounded-2xl
shadow
">

<h2 className="font-bold text-xl">
Current Mission 🚀
</h2>

<p>
{student.learningPath?.missions?.[0]?.title
||
"Start your first adventure"}
</p>

</div><div className="
bg-gradient-to-r
from-indigo-500
to-purple-600
text-white
p-6
rounded-2xl
">


<h2 className="
text-xl
font-bold
">

Hero Level {student.level}

</h2>


<div className="
mt-3
">

⭐ {student.xp} XP

</div>


<div className="
mt-4
h-3
bg-white/30
rounded-full
">

<div
className="
h-full
bg-white
rounded-full
"
style={{
width:
`${student.xp % 100}%`
}}
>

</div>

</div>


</div>