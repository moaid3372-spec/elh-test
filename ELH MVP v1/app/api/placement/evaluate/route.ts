import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function POST(
req:Request
){

const {
studentId,
score
}=await req.json();



let level="BEGINNER";


if(score>=80)
level="INTERMEDIATE";


if(score>=90)
level="ADVANCED";



const path =
await prisma.learningPath.findFirst({

where:{
level
}

});



await prisma.student.update({

where:{
id:studentId
},

data:{
learningPathId:path?.id
}

});



return NextResponse.json({

level,

message:"Learning path created"

});


}