import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET(
req:Request
){


const teacherId =
req.headers.get("teacher-id");



const students =
await prisma.student.findMany({

where:{
class:{
teacherId:teacherId || ""
}
},

include:{
user:true,
progress:true,
achievements:true
}

});



const analytics =
students.map(student=>{


let status="GOOD";


if(student.xp < 50)
status="NEEDS SUPPORT";


return {

name:student.user.name,

level:student.level,

xp:student.xp,

status

};


});



return NextResponse.json(
analytics
);


}