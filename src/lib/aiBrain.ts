export function calculateNextStep(profile:any){

if(profile.vocabulary<40){

return{

skill:"Vocabulary",

mission:"Word Explorer",

difficulty:1

};

}

if(profile.reading<40){

return{

skill:"Reading",

mission:"Story Island",

difficulty:2

};

}

return{

skill:"Conversation",

mission:"Talk With Leo",

difficulty:3

};

}