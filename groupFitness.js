var ogBody = document.getElementsByTagName('body')[0].innerHTML; 
var reset = 0;
function inputSubmit(){
    document.head.innerHTML = "<link rel=\"stylesheet\" type=\"text/css\" href=\"groupFitness.css\">"                            
	reset = 1;
	var monday = [];
	for (i=0; i < 5; i++){
		var meal = document.getElementById(i).value;
		monday.push(meal);
	}
	var tuesday = [];
	for (i=5; i < 10; i++){
		var meal = document.getElementById(i).value;
		tuesday.push(meal);
	}
	var wednesday = [];
	for (i=10; i < 15; i++){
		var meal = document.getElementById(i).value;
		wednesday.push(meal);
	}
	var thursday = [];
	for (i=15; i < 20; i++){
		var meal = document.getElementById(i).value;
		thursday.push(meal);
	}
	var friday = [];
	for (i=20; i < 25; i++){
		var meal = document.getElementById(i).value;
		friday.push(meal);
	}
	var saturday = [];
	for (i=25; i < 30; i++){
		var meal = document.getElementById(i).value;
		saturday.push(meal);
	}
	var sunday = [];
	for (i=30; i < 35; i++){
		var meal = document.getElementById(i).value;
		sunday.push(meal);
	}
    
    var weekdayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", 
                        "Friday", "Saturday", "Sunday"];
    var weekdaySchedules = [monday, tuesday, wednesday, thursday,
                            friday, saturday, sunday];
    var mealnames = ["Breakfast", "Snack 1", "Lunch", "Snack 2", "Dinner"];
    document.body.innerHTML = "";
    // creating an unordered list of weekdays
    document.write("<p id=\"buttons\">");
    document.write("<button onclick=\"textclear()\">Reset</button>"); 
    document.write("<button onclick=\"_print()\">Print</button>");
    document.write("</p>");
    document.write("<table id=\"table1\" class = \"style-table\">");
    document.write("<ul>");
    document.write("<tr>");
    document.write("<td>");
    for(i=0; i < weekdayNames.length; i++){
        document.write("<p><li><b>" + weekdayNames[i] + "</b>");
        
        // creating an inner unordered list of meals
        document.write("<ul>");
        for (j=0; j < mealnames.length; j++){
            if (weekdaySchedules[i][j] != ""){ // ignoring empty meal values
                document.write("<li>");
                document.write(mealnames[j] + ": " + weekdaySchedules[i][j]);
                document.write("</li>");
            }
        }
        document.write("</ul>");
        document.write("</li></p>");
    }
    document.write("</td>");
    document.write("</tr>");
    document.write("</ul>");
    document.write("</table>");
    document.head.innerHTML = "<link rel=\"stylesheet\" type=\"text/css\" href=\"groupFitness.css\">"                            

}

function textclear(){
    if (reset == 0){
    	for (i=0; i<35; i++){
        document.getElementById(i).value = "";
    	}
    } if (reset == 1){
    	document.body.innerHTML = ogBody;
    }
}

function _print(){
    // toggle button visibility when printing
    var buttons = document.getElementById("buttons");
    buttons.style.display = "none";
    window.print();
    buttons.style.display = "block";
}
