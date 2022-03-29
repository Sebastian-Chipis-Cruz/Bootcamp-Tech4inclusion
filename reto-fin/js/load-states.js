const selStaetes = document.getElementById("selStaetes");
const seMlunicipalitiesList = document.getElementById("selMunicipalities");
function loadStates() {
    listSates.sort();
    addOptions(listSates);
}
function addOptions(array) {
    for (state in array) {
        const option = document.createElement("option");
        option.text = array[state];
        option.value = array[state]
        selStaetes.add(option);
    }
}
function loadMunicipalities() {
    let stateSelected = selStaetes.value;
    if(stateSelected !== ''){
      stateSelected = listMunicipalities[stateSelected];
      stateSelected.sort();
      stateSelected.forEach(function(municipality){
        let option = document.createElement('option');
        option.value = municipality;
        option.text = municipality;
        seMlunicipalitiesList.add(option);
      });
    }
    
  }
loadStates();