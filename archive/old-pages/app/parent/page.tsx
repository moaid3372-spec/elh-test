"use client";

import {useEffect,useState} from "react";


export default function ParentDashboard(){

const [children,setChildren]=useState<any[]>([]);


useEffect(()=>{

const user=
JSON.parse(
localStorage.getItem("elh-user") || "{}"
);


fetch("/api/parent/children",
{
headers:{
"parent-id":user.id
}
})
.then(r=>r.json())
.then(setChildren);


},[]);



return (

<div className="p-8">

<h1 className="
text-4xl
font-bold
mb-8
">

Family Growth Center 👨‍👩‍👧

</h1>



<div className="grid md:grid-cols-2 gap-6">


{children.map(child=>(

<div
key={child.id}
className="
bg-white
rounded-2xl
shadow
p-6
"
>

<h2 className="text-xl font-bold">

{child.user.name}

</h2>


<p>
Level: {child.level}
</p>


<p>
XP: {child.xp}
</p>


<p>
Path:
{child.learningPath?.title}

</p>


</div>

))}


</div>

</div>

)

}