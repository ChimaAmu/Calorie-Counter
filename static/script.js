const add_b = document.getElementById("add_b");
const add_l = document.getElementById("add_l");
const add_d = document.getElementById("add_d");
const add_s = document.getElementById("add_s");

function eraseText() {
	document.getElementById("food_b").value = "";
}

add_b.onclick = function() {
	var node = document.createElement("Li");
	var text = document.getElementById("food_b").value;
	var textnode = document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById("list_b").appendChild(node);
};

add_l.onclick = function() {
	var node = document.createElement("Li");
	var text = document.getElementById("food_l").value;
	var textnode = document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById("list_l").appendChild(node);
};

add_d.onclick = function() {
	var node = document.createElement("Li");
	var text = document.getElementById("food_d").value;
	var textnode = document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById("list_d").appendChild(node);
};

add_s.onclick = function() {
	var node = document.createElement("Li");
	var text = document.getElementById("food_s").value;
	var textnode = document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById("list_s").appendChild(node);
};

function removeValue(target) {
	if (target.tagName === "LI") {
		target.remove();
	}
};

document.getElementById(
	"list_b").addEventListener(
	"click", function (event) {
	removeValue(event.target);
	});
document.getElementById(
	"list_l").addEventListener(
	"click", function (event) {
	removeValue(event.target);
	});
document.getElementById(
	"list_d").addEventListener(
	"click", function (event) {
	removeValue(event.target);
	});
document.getElementById(
	"list_s").addEventListener(
	"click", function (event) {
	removeValue(event.target);
	});
