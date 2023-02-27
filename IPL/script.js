var teamObj1 = {
    name: "MI",
    icon: "url",
    playerCount: 0,
    topBatsman: "Rohit Sharma",
    topBowler: "Default",
    championshipsWon: 3
}

var teamObj2 = {
    name: "RR",
    icon: "url",
    playerCount: 0,
    topBatsman: "Default",
    topBowler: "Default",
    championshipsWon: 5
}

var teamObj3 = {
    name: "RCB",
    icon: "url",
    playerCount: 0,
    topBatsman: "Virat Kohli",
    topBowler: "Default",
    championshipsWon: 7
}

var playerObj1 = {
    id: 0,
    playerName: "Hardik Pandya",
    photo: "url",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    description: "All-rounder"
}

var playerObj2 = {
    id: 1,
    playerName: "Virat Kohli",
    photo: "url",
    from: "RCB",
    price: "8.0 Cr",
    isPlaying: true,
    description: "BatsMan"
}

var playerObj3 = {
    id: 2,
    playerName: "Yuvraj Singh",
    photo: "url",
    from: "MI",
    price: "1.00 Cr",
    isPlaying: false,
    description: "BatsMan"
}

var playerObj4 = {
    id: 3,
    playerName: "Chris Morris",
    photo: "url",
    from: "RR",
    price: "16.25 Cr",
    isPlaying: true,
    description: "All-rounder"
}

var playerObj5 = {
    id: 4,
    playerName: "Glenn Maxwell",
    photo: "url",
    from: "RCB",
    price: "14.25 Cr",
    isPlaying: true,
    description: "All-rounder"
}

var playerObj6 = {
    id: 5,
    playerName: "Rohit Sharma",
    photo: "url",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    description: "BatsMan"
}

var playerObj7 = {
    id: 6,
    playerName: "Ishan Kishan",
    photo: "url",
    from: "MI",
    price: "2.50 Cr",
    isPlaying: true,
    description: "BatsMan"
}

var teamsArr = [teamObj1, teamObj2, teamObj3];
var playersArr = [playerObj1, playerObj2, playerObj3, playerObj4, playerObj5, playerObj6, playerObj7]

onload = () => {
    var teams = JSON.parse(localStorage.getItem("teams") || "[]");
    var players = JSON.parse(localStorage.getItem("players") || "[]");
    if ((teams.length < 1) || (players.length < 1)) {
        console.log("Addding data");
        addTeams();
    }
    displayTeams();
    localStorage.setItem("currentTeam", "MI");
}


function addTeams() {
    localStorage.setItem("teams", JSON.stringify(teamsArr));
    localStorage.setItem("players", JSON.stringify(playersArr));
}

function displayTeams() {
    teams = JSON.parse(localStorage.getItem("teams") || "[]");
    players = JSON.parse(localStorage.getItem("players") || "[]");
    var data = document.getElementById("data");
    data.innerHTML = JSON.stringify(teams);
    var teamsData = "<table border='1|1' id='indexedTable'>";
    for (var i = 0; i < teams.length; i++) {
        teamsData += "<tr id="+ teams[i].name +">";
        teamsData += "<td>" + teams[i].name + "</td>";
        teamsData += "<td>" + teams[i].icon + "</td>";
        teamsData += "<td>" + teams[i].playerCount + "</td>";
        teamsData += "<td>" + teams[i].topBatsman + "</td>";
        teamsData += "<td>" + teams[i].topBowler + "</td>";
        teamsData += "<td>" + teams[i].championshipsWon + "</td>";
        teamsData += "</tr>";
    }
    teamsData += "</table>";
    data.innerHTML = teamsData;
}

$("#indexedTable").on("click", "tr", function(e) {
    console.log($(e.currentTarget).index() + 1);
});