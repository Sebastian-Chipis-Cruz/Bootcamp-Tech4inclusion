const selDisabilitiesList = document.getElementById("selTypesDisability");
function loadDisability() {
    listDisabilities.sort();
    addOptions(listDisabilities);
}
function addOptions(array) {
    for (Types in array) {
        const option = document.createElement("option");
        option.text = array[Types];
        option.value = array[Types];
        selDisabilitiesList.add(option);
    }
}
loadDisability();