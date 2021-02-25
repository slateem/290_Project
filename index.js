//I am using wheat we learned in week 4 about higher order functions 
//I am pass comparison functions into the sort function (using the one I made in week 4)
//And then I will add an event listener so the user can click a button to call the sort function.
function foodItem(name, cost, calories) {
    this.name = name;
    this.cost = cost; 
    this.calories = calories; 
  }
  
  var foodItems = [
    new foodItem("Apple", .59, 100),
    new foodItem("Pumpkin", 1.99, 500),
    new foodItem("Corn", .75, 199),
    new foodItem("Egg", .10, 35),
    new foodItem("Squash", 2.35, 350),
  ];


  //I am reusing my sort function i made for HW3
  function sortArr(comparator, array) {

    for (let i = 0; i < (array.length - 1); i++) {
        for (let j = 0; j < (array.length - 1); j++){
            
            if (comparator(array[j], array[j + 1])) {
                let tempVariable = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tempVariable;
            }    
        }
    }
    return array;
  }
  

  function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
  }

  function priceSorter(item1, item2) {
    if (item1.cost < item2.cost){
        return true;
    } else {
        return false;
    }
  }

  function calSorter(item1, item2) {
    if (item1.calories < item2.calories){
        return true;
    } else {
        return false;
    }
  }

  
  function printOutArray (passedArray, clubAffiliationBool) {
    let z = 0
    for (z = 0; z < passedArray.length; z++){
        firstComparison[z].logMe(clubAffiliationBool);
    }
}


var eventListener1 = document.getElementById("sortFoodButton");


if (eventListener1) {


    document.getElementById("sortFoodButton").addEventListener('click', function(event){

        var stringToReturn = "";

        let priceSortedArray = sortArr(priceSorter, foodItems);
      

        for (z = 0; z < priceSortedArray.length; z++){
            stringToReturn = stringToReturn + priceSortedArray[z].name + " " + priceSortedArray[z].cost + ",";
        }

        document.getElementById('sortedFoodOutput').textContent = stringToReturn;
            
 
});

};


var eventListener2 = document.getElementById("sortFoodByCals");

console.log(eventListener2);
if(eventListener2){

    document.getElementById("sortFoodByCals").addEventListener('click', function(event){

        var caloriesString = "";

        let caloriesSortedArray = sortArr(calSorter, foodItems);
    

        for (z = 0; z < caloriesSortedArray.length; z++){
            caloriesString = caloriesString + caloriesSortedArray[z].name + " " + caloriesSortedArray[z].calories + ",";
        }

        document.getElementById('sortFoodByCalsOutput').textContent = caloriesString;
            

    });

}

//In week 6 we learned about API calls. I am going to make an API call to openweather.org.
//This function will get the tempurature at a specific zip code.
//If the tempurature is below 50 degree, it will tell the user to wear a jacket. 
var eventListener3 = document.getElementById("submitLocation");
console.log(eventListener3);
if (eventListener3){
    document.getElementById("submitLocation").addEventListener('click', function(event){

        var req = new XMLHttpRequest();
        var webLink = "http://api.openweathermap.org/data/2.5/weather?q=17036,us&appid=28871c3494e577a7cdd77e20b45f27ac";
    
        req.open("GET", webLink, false);
        req.send(null);
        var response = JSON.parse(req.responseText);
        console.log(response);

        //get variables for output
        var temp = 1.8 * (response.main.temp - 273) + 32;

        //output the results to the HTML file
            if (temp < 50){
                document.getElementById('weatherOutput').textContent = " The tempurature is " + temp.toFixed(2) + " degrees, you should wear a jacket!!!!";
            }
            else {
                document.getElementById('weatherOutput').textContent = " The tempurature is " + temp.toFixed(2) + " degrees, you probably dont need a jacket :)";
            }
    
    });
    
}