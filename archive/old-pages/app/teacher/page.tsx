"use client";

import {useEffect,useState} from "react";


export default function TeacherDashboard(){


const [students,setStudents]=useState<any[]>([]);



useEffect(()=>{


const user=
JSON.parse(
localStorage.getItem("elh-user") || "{}"
);



fetch("/api/teacher/analytics",
{
headers:{
"teacher-id":user.id
}
})
.then(r=>r.json())
.then(setStudents);


},[]);



return (

<div className="
p-8
bg-slate-100
min-h-screen
">


<h1 className="
text-4xl
font-bold
mb-8
">

Teacher Command Center 🎓

</h1>



<div className="
grid
md:grid-cols-3
gap-6
">


{
students.map(s=>(


<div
key={s.name}
className="
bg-white
rounded-2xl
shadow
p-6
"
>

<h2 className="font-bold text-xl">
{s.name}
</h2>


<p>
Level: {s.level}
</p>


<p>
XP: {s.xp}
</p>


<p className="
mt-3
font-bold
">

{s.status}

</p>


</div>


))
}


</div>


</div>

)

}