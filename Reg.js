
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var n =1;
var x=0;

function Pass() {

	var add = document.getElementById('show');
	var newcitizen = add.insertRow(n);

	list1[x] = document.getElementById("uname").value;
	list2[x] = document.getElementById("email").value;
	list3[x] = document.getElementById("phnno").value;
	list4[x] = document.getElementById("txtara").value;
	list5[x] = document.getElementById("gen").value;

	var cel1 = newcitizen.insertCell(0);
	var cel2 = newcitizen.insertCell(1);
	var cel3 = newcitizen.insertCell(2);
	var cel4 = newcitizen.insertCell(3);
	var cel5 = newcitizen.insertCell(4);

	cel1.innerHTML = list1[x];
	cel2.innerHTML = list2[x];
	cel3.innerHTML = list3[x];
	cel4.innerHTML = list4[x];
	cel5.innerHTML = list5[x];

	n++;
	x++;
}
