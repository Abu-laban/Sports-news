alert('Welcome to the Sports News');

var username = prompt ('Please enter your name');

alert('Welcome ' + username);

console.log(username)

var league = prompt('Please select your league(Serie A , Premier League , LaLiga , Bundesliga)')

if(league =='Serie A')
{
  var image01 = '<img src="img/SerieA.png" alt= "Serie A"/>';
  
  document.write(image01);
  var team1 = prompt('Please select your champions(Juventus F.C. , Inter Milan , A.C. Milan)')
  if(team1 =='Juventus F.C.')
{
  var image1 = '<img src="img/Juve.jpg" alt= "Juventus F.C."/>';
  
  document.write(image1);
  
}else if(team1 =='Inter Milan'){
  
  var image2 = '<img src="img/Inter.png" alt= "Inter Milan"/>';
  
  document.write(image2);
}
  else if(team1 =='A.C. Milan'){
  
  var image3 = '<img src="img/ACM.png" alt= "A.C. Milan"/>';
  
  document.write(image3);
}
}else if(league =='Premier League'){
var image02 = '<img src="img/premier.jpg" alt= "Premier League"/>';
  
  document.write(image02);
  var team2 = prompt('Please select your champions(Manchester City F.C. , Manchester United F.C. , Liverpool F.C.)')
if(team2 =='Manchester City F.C.')
{
  var image4 = '<img src="img/mancity.png" alt= "Manchester City F.C."/>';
  
  document.write(image4);
  
}else if(team2 =='Manchester United F.C.'){
  
  var image5 = '<img src="img/manunited.png" alt= "Manchester United F.C."/>';
  
  document.write(image5);
}
  else if(team2 =='Liverpool F.C.'){
  
  var image6 = '<img src="img/liver.jpg" alt= "Liverpool F.C."/>';
  
  document.write(image6);
}
}
else if(league =='LaLiga'){
var image03 = '<img src="img/laliga.jpg" alt= "LaLiga"/>';
  
  document.write(image03);
  var team3 = prompt('Please select your champions(Atlético Madrid , Real Madrid C.F. , FC Barcelona)')
if(team3 =='Atlético Madrid')
{
  var image7 = '<img src="img/Atletico.png" alt= "Atlético Madrid"/>';
  
  document.write(image7);
  
}else if(team3 =='Real Madrid C.F.'){
  
  var image8 = '<img src="img/real.jpg" alt= "Real Madrid C.F."/>';
  
  document.write(image8);
}
  else if(team3 =='FC Barcelona'){
  
  var image9 = '<img src="img/fcb.jpg" alt= "FC Barcelona"/>';
  
  document.write(image9);
}
}
else if(league =='Bundesliga'){
var image04 = '<img src="img/bundes.jpg" alt= "Bundesliga"/>';
  
  document.write(image04);
  var team4 = prompt('Please select your champions(FC Bayern Munich , Borussia Dortmund , Wolfsburg)')
if(team4 =='FC Bayern Munich')
{
  var image10 = '<img src="img/bayern.jpg" alt= "FC Bayern Munich"/>';
  
  document.write(image10);
  
}else if(team4 =='Borussia Dortmund'){
  
  var image11 = '<img src="img/bvb.jpg" alt= "Borussia Dortmund"/>';
  
  document.write(image11);
}
  else if(team4 =='Wolfsburg'){
  
  var image12 = '<img src="img/wolfsburg.jpg" alt= "Wolfsburg"/>';
  
  document.write(image12);
}
}

