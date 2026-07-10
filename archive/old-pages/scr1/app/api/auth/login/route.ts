import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import {prisma} from "@/lib/prisma";


export async function POST(req:Request){

const {
username,
password
}=await req.json();



const user =
await prisma.user.findUnique({

where:{
username
}

});



if(!user){

return NextResponse.json(
{
message:"Invalid login"
},
{
status:401
}
);

}



const valid =
await bcrypt.compare(
password,
user.password
);



if(!valid){

return NextResponse.json(
{
message:"Invalid login"
},
{
status:401
}
);

}



return NextResponse.json({

message:"Login successful",

user:{
id:user.id,
name:user.name,
role:user.role
}

});


}