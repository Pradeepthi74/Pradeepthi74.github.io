
function save(){
    var teamName = document.getElementById('name').value;
    var pic = document.getElementById('url').value;
    var count = 0;
    var tbat = document.getElementById("tbat").value;
    var tbow = document.getElementById("tbow").value;
    var won = document.getElementById("won").value;
    console.log(teamName, pic, count, tbat, tbow, won);
    var teamObj = {
        name: teamName,
        icon: pic,
        playerCount: count,
        topBatsman: tbat,
        topBowler: tbow,
        championshipsWon: won
    }
    var teams = JSON.parse(localStorage.getItem("teams") || "[]");
    teams.push(teamObj);
    localStorage.setItem("teams", JSON.stringify(teams));
    window.location = "./index.html";
}