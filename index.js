const selectHome = () => {
    document.getElementById("home").style.backgroundColor = "#E5BE01";
    document.getElementById("home").style.color = "#000";
    document.getElementById("ct-form").style.display = "none";
}
const showForm = () => {
    document.getElementById("ct-form").style.display = "block"
}
const closeForm= () => {
    document.getElementById("ct-form").style.display = "none"
}
window.onload = selectHome;