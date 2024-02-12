//Constructor Function

function HouseKeeper(yearsOfExperience, name, cleaningRepetoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepetoire = cleaningRepetoire;
    this.clean = function() {
        alert("Cleaning in progress");
    }
}
var houseKeeper1 = new HouseKeeper(3, "sarah", ["kitchen", "bathroom"]);