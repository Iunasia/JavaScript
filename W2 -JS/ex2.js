function Rant(Message){
    let Text = Message.toUpperCase();
    console.log(`${Text}`);
}

for(let i = 0; i < 3;i++){
    Rant("I hate beets");
}