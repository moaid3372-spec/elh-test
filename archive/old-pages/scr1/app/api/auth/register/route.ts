import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";


export async function POST(req:Request){

try{

const body = await req.json();


const {
name,
username,
password,
grade
}=body;



const exists =
await prisma.user.findUnique({
where:{
username
}
});


if(exists){

return NextResponse.json(
{
message:"Username already exists"
},
{
status:400
}
);

}



const hashedPassword =
await bcrypt.hash(password,10);



const user =
await prisma.user.create({

data:{

name,

username,

password:hashedPassword,

role:"STUDENT",

student:{
create:{
grade
}
}

}

});



return NextResponse.json({

message:"Account created",

userId:user.id

});


}

catch(error){

return NextResponse.json(
{
message:"Registration failed"
},
{
status:500
}
);

}

}