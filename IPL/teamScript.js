onload = () => {
    var team = document.getElementById("teamData");
    var currentTeam = localStorage.getItem("currentTeam");
    console.log(currentTeam);
    team.innerHTML = currentTeam;
}