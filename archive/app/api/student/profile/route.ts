import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(
req: Request
){

const userId =
req.headers.get("user-id");


if(!userId){

return NextResponse.json(
{
message:"Unauthorized"
},
{
status:401
}
);

}


const student =
await prisma.student.findUnique({

where:{
userId
},

include:{
user:true,
progress:true,
achievements:true
}

});


if(!student){

return NextResponse.json(
{
message:"Student not found"
},
{
status:404
}
);

}


return NextResponse.json(student);

}