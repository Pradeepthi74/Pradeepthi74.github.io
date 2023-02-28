var teamObj1 = {
    name: "MI",
    icon: "https://m.media-amazon.com/images/I/51GxgGLmzfL._AC_SS450_.jpg",
    playerCount: 0,
    topBatsman: "Rohit Sharma",
    topBowler: "Hardik Pandya",
    championshipsWon: 3
}

var teamObj2 = {
    name: "RR",
    icon: "https://whoowner.b-cdn.net/wp-content/uploads/2018/02/Owner-of-Rajasthan-Royals-Team-India-RR-Wiki-Logo.jpg",
    playerCount: 0,
    topBatsman: "Chris Morris",
    topBowler: "Chris Morris",
    championshipsWon: 5
}

var teamObj3 = {
    name: "RCB",
    icon: "https://rukminim1.flixcart.com/image/416/416/kfh5ifk0-0/poster/w/y/s/medium-p-44414-rcb-royal-challenger-bangalore-logo-ipl-2020-team-original-imafvxhehngvfthd.jpeg",
    playerCount: 0,
    topBatsman: "Virat Kohli",
    topBowler: "Glenn Maxwell",
    championshipsWon: 7
}

var playerObj1 = {
    id: 0,
    playerName: "Hardik Pandya",
    photo: "https://www.mykhel.com/thumb/247x100x233/cricket/players/0/7780.1666933992.jpg",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    description: "All-rounder"
}

var playerObj2 = {
    id: 1,
    playerName: "Virat Kohli",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316600/316605.png",
    from: "RCB",
    price: "8.0 Cr",
    isPlaying: true,
    description: "BatsMan"
}

var playerObj3 = {
    id: 2,
    playerName: "Yuvraj Singh",
    photo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/113.png",
    from: "MI",
    price: "1.00 Cr",
    isPlaying: false,
    description: "BatsMan"
}

var playerObj4 = {
    id: 3,
    playerName: "Chris Morris",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/320300/320342.png",
    from: "RR",
    price: "16.25 Cr",
    isPlaying: true,
    description: "All-rounder"
}

var playerObj5 = {
    id: 4,
    playerName: "Glenn Maxwell",
    photo: "https://www.melbournestars.com.au/-/media/Players/Men/Domestic/Melbourne%20Stars/BBL12/GlennMaxwell1-BBL12.ashx",
    from: "RCB",
    price: "14.25 Cr",
    isPlaying: true,
    description: "All-rounder"
}

var playerObj6 = {
    id: 5,
    playerName: "Rohit Sharma",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316500/316584.png",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    description: "BatsMan"
}

var playerObj7 = {
    id: 6,
    playerName: "Ishan Kishan",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/331100/331165.png",
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
        addData();
    }
    displayTeams();
    updatePlayerCount();
    localStorage.setItem("currentTeam", "MI");
}


function addData() {
    localStorage.setItem("teams", JSON.stringify(teamsArr));
    localStorage.setItem("players", JSON.stringify(playersArr));
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

function teamsPage(val) {
    localStorage.setItem("currentTeam", val);
    window.location = "./team.html"
}

function updatePlayerCount() {
    var arr = JSON.parse(localStorage.getItem("players") || "[]");
    localStorage.setItem("playerCount", arr.length);
}

function searchPlayers() {
    let filter = document.getElementById('search').value.toUpperCase();
    var players = JSON.parse(localStorage.getItem("players") || "[]");
    var displayArea = document.getElementById("dropdown-content");
    var res = "";
    for (var i = 0; i < players.length; i++) {
        if (players[i].from.indexOf(filter) > -1) {
            res += "<p " + "onclick='playersPage(" + players[i].id + ")'>";
            res += players[i].playerName + " from "  + players[i].from;
            res += "</p>";
        }
    }
    displayArea.innerHTML = res;
}

function playersPage(val){
    console.log(val);
    localStorage.setItem("currentPlayer", val);
    window.location = "./player.html"
}