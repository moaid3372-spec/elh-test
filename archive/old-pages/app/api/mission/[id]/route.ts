import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET(
req:Request,
{
params
}:any
){


const mission =
await prisma.mission.findUnique({

where:{
id:params.id
},

include:{
activities:true,
rewards:true
}

});


return NextResponse.json(mission);


}