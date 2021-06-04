const buttonNode = document.getElementById("train");
buttonNode.style.visibility = "";
buttonNode.innerHTML = "Log Next Station";

function* TrainStations() {
    const stations = ["Poughkeepsie", "Newburgh", "Peepskill", "Yonkers", "Bronx", "Grand Central"];
    for (const station of stations) {
        yield station;
    }
}
const stationGenerator = TrainStations();

buttonNode.addEventListener("click", (e) => {
    e.preventDefault();
    const value = stationGenerator.next();
    if (value.done) {
        buttonNode.setAttribute("disabled", true);
        console.log("We made it!")
        return;
    }
    console.log(value.value);
})
