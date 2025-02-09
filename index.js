let arr=["Rock","Paper","Scissor"];
let userscore=0;
let compscore=0;
let uservalue="";
let compvalue="";
document.querySelector("#Rock").addEventListener("click",(e)=>{
    uservalue="Rock";
    execu(uservalue);
})
document.querySelector("#Paper").addEventListener("click",(e)=>{
    //console.log("paper clicked");
    uservalue="Paper";
    execu(uservalue);
})
document.querySelector("#Scissor").addEventListener("click",(e)=>{
    //console.log("Scissor clicked");
    uservalue="Scissor";
    execu(uservalue);
})
document.querySelector("button").addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    document.querySelector("#userchoice").innerText="null";
    document.querySelector("#compchoice").innerText="null";
    document.querySelector("#won").innerText="null";
    document.querySelector('#userscore').innerText=userscore;
    document.querySelector('#compscore').innerText=compscore;
})
const execu=(uservalue)=>{
    document.querySelector("#userchoice").innerText=uservalue;
    let compvalue=Math.floor(Math.random()*3);
    document.querySelector("#compchoice").innerText=arr[compvalue];
    if(uservalue===arr[compvalue])
    {
        document.querySelector("#won").innerText="draw";
    }
    else if(uservalue==="Rock" && arr[compvalue]==="Paper")
    {
        document.querySelector("#won").innerText="comp";
        compscore++;
        document.querySelector('#compscore').innerText=compscore;
    }
    else if(uservalue==="Rock" && arr[compvalue]==="Scissor")
    {
        document.querySelector("#won").innerText="user";
        userscore++;
        document.querySelector('#userscore').innerText=userscore;
    }
    else if(uservalue==="Paper" && arr[compvalue]==="Scissor")
    {
        document.querySelector("#won").innerText="comp";
        compscore++;
        document.querySelector('#compscore').innerText=compscore;
    }
    else if(uservalue==="Paper" && arr[compvalue]==="Rock")
    {
        document.querySelector("#won").innerText="user";
        userscore++;
        document.querySelector('#userscore').innerText=userscore;
    }
    else if(uservalue==="Scissor" && arr[compvalue]==="Paper")
    {
            document.querySelector("#won").innerText="user";
            userscore++;
            document.querySelector('#userscore').innerText=userscore;
    }
    else if(uservalue==="Scissor" && arr[compvalue]==="Rock")
    {
            document.querySelector("#won").innerText="comp";
            compscore++;
            document.querySelector('#compscore').innerText=compscore;
    }
}