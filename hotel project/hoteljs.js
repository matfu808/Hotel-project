function addMeone() {
  var input1 = document.getElementById("customer1").value;
  var lengthword1 = input1.length;
  var timeinput1 = document.getElementById("time1").value;
  var timelength1 = timeinput1.length;
  if (lockcheck1 === false) {
    if (lengthword1 === 0 || timelength1 === 0) {
      document.getElementById("full1").innerHTML =
        "Please put something in either the time box or input guest box";
    } else {
      document.getElementById("full1").innerHTML = "";
      if (document.getElementsByTagName("li").length < 4) {
        //need help with putting a space between the time and customer
        var newList1 = document.createElement("li");
        var guest1 = document.getElementById("customer1").value;
        var newText1 = document.createTextNode(guest1);
        var customertime1 = document.getElementById("time1").value;
        var newTexttime1 = document.createTextNode(customertime1);
        newList1.appendChild(newText1); //appends user name
        newList1.appendChild(document.createElement("br"));
        newList1.appendChild(newTexttime1); //appends user time
        document.getElementById("olid1").appendChild(newList1);
      } else {
        document.getElementById("full1").innerHTML = "list is full";
      }
    }
  } else {
  }
}

function removeStuffone() {
  if (lockcheck1 === false) {
    var personNum1 = document.getElementById("removecustomer1").value;
    var list1 = document.getElementById("olid1");
    var child1 = document.getElementsByTagName("li")[personNum1 - 1];
    list1.removeChild(child1);
    document.getElementById("full1").innerHTML = "List is not full";
  } else {
  }
}
var lockcheck1 = false;
function lockone() {
  if (lockcheck1 === false) {
    lockcheck1 = true;
    document.getElementById("roomlockunlock1").innerHTML = "room is locked";
  } else {
    lockcheck1 = false;
    document.getElementById("roomlockunlock1").innerHTML = "room is unlocked";
  }
}

function deleteeverythingone() {
  var deleteeerything1 = document.getElementsById(olid1);
  deleteeerything1.innerHTML = "";
}

//_______________________________________________________________________________________________________
//_________________________________________________________________________________________________________
function addMetwo() {
  var input2 = document.getElementById("customer2").value;
  var lengthword2 = input2.length;
  var timeinput2 = document.getElementById("time2").value;
  var timelength2 = timeinput2.length;
  if (lockcheck2 === false) {
    if (lengthword2 === 0 || timelength2 === 0) {
      document.getElementById("full2").innerHTML =
        "Please put something in either the time box or input guest box";
    } else {
      document.getElementById("full2").innerHTML = "";
      if (document.getElementsByTagName("li").length < 4) {
        //need help with putting a space between the time and customer
        var newList2 = document.createElement("li");
        var guest2 = document.getElementById("customer2").value;
        var newText2 = document.createTextNode(guest2);
        var customertime2 = document.getElementById("time2").value;
        var newTexttime2 = document.createTextNode(customertime2);
        newList2.appendChild(newText2); //appends user name
        newList2.appendChild(document.createElement("br"));
        newList2.appendChild(newTexttime2); //appends user time
        document.getElementById("olid2").appendChild(newList2);
      } else {
        document.getElementById("full2").innerHTML = "list is full";
      }
    }
  } else {
  }
}

function removeStufftwo() {
  if (lockcheck2 === false) {
    var personNum2 = document.getElementById("removecustomer2").value;
    var list2 = document.getElementById("olid2");
    var child2 = document.getElementsByTagName("li")[personNum2 - 1];
    list2.removeChild(child2);
    document.getElementById("full2").innerHTML = "List is not full";
  } else {
  }
}
var lockcheck2 = false;
function locktwo() {
  if (lockcheck2 === false) {
    lockcheck2 = true;
    document.getElementById("roomlockunlock2").innerHTML = "room is locked";
  } else {
    lockcheck2 = false;
    document.getElementById("roomlockunlock2").innerHTML = "room is unlocked";
  }
}

function deleteeverythingone() {
  var deleteeerything2 = document.getElementsById(olid2);
  deleteeerything2.innerHTML = "";
}
