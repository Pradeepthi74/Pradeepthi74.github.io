onload = () => {
    var currentTeam = localStorage.getItem("currentTeam");
    console.log(currentTeam);
    if(currentTeam[0] == '"'){
        currentTeam = currentTeam.slice(1, currentTeam.length-1);
    }
    var teamName = document.getElementById("teamName");
    teamName.innerHTML = currentTeam;
    var teams = JSON.parse(localStorage.getItem("teams") || "[]");
    var team = teams.find((t) => {
        if (currentTeam == t.name) {
            return t;
        }
    });
    var arr = JSON.parse(localStorage.getItem("players") || "[]");
    var players = arr.filter(res => res.from.indexOf(currentTeam) !== -1);
    team.playerCount = players.length;
    var logo = document.getElementById("logo");
    logo.src = team.icon;
    var count = document.getElementById("count");
    count.innerHTML = "PlayerCount : " + team.playerCount;
    var tbat = document.getElementById("tbat");
    tbat.innerHTML = "Top Batsman : " + team.topBatsman;
    var tbow = document.getElementById("tbow");
    tbow.innerHTML = "Top Bowler : " + team.topBowler;
    var won = document.getElementById("won");
    won.innerHTML = "Championships Won : " + team.championshipsWon;
    displayPlayers(players);
    localStorage.setItem("currentPlayer", 0);
}

function displayPlayers(players) {
    var data = document.getElementById("playersData");
    var playerData = "";
    for (var i = 0; i < players.length; i++) {
        playerData += "<div class='playerFlex'"+ " onclick='playersPage(" + players[i].id + ")'>";
        playerData += '<img src="'+ players[i].photo +'" alt="playerPhoto" width="200px" height="200px">';
        playerData += '<p>'+ players[i].playerName +'</p>';
        playerData += "</div>";
    }
    data.innerHTML = playerData;
}

function playersPage(val){
    console.log(val);
    localStorage.setItem("currentPlayer", val);
    window.location = "./player.html"
}