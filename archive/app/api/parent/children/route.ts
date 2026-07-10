import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET(
req:Request
){

const parentId =
req.headers.get("parent-id");


const children =
await prisma.student.findMany({

where:{
parentId:parentId || ""
},

include:{
user:true,
progress:true,
achievements:true,
learningPath:true
}

});


return NextResponse.json(children);

}