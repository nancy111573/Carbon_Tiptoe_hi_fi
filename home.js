const selectHome = () => {
    document.getElementById("home").style.backgroundColor = "#E5BE01";
    document.getElementById("home").style.color = "#000";
    document.getElementById("popUp").style.display = "block";
}
const showForm = () => {
    document.getElementById("popUp").style.display = "block"
}
const closeForm= () => {
    document.getElementById("popUp").style.display = "none"
}
window.onload = selectHome;