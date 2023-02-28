onload = () => {
    var currentPlayer = localStorage.getItem("currentPlayer");
    console.log(currentPlayer);
    var players = JSON.parse(localStorage.getItem("players") || "[]");
    var player = players.find((t) => {
        if (currentPlayer == t.id) {
            return t;
        }
    });
    console.log(player);
    var playerName = document.getElementById("playerName");
    playerName.innerHTML = player.playerName;
    var photo = document.getElementById("photo");
    photo.src = player.photo;
    var team = document.getElementById("team");
    team.innerHTML = "Team : " + player.from;
    var price = document.getElementById("price");
    price.innerHTML = "Price : " + player.price;
    var status = document.getElementById("status");
    if(player.isPlaying){
        status.innerHTML = "Playing Status : Playing";
    }else{
        status.innerHTML = "Playing Status : On-bench";
    }
    var role = document.getElementById("role");
    role.innerHTML = "Role : " + player.description; 
}