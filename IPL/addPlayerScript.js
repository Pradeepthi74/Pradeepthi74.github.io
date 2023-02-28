onload = () => {
    var teamOptions = document.getElementById("team");
    var teams = JSON.parse(localStorage.getItem("teams") || "[]");
    var teamsData = "";
    for (var i = 0; i < teams.length; i++) {
        teamsData += "<option value='" + JSON.stringify(teams[i].name) + "'>" + teams[i].name + "</option>";
    }
    teamOptions.innerHTML = teamsData;
}

function displayTeams() {
    teams = JSON.parse(localStorage.getItem("teams") || "[]");
    var data = document.getElementById("data");
    var teamsData = "";
    for (var i = 0; i < teams.length; i++) {
        teamsData += "<div class='teamFlex'" + " onclick='teamsPage(" + JSON.stringify(teams[i].name) + ")'>";
        teamsData += '<img src="'+ teams[i].icon +'" alt="playerPhoto" width="200px" height="200px">';
        teamsData += '<p>'+ teams[i].name +'</p>';
        teamsData += "</div>";
    }
    data.innerHTML = teamsData;
}

function save(){
    var playerId = JSON.parse(localStorage.getItem("playerCount") || 0);
    localStorage.setItem("playerCount", playerId+1);
    var name = document.getElementById('name').value;
    var pic = document.getElementById('url').value;
    var team = document.getElementById("team");
    var playerTeam = team.options[team.selectedIndex].value;
    var playerPrice = document.getElementById("price").value;
    var isPlaying = document.getElementById("isPlaying");
    var status = isPlaying.options[isPlaying.selectedIndex].value;
    var playerRole = document.getElementById("role");
    var role = playerRole.options[playerRole.selectedIndex].value;
    console.log(playerId, name, pic, playerTeam, playerPrice, status, role);
    var playerObj = {
        id: playerId,
        playerName: name,
        photo: pic,
        from: playerTeam,
        price: playerPrice,
        isPlaying: status,
        description: role
    }
    var players = JSON.parse(localStorage.getItem("players") || "[]");
    players.push(playerObj);
    localStorage.setItem("players", JSON.stringify(players));
    localStorage.setItem("currentTeam", playerObj.from);
    window.location = "./team.html";
}