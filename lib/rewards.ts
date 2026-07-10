import {prisma} from "./prisma";


export async function addXP(
studentId:string,
amount:number
){


const student =
await prisma.student.findUnique({

where:{
id:studentId
}

});


if(!student)
return;



let newXP =
student.xp + amount;


let newLevel =
student.level;



if(newXP >= student.level * 100)
{

newLevel++;

}



await prisma.student.update({

where:{
id:studentId
},

data:{

xp:newXP,

level:newLevel

}

});



return {

xp:newXP,

level:newLevel

};

}