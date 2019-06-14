// add a table to the body
var table = document.createElement("table");
var curEle = document.getElementById("theBody");
curEle.appendChild(table);

// add thead and tbody to table
curEle = curEle.firstElementChild;
curEle = curEle.nextElementSibling;
//console.log(curEle);
var thead = document.createElement("thead");
curEle.appendChild(thead);
var tbody = document.createElement("tbody");
curEle.appendChild(tbody);

//create head of table
curEle = curEle.firstElementChild;
var tr = document.createElement("tr");
curEle.appendChild(tr);
curEle = curEle.firstElementChild;
for (var i = 0; i < 4; i++){
	var headCell = document.createElement("th");
	headCell.style.textAlign = "center";
	headCell.innerHTML = ("Header " + (i+1));
	curEle.appendChild(headCell);
}

// create the table body cells
for (i = 0; i < 3; i++){
	curEle = document.createElement("tr")
	tbody.appendChild(curEle);
}
var trs = tbody.children
for (i = 0; i < trs.length; i++){
	for (var j = 0; j < 4; j++){
		curEle = document.createElement("td");
		curEle.style.textAlign = "center";
		curEle.style.border = "1px solid black";
		curEle.innerHTML = ((j+1) + ", " + (i+1));
		trs[i].appendChild(curEle);
	}
}


//var tCell = tbody.rows[1].cells[1];
//console.log(tCell.innerHTML);
//tCell.style.border = "thick solid red";

// init selected cell
var row = 0,
	col = 0;
makeCellRed();

// create buttons
curEle = document.getElementById("theBody");
var uButton = document.createElement("button");
uButton.innerHTML = "Up";
uButton.addEventListener("click", checkUp);

var dButton = document.createElement("button");
dButton.innerHTML = "Down";
dButton.addEventListener("click", checkDown);

var lButton = document.createElement("button");
lButton.innerHTML = "Left";
lButton.addEventListener("click", checkLeft);

var rButton = document.createElement("button");
rButton.innerHTML = "Right";
rButton.addEventListener("click", checkRight);

var mButton = document.createElement("button");
mButton.innerHTML = "Mark Cell";
mButton.addEventListener("click", markCell);

var br = document.createElement("br");

// add them to the body
curEle.appendChild(uButton);
curEle.appendChild(dButton);
curEle.appendChild(lButton);
curEle.appendChild(rButton);
curEle.appendChild(br);
curEle.appendChild(mButton);



// button functions
function checkUp(){
	if (row > 0){
		makeCellPlain();
		row--;
		makeCellRed();
	}
}

function checkDown(){
	if (row < 2){
		makeCellPlain();
		row++;
		makeCellRed();
	}
}

function checkLeft(){
	if (col > 0){
		makeCellPlain();
		col--;
		makeCellRed();
	}
}

function checkRight(){
	if (col < 3){
		makeCellPlain();
		col++;
		makeCellRed();
	}
}

function markCell(){
	var currentCell = tbody.rows[row].cells[col];
	currentCell.style.backgroundColor = "yellow";
}

function makeCellPlain(){
	currentCell = tbody.rows[row].cells[col];
	currentCell.style.border = "1px solid black";
}

function makeCellRed(){
	currentCell = tbody.rows[row].cells[col];
	currentCell.style.border = "thick solid red";
}