"use client";

import {useEffect,useState} from "react";


export default function Journey(){

const [path,setPath]=useState<any>();


useEffect(()=>{

const user =
JSON.parse(
localStorage.getItem("elh-user") || "{}"
);


fetch("/api/student/profile",
{
headers:{
"user-id":user.id
}
})
.then(r=>r.json())
.then(setPath);


},[]);



if(!path)

return <p>Loading Adventure...</p>



return (

<div className="p-8">

<h1 className="
text-4xl
font-bold
mb-8
">

🌎 {path.learningPath.title}

</h1>


<div className="grid md:grid-cols-3 gap-6">


{path.learningPath.missions.map(
(m:any)=>(


<div
key={m.id}
className="
bg-white
rounded-2xl
shadow
p-6
"
>

<h2 className="font-bold text-xl">
{m.title}
</h2>


<p className="mt-3">
{m.description}
</p>


<button
className="
mt-5
bg-blue-600
text-white
px-5
py-2
rounded-xl
"
>

Start Mission

</button>


</div>


)

)}


</div>

</div>

)

}