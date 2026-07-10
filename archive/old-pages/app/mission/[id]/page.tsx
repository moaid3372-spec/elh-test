"use client";

import {useEffect,useState} from "react";


export default function MissionPage(
{params}:any
){


const [mission,setMission]=useState<any>();


useEffect(()=>{


fetch(`/api/mission/${params.id}`)

.then(r=>r.json())

.then(setMission);


},[]);



if(!mission)

return <p>Loading Mission...</p>



return (

<div className="p-8">


<h1 className="
text-4xl
font-bold
mb-5
">

🚀 {mission.title}

</h1>


<p className="mb-8">

{mission.description}

</p>



<div className="grid gap-5">


{mission.activities.map(
(a:any)=>(


<div
key={a.id}
className="
bg-white
shadow
rounded-2xl
p-6
"
>


<h2 className="font-bold text-xl">

{a.title}

</h2>


<p className="mt-2">

Type: {a.type}

</p>


<button
className="
mt-4
bg-indigo-600
text-white
px-5
py-2
rounded-xl
"
>

Start

</button>


</div>


)

)}


</div>


</div>

)

}