

var score=[0,0];
var scoreHolder=0;
var currentScore=0;
var roundscore=0;
var activeplayer=0;

var dice=Math.floor(Math.random()*6)+1;
console.log(dice);

document.querySelector("#score-1").textContent=0;
document.querySelector("#score-0").textContent=0;
document.querySelector("#current-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector(".dice").style.display='none';


document.querySelector("#current-" + activeplayer).textContent=dice;
var x = document.querySelector("#score-0").textContent;
console.log(x);

document.querySelector(".btn-roll").addEventListener("click",function()
	{
		var dice = Math.floor((Math.random()*6)+1);
		//document.querySelector(".dice").style.display="block";
		var dicedom=document.querySelector(".dice");
		dicedom.style.display="block";
		dicedom.src="dice-"+dice+".png";

		if(dice!==1)
		{
			roundscore+=dice;
			document.querySelector("#current-"+activeplayer).textContent=roundscore;

		}
		else
		{
			nextplayer();
		}
	});

	document.querySelector(".btn-hold").addEventListener("click", function()
		{
			score[activeplayer]+=roundscore;
			document.querySelector("#score-"+ activeplayer).textContent= score[activeplayer];

			if(score[activeplayer]>=20)
			{
				document.querySelector('name-'+activeplayer).textContent="Winner";
				document.querySelector(".dice").style.display="none";
			}
			else
			{
				nextplayer();
			}
		});

function nextplayer()
{
	activeplayer===0?activeplayer=1:activeplayer=0;
	roundscore=0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0'; 

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
}

document.querySelector(".btn-new").addEventListener("click", function(){
	var score=[0,0];
var roundscore=0;
var activeplayer=0;
console.log("clicked!");
document.querySelector("#score-1").textContent=0;
document.querySelector("#score-0").textContent=0;
document.querySelector("#current-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector(".dice").style.display='none';
})