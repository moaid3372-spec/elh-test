import {NextResponse} from "next/server";

import {addXP} from "@/lib/rewards";


export async function POST(
req:Request
){


const {
studentId,
activityId
}=await req.json();



const reward =
await addXP(
studentId,
20
);



return NextResponse.json({

message:
"Mission completed 🎉",

reward

});


}