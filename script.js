alert('Welcome to the Sports News');

var username = prompt ('Please enter your name');

alert('Welcome ' + username);

console.log(username);

var league = prompt('Please select your league(Serie A , Premier League , LaLiga , Bundesliga)');

while (league !== 'Serie A' && league !== 'Premier League' && league !== 'LaLiga' && league !== 'Bundesliga') {

  alert('You are enter a wrong league');
  league = prompt('Please select your league(Serie A , Premier League , LaLiga , Bundesliga)');

}
if(league =='Serie A')
{
  var image01 = '<img src="img/SerieA.png" alt= "Serie A"/>';
  document.write(image01);
  var team = askuser('Juventus F.C.','Inter Milan','A.C. Milan')
  writeimage()
}
else if(league =='Premier League')
{
  var image02 = '<img src="img/premier.jpg" alt= "Premier League"/>';
  document.write(image02);
  var team = askuser('Manchester City F.C.' , 'Manchester United F.C.' , 'Liverpool F.C.')
  writeimage()
}
else if(league =='LaLiga')
{
  var image03 = '<img src="img/laliga.jpg" alt= "LaLiga"/>';
  document.write(image03);
  var team = askuser('Atlético Madrid' , 'Real Madrid C.F.' , 'FC Barcelona')
  writeimage()
}
else if(league =='Bundesliga')
{
  var image04 = '<img src="img/bundes.jpg" alt= "Bundesliga"/>'; 
  document.write(image04);
  var team = askuser('FC Bayern Munich' , 'Borussia Dortmund' , 'Wolfsburg')
  writeimage()
}
var goalNumbers = prompt('How many time do you want them to score a goal?');
for (var i = 1; i <= goalNumbers; i++) {

    var goal = '<img src="img/Ball-In-Goal.jpg" alt= "goalNumbers"/>';
    document.write(goal);

}
function askuser(team1,team2,team3){
  
  var ea = prompt('Please select your champions(' + team1 + ',' + team2 + ',' + team3 +')');
  while (ea !== team1 && ea !== team2 && ea !== team3) {
  alert('You are enter a wrong champions');
  ea = prompt('Please select your champions(' + team1 + ',' + team2 + ',' + team3 +')')}
  return ea;
}
function writeimage(){

  if(team =='Juventus F.C.'){
  var image1 = '<img src="img/Juve.jpg" alt= "Juventus F.C."/>';
  document.write(image1);}
  else if(team =='Inter Milan'){
  var image2 = '<img src="img/Inter.png" alt= "Inter Milan"/>';
  document.write(image2);}
  else if(team =='A.C. Milan'){
  var image3 = '<img src="img/ACM.png" alt= "A.C. Milan"/>';
  document.write(image3);}
  else if(team =='Manchester City F.C.'){
  var image4 = '<img src="img/mancity.png" alt= "Manchester City F.C."/>';
  document.write(image4);}
  else if(team =='Manchester United F.C.'){
  var image5 = '<img src="img/manunited.png" alt= "Manchester United F.C."/>';
  document.write(image5);}
  else if(team =='Liverpool F.C.'){
  var image6 = '<img src="img/liver.jpg" alt= "Liverpool F.C."/>';
  document.write(image6);}
  else if(team =='Atlético Madrid'){
  var image7 = '<img src="img/Atletico.png" alt= "Atlético Madrid"/>';
  document.write(image7);}
  else if(team =='Real Madrid C.F.'){
  var image8 = '<img src="img/real.jpg" alt= "Real Madrid C.F."/>';
  document.write(image8);}
  else if(team =='FC Barcelona'){
  var image9 = '<img src="img/fcb.jpg" alt= "FC Barcelona"/>';
  document.write(image9);}
  else if(team =='FC Bayern Munich'){
  var image10 = '<img src="img/bayern.jpg" alt= "FC Bayern Munich"/>';
  document.write(image10);}
  else if(team =='Borussia Dortmund'){
  var image11 = '<img src="img/bvb.jpg" alt= "Borussia Dortmund"/>';
  document.write(image11);}
  else if(team =='Wolfsburg'){
  var image12 = '<img src="img/wolfsburg.jpg" alt= "Wolfsburg"/>';
  document.write(image12);}
}