import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET(){


const test =
await prisma.placementTest.findFirst({

include:{
questions:true
}

});


return NextResponse.json(test);


}