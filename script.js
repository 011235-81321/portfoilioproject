var cat = 'string';
//all of hte varible
var countI = 0;
var countP = 0;
var countM = 0;
var countS = 0;
let decodeI = document.querySelector(".decoI");
let decodeP = document.querySelector(".decoP");
let decodeM = document.querySelector(".decoM");
let decodeS = document.querySelector(".decoS");
let info  = document.querySelector(".I");
let plans = document.querySelector(".P");
let missions = document.querySelector(".M");
let skills = document.querySelector(".S");

// source code is all from w3schools. and from visual studio code
//Below is the working code that changes hte text on hover for the button only.
let c = 0;
let confi = ["Confidentiality Notice","Yonfidentiality Notice","Wonfidentiality Notice","sonfidentiality Notice","Honfidentiality Notice","HMnfidentiality Notice","HAnfidentiality Notice","HCnfidentiality Notice","Honfidentiality Notice","HoUfidentiality Notice","HoIfidentiality Notice","HoKfidentiality Notice","Homfidentiality Notice","HomXidentiality Notice","HoWfidentiality Notice","HomMidentiality Notice","Homeidentiality Notice","HomeIdentiality Notice","Homegdentiality Notice","Homejdentiality Notice","Homedentiality Notice","HomePentiality Notice","Homeeentiality Notice","HomeHentiality Notice","Homeentiality Notice","HomeJntiality Notice","HomeQntiality Notice","HomeUntiality Notice","Homentiality Notice","HomeKtiality Notice","HomeItiality Notice","Homeatiality Notice","Hometiality Notice","Homebiality Notice","HomeBiality Notice","HomeWiality Notice","Homenality Notice","HomeYiality Notice","HomeJiality Notice","Homeiality Notice","Homepality Notice","Homerality Notice","Homeuality Notice","Homeality Notice","HomeGlity Notice","Homeslity Notice","HomeTlity Notice","Homelity Notice","HomeFity Notice","HomeUity Notice","Homejity Notice","Homeity Notice","HomeIty Notice","Homeyty Notice","HomeCty Notice","Homety Notice","HomeTy Notice","HomeGy Notice","Homezy Notice","Homey Notice","Homel Notice","Homev Notice","Homee Notice","Home Notice","Home notice","Home xotice","Home eotice","Home Potice","Home Pjtice","Home Pktice","Home PCtice","Home Patice","Home PaTice","Home PaWice","Home PaDice","Home Pagice","Home PagRce","Home PagWce","Home Pagpce","Home Pagece","Home Pageje","Home Pageqe","Home PageNe","Home Pagee","Home PageX","Home PageE","Home PageW","Home Page"];
let test = document.querySelector(".test");
//home is the variable for hte Confidetiality notice
let home = document.querySelector(".H");
home.addEventListener("mouseover", function(){
let intervalId = setInterval(() => {
    // console.log("checking");
    if(c === 87){
        home.innerHTML = confi[c];
        clearInterval(intervalId);
    }
    else{
        home.innerHTML = confi[c];
        c++
    }
}, 20);
});
i = 0;
let infi = ["Classified Info","olassified Info","Mlassified Info","blassified Info","Alassified Info","ATassified Info","Ahassified Info","AAassified Info","Abassified Info","AbNssified Info","AbAssified Info","Abussified Info","Abossified Info","AboXsified Info","AboIsified Info","AboJsified Info","Abousified Info","AbouYified Info","AbouCified Info","Aboujified Info","Aboutified Info","AboutHfied Info","AboutGfied Info","Abouthfied Info","About fied Info","About Sied Info","About Kied Info","About Uied Info","About Mied Info","About Maed Info","About MIed Info","About MKed Info","About Meed Info","About Mekd Info","About Mesd Info","About MeBd Info","About Med Info","About Mel Info","About Mei Info","About Mew Info","About Me Info","About Me unfo","About Me Tnfo","About Me Onfo","About Me nfo","About Me hfo","About Me Lfo","About Me gfo","About Me fo","About Me Yo","About Me Io","About Me Uo","About Me o","About Me E","About Me X","About Me x","About Me","About Me"]
info.addEventListener("mouseover", function(){
    let intervalId = setInterval(() => {
        // console.log("checking");
        if(i === 57){
            info.innerHTML = infi[i];
            clearInterval(intervalId);
        }
        else{
            info.innerHTML = infi[i];
            i++
        }
    }, 20);
});
let p = 0;
let plani = ["Secret Plans","Necret Plans","yecret Plans","Recret Plans","Fecret Plans","Ficret Plans","Fvcret Plans","FUcret Plans","Fucret Plans","Fuyret Plans","Fuzret Plans","Fuaret Plans","Futret Plans","Futyet Plans","Futqet Plans","FutXet Plans","Futuet Plans","Futuut Plans","Futuqt Plans","FutuWt Plans","Futurt Plans","Futuru Plans","FuturS Plans","FuturB Plans","Future Plans"]
plans.addEventListener("mouseover", function(){
    let intervalId = setInterval(() => {
        // console.log("checking");
        if(p === plani.length-1){
            plans.innerHTML = plani[p];
            clearInterval(intervalId);
        }
        else{
            plans.innerHTML = plani[p];
            p++
        }
    }, 20);
});
let m = 0;
let missi = ["Completed Missions","dompleted Missions","aompleted Missions","rompleted Missions","Pompleted Missions","Psmpleted Missions","PWmpleted Missions","PKmpleted Missions","Pampleted Missions","Paupleted Missions","PaNpleted Missions","PaLpleted Missions","Paspleted Missions","Pasfleted Missions","Pasoleted Missions","Pasvleted Missions","Pastleted Missions","Pastfeted Missions","PastLeted Missions","Pastveted Missions","Past eted Missions","Past Ited Missions","Past Yted Missions","Past Ated Missions","Past Pted Missions","Past Pzed Missions","Past PTed Missions","Past PIed Missions","Past Pred Missions","Past PrUd Missions","Past PrNd Missions","Past PrKd Missions","Past Prod Missions","Past Prol Missions","Past Proe Missions","Past Prom Missions","Past Proj Missions","Past ProjlMissions","Past ProjcMissions","Past ProjwMissions","Past ProjeMissions","Past Projegissions","Past ProjeOissions","Past Projeyissions","Past Projecissions","Past ProjecIssions","Past ProjecDssions","Past Projeclssions","Past Projectssions","Past ProjectNsions","Past ProjectVsions","Past ProjectKsions","Past Projectsions","Past Projectqions","Past Projectcions","Past ProjectYions","Past Projections","Past Projectlons","Past ProjectIons","Past Projectmons","Past Projectons","Past Projectqns","Past Projecttns","Past Projectzns","Past Projectns","Past ProjectAs","Past ProjectUs","Past ProjectSs","Past Projecti","Past Projecth","Past ProjectY","Past Projects"];
missions.addEventListener("mouseover", function(){
    let intervalId = setInterval(() => {
        // console.log("checking");
        if(m === missi.length-1){
            missions.innerHTML = missi[m];
            clearInterval(intervalId);
        }
        else{
            missions.innerHTML = missi[m];
            m++
        }
    }, 20);
});
let s = 0;
let skili = ["Abilities","zbilities","Sbilities","dbilities","Sbilities","Slilities","Spilities","SBilities","Skilities","SkClities","SkUlities","SkJlities","Skilities","Skigities","Skicities","Skioities","Skilities","Skilqties","Skilgties","SkilLties","Skillties","Skillnies","SkillTies","Skillpies","Skillies","SkillBes","SkillCes","SkillWes","Skillses","Skillsvs","Skillscs","Skillsls","Skillss","SkillsW","SkillsQ","SkillsM","Skills"];
skills.addEventListener("mouseover", function(){
    let intervalId = setInterval(() => {
        // console.log("checking");
        if(s === skili.length-1){
            skills.innerHTML = skili[s];
            clearInterval(intervalId);
        }
        else{
            skills.innerHTML = skili[s];
            s++
        }
    }, 20);
});
// i = 0;
// let plani = ["car"];
//this is the end of hte code that makes the button iterate and the start of the code thta enabes the pages to change.
// let plans = document.querySelector("#");
// let missions = document.querySelector("#");
// let skills = document.querySelector("#");


info.addEventListener("click", function(){
if(countI === 0){
    decodeI.innerHTML = "decoding";
window.setTimeout(decodingoneI, 1000);
window.setTimeout(decodingtwoI, 2000);
window.setTimeout(decodingthreeI, 3000);
window.setTimeout(changeinfo, 4000);
countI++;
// console.log(countI);
// console.log(countM);
// console.log(countP);
// console.log(countS);
}
else {
changeinfo();
}
});
plans.addEventListener("click", function(){
    if(countP === 0){
    decodeP.innerHTML = "decoding";
    window.setTimeout(decodingoneP, 1000);
    window.setTimeout(decodingtwoP, 2000);
    window.setTimeout(decodingthreeP, 3000);
    window.setTimeout(changeplans, 4000);
     countP++;
    //  console.log(countI);
// console.log(countM);
// console.log(countP);
// console.log(countS);
    }
    else{
        changeplans();
    }
});
missions.addEventListener("click", function(){
    if(countM === 0){
    decodeM.innerHTML = "decoding";
    window.setTimeout(decodingoneM, 1000);
    window.setTimeout(decodingtwoM, 2000);
    window.setTimeout(decodingthreeM, 3000);
    window.setTimeout(changeMisson, 4000);
     countM++;
    //  console.log(countI);
// console.log(countM);
// console.log(countP);
// console.log(countS);
    }
    else {
        changeMisson();
    }
});
skills.addEventListener("click", function(){
    if(countS === 0){
    decodeS.innerHTML = "decoding";
    window.setTimeout(decodingoneS, 1000);
    window.setTimeout(decodingtwoS, 2000);
    window.setTimeout(decodingthreeS, 3000);
    window.setTimeout(changeSkills, 4000);
     countS++;
     
    //  console.log(countI);
// console.log(countM);
// console.log(countP);
// console.log(countS);
    }
    else{
        changeSkills();
    }
});
function decodingoneI(){
decodeI.innerHTML = "decoding.";
}
function decodingtwoI(){
decodeI.innerHTML = "decoding.."
}
function decodingthreeI(){
decodeI.innerHTML = "decoding..."
}
function decodingoneP(){
    decodeP.innerHTML = "decoding."
}
function decodingtwoP(){
    decodeP.innerHTML = "decoding.."
}
function decodingthreeP(){
    decodeP.innerHTML = "decoding..."
}
function decodingoneM(){
    decodeM.innerHTML = "decoding.";
}
function decodingtwoM(){
    decodeM.innerHTML = "decoding.."
}
function decodingthreeM(){
    decodeM.innerHTML = "decoding..."
}
function decodingoneS(){
    decodeS.innerHTML = "decoding.";
}
function decodingtwoS(){
    decodeS.innerHTML = "decoding.."
}
function decodingthreeS(){
    decodeS.innerHTML = "decoding..."
}
function changeinfo(){
    window.location.href = "info.html";
    countI++;
}
function changeplans(){
    window.location.href = "plans.html";
    countP++;
}
function changeMisson(){
    window.location.href = "mission.html";
    countM++;
}
function changeSkills(){
window.location.href = "skills.html";
countS++;
}
function doItOnce(){
    var visits = Number(localStorage.getItem('visitCount'));
    var current = Boolean(sessionStorage.getItem('session'));
    if(!current){
        visits++;
    }
    localStorage.setItem('visitCount', visits);
    sessionStorage.setItem('session', true);
    return visits;
// console.log(visits);
}
// console.log(doItOnce().toString);

//missin variables
let nuke = document.querySelector("#nuclear");
let CYOP = document.querySelector("#CYOP");
let Villan = document.querySelector("#Villan");
let BeatMaker = document.querySelector("#BeatMaker");
let Enargeia = document.querySelector("#Enargeia");
let ADoctor = document.querySelector("#ADoctor");

// mission functions
function Border(gameName){
     gameName.style.border = "2px solid white"
}
function Nuclear(){
    window.location.href = "https://011235-81321.github.io/project-nuclear/";
}
function Choose(){
window.location.href = "https://011235-81321.github.io/theywontremeberthat/"
}
function villan(){
    window.location.href = "https://011235-81321.github.io/workingwhoareyou/"

}
function Beat(){
    window.location.href = "https://011235-81321.github.io/BeatMaker2/"
// console.log("go to web")
}
function enargeia(){
    window.location.href = "https://0974aa40-b8cb-43f8-901e-7c9cf9d7713d-00-16je4ga517rj0.riker.replit.dev/"

}
function Doctor(){
    window.location.href = "https://276b2a2e-0b1d-40fc-9253-11caa6b704e8-00-2dxjyr1xj5ais.riker.replit.dev/"

}

// following code is not mine and is cited in teh sources page
var points = [],
    velocity2 = 5, // velocity squared
    canvas = 
document.getElementById('container'),
  context = canvas.getContext('2d'),
  radius = 5,
  boundaryX = 200,
  boundaryY = 200,
  numberOfPoints = 30;

init();

function init() {
  // create points
  for (var i = 0; i<numberOfPoints; i++) {
    createPoint();
  }
  // create connections
  for (var i = 0, l=points.length; i<l; i++) {
    var point = points[i];
    if(i == 0) {
      points[i].buddy = points[points.length-1];
    } else {
      points[i].buddy = points[i-1];
    }
  }
  
  // animate
  animate();
}

function createPoint() {
  var point = {}, vx2, vy2;
  point.x = Math.random()*boundaryX;
  point.y = Math.random()*boundaryY;
  // random vx 
  point.vx = (Math.floor(Math.random())*2-1)*Math.random();
  vx2 = Math.pow(point.vx, 2);
  // vy^2 = velocity^2 - vx^2
  vy2 = velocity2 - vx2;
  point.vy = Math.sqrt(vy2) * (Math.random()*2-1);
  points.push(point);
}

function resetVelocity(point, axis, dir) {
  var vx, vy;
  if(axis == 'x') {
    point.vx = dir*Math.random();  
    vx2 = Math.pow(point.vx, 2);
  // vy^2 = velocity^2 - vx^2
  vy2 = velocity2 - vx2;
  point.vy = Math.sqrt(vy2) * (Math.random()*2-1);
  } else {
    point.vy = dir*Math.random();  
    vy2 = Math.pow(point.vy, 2);
  // vy^2 = velocity^2 - vx^2
  vx2 = velocity2 - vy2;
  point.vx = Math.sqrt(vx2) * (Math.random()*2-1);
  }
}

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#97badc';
  context.fill();  
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = '#8ab2d8'
  context.stroke();
}  

function draw() {
  for(var i =0, l=points.length; i<l; i++) {
    // circles
    var point = points[i];
    point.x += point.vx;
    point.y += point.vy;
    drawCircle(point.x, point.y);
    // lines
    drawLine(point.x, point.y, point.buddy.x, point.buddy.y);
    // check for edge
    if(point.x < 0+radius) {
      resetVelocity(point, 'x', 1);
    } else if(point.x > boundaryX-radius) {
      resetVelocity(point, 'x', -1);
    } else if(point.y < 0+radius) {
      resetVelocity(point, 'y', 1);
    } else if(point.y > boundaryY-radius) {
      resetVelocity(point, 'y', -1);
    } 
  }
}

function animate() {
  context.clearRect ( 0 , 0 , 200 , 200 );
  draw();
  requestAnimationFrame(animate);
}

// let wrong = document.querySelector(".wrong")
// let button = document.querySelector(".loginButton");
// button.addEventListener("click", function(){
//     let user = document.querySelector(".username").value;
//     let pass = document.querySelector(".password").value;
//  if(user == "Username1234" && pass == "P@5sw0rd"){
// window.location.href = "home.html";
//  }    
//  else{
// wrong.innerHTML = "wrong username or Password"
//  }
// });

