"use client";

import {useState} from "react";


export default function Tutor(){


const [message,setMessage]=useState("");

const [chat,setChat]=useState<any[]>([]);



async function send(){


const user =
JSON.parse(
localStorage.getItem("elh-user") || "{}"
);



const res =
await fetch("/api/tutor/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

studentId:user.id,

message

})

});


const data =
await res.json();



setChat([

...chat,

{
role:"YOU",
text:message
},

{
role:"LEO",
text:data.reply
}

]);



setMessage("");

}



return (

<div className="
max-w-2xl
mx-auto
p-6
">


<h1 className="
text-3xl
font-bold
mb-6
">

🤖 Leo AI Tutor

</h1>



<div className="
bg-white
rounded-2xl
shadow
p-5
min-h-96
">


{chat.map(
(c,i)=>(

<p key={i}
className="mb-3"
>

<b>{c.role}:</b> {c.text}

</p>

)

)}


</div>



<div className="
flex
gap-3
mt-5
">


<input

className="input flex-1"

value={message}

onChange={
e=>setMessage(e.target.value)
}

placeholder="Write in English..."

 />


<button

onClick={send}

className="
bg-blue-600
text-white
px-6
rounded-xl
"

>

Send

</button>


</div>


</div>

)

}