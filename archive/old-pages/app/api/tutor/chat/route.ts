import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function POST(
req:Request
){

const {
studentId,
message
}=await req.json();



await prisma.chatMessage.create({

data:{

studentId,

role:"STUDENT",

message

}

});



// MVP response
const reply =
generateReply(message);



await prisma.chatMessage.create({

data:{

studentId,

role:"AI",

message:reply

}

});



return NextResponse.json({

reply

});

}



function generateReply(text:string){


const t=text.toLowerCase();



if(t.includes("hello")||
t.includes("hi"))
{

return "Hello! I am Leo, your ELH learning friend. Let's practice English!";

}



return "Great try! Keep practicing. Can you tell me more?";


}