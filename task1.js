var p1 = [];
var p2 = []; 
var c1 = 0;var d1 = 0;
var c2 = 0;var d2 = 0;
var c3 = 0;var d3 = 0;
var c4 = 0;var d4 = 0;
var c5 = 0;var d5 = 0;

function Random1(){
    var rnd = Math.floor(Math.random()*5)+1;
    document.getElementById("randomn1").innerHTML = rnd;
    p1.push(rnd);
    if (rnd==1){c1 +=1;}
    else if (rnd ==2){c2+=1;}
    else if (rnd ==3){c3+=1;}
    else if (rnd ==4){c4+=1;}
    else{c5+=1;}
    display11(c1);
    display12(c2);
    display13(c3);
    display14(c4);
    display15(c5);
}

function Random2(){
    var rnd = Math.floor(Math.random()*5)+1;
    document.getElementById("randomn2").innerHTML = rnd;
    p2.push(rnd);
    if (rnd==1){d1 +=1;}
    else if (rnd ==2){d2+=1;}
    else if (rnd ==3){d3+=1;}
    else if (rnd ==4){d4+=1;}
    else{d5+=1;}
    display21(d1);
    display22(d2);
    display23(d3);
    display24(d4);
    display25(d5);
}

function display11(c){
    var output = document.getElementById('p11');
    if(c == 1){
        var img11 = '<img src="step1.png">';}
    else if(c == 2){
        var img11 = '<img src="step2.png">';}
    else if(c == 3){
        var img11 = '<img src="step3.png">';}
    else if(c >= 4){
        var img11 = '<img src="step4.png">';}
    output.innerHTML = img11;
}
function display12(c){
    var output = document.getElementById('p12');
    if(c == 1){
        var img12 = '<img src="step1.png">';}
    else if(c == 2){
        var img12 = '<img src="step2.png">';}
    else if(c == 3){
        var img12 = '<img src="step3.png">';}
    else if(c >= 4){
        var img12 = '<img src="step4.png">';}
    output.innerHTML = img12;
}
function display13(c){
    var output = document.getElementById('p13');
    if(c == 1){
        var img13 = '<img src="step1.png">';}
    else if(c == 2){
        var img13 = '<img src="step2.png">';}
    else if(c == 3){
        var img13 = '<img src="step3.png">';}
    else if(c >= 4){
        var img13 = '<img src="step4.png">';}
    output.innerHTML = img13;
}
function display14(c){
    var output = document.getElementById('p14');
    if(c == 1){
        var img14 = '<img src="step1.png">';}
    else if(c == 2){
        var img14 = '<img src="step2.png">';}
    else if(c == 3){
        var img14 = '<img src="step3.png">';}
    else if(c >= 4){
        var img14 = '<img src="step4.png">';}
    output.innerHTML = img14;
}
function display15(c){
    var output = document.getElementById('p15');
    if(c == 1){
        var img15 = '<img src="step1.png">';}
    else if(c == 2){
        var img15 = '<img src="step2.png">';}
    else if(c == 3){
        var img15 = '<img src="step3.png">';}
    else if(c >= 4){
        var img15 = '<img src="step4.png">';}
    output.innerHTML = img15;
}
function display21(c){
    var output = document.getElementById('p21');
    if(c == 1){
        var img21 = '<img src="step1.png">';}
    else if(c == 2){
        var img21 = '<img src="step2.png">';}
    else if(c == 3){
        var img21 = '<img src="step3.png">';}
    else if(c >= 4){
        var img21 = '<img src="step4.png">';}
    output.innerHTML = img21;
}
function display22(c){
    var output = document.getElementById('p22');
    if(c == 1){
        var img22 = '<img src="step1.png">';}
    else if(c == 2){
        var img22 = '<img src="step2.png">';}
    else if(c == 3){
        var img22 = '<img src="step3.png">';}
    else if(c >= 4){
        var img22 = '<img src="step4.png">';}
    output.innerHTML = img22;
}
function display23(c){
    var output = document.getElementById('p23');
    if(c == 1){
        var img23 = '<img src="step1.png">';}
    else if(c == 2){
        var img23 = '<img src="step2.png">';}
    else if(c == 3){
        var img23 = '<img src="step3.png">';}
    else if(c >= 4){
        var img23 = '<img src="step4.png">';}
    output.innerHTML = img23;
}
function display24(c){
    var output = document.getElementById('p24');
    if(c == 1){
        var img24 = '<img src="step1.png">';}
    else if(c == 2){
        var img24 = '<img src="step2.png">';}
    else if(c == 3){
        var img24 = '<img src="step3.png">';}
    else if(c >= 4){
        var img24 = '<img src="step4.png">';}
    output.innerHTML = img24;
}
function display25(c){
    var output = document.getElementById('p25');
    if(c == 1){
        var img25 = '<img src="step1.png">';}
    else if(c == 2){
        var img25 = '<img src="step2.png">';}
    else if(c == 3){
        var img25 = '<img src="step3.png">';}
    else if(c >= 4){
        var img25 = '<img src="step4.png">';}
    output.innerHTML = img25;
}

if (display11==display12==display13==display14==display15 == '<img src="step4.png">'){
    document.getElementById("win").innerHTML = 'Player 1 wins';
}
else if (display21==display22==display23==display24==display25 == '<img src="step4.png">'){
    document.getElementById("win").innerHTML = 'Player 2 wins';
}