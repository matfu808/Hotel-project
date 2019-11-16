function addMeone() {
  var input1 = document.getElementById("customer1").value;
  var lengthword1 = input1.length;
  var timeinput1 = document.getElementById("time1").value;
  var timelength1 = timeinput1.length;
  var orderlistforone = document
    .getElementById("olid1")
    .getElementsByTagName("li").length;
  if (lockcheck1 === false) {
    if (lengthword1 === 0 || timelength1 === 0) {
      document.getElementById("full1").innerHTML =
        "Please put something in either the time box or input guest box";
    } else {
      document.getElementById("full1").innerHTML = "";
      if (orderlistforone < 4) {
        var newList1 = document.createElement("li");
        var guest1 = document.getElementById("customer1").value;
        var newText1 = document.createTextNode(guest1);
        var customertime1 = document.getElementById("time1").value;
        var newTexttime1 = document.createTextNode(customertime1);
        newList1.appendChild(newText1); //appends user name
        newList1.appendChild(document.createElement("br"));
        newList1.appendChild(newTexttime1); //appends user time
        document.getElementById("olid1").appendChild(newList1);
        //add all guest
        var guestroom1number2 = document.getElementById("customer1").value;
        var oldText1 = document.createTextNode(guestroom1number2);
        var guestroom1time2 = document.getElementById("time1").value;
        var oldTexttime1 = document.createTextNode(guestroom1time2);
        var twonewList1 = document.createElement("li");
        twonewList1.appendChild(oldText1); //appends user name
        twonewList1.appendChild(document.createElement("br"));
        twonewList1.appendChild(oldTexttime1); //appends user time
        document.getElementById("allguests").appendChild(twonewList1);

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
  var emptyolone = document.getElementById("olid1");
  emptyolone.innerHTML = "";
}

//_______________________________________________________________________________________________________
//_________________________________________________________________________________________________________

function addMetwo() {
  var input2 = document.getElementById("customer2").value;
  var lengthword2 = input2.length;
  var timeinput2 = document.getElementById("time2").value;
  var timelength2 = timeinput2.length;
  var orderlistfortwo = document
    .getElementById("olid2")
    .getElementsByTagName("li").length;
  if (lockcheck2 === false) {
    if (lengthword2 === 0 || timelength2 === 0) {
      document.getElementById("full2").innerHTML =
        "Please put something in either the time box or input guest box";
    } else {
      document.getElementById("full2").innerHTML = "";
      if (orderlistfortwo < 4) {
        var newList2 = document.createElement("li");
        var guest2 = document.getElementById("customer2").value;
        var newText2 = document.createTextNode(guest2);
        var customertime2 = document.getElementById("time2").value;
        var newTexttime2 = document.createTextNode(customertime2);
        newList2.appendChild(newText2); //appends user name
        newList2.appendChild(document.createElement("br"));
        newList2.appendChild(newTexttime2); //appends user time
        document.getElementById("olid2").appendChild(newList2);
        //add all guest
        var guestroom2number2 = document.getElementById("customer2").value;
        var oldText2 = document.createTextNode(guestroom2number2);
        var guestroom2time2 = document.getElementById("time2").value;
        var oldTexttime2 = document.createTextNode(guestroom2time2);
        var twonewList2 = document.createElement("li");
        twonewList2.appendChild(oldText2); //appends user name
        twonewList2.appendChild(document.createElement("br"));
        twonewList2.appendChild(oldTexttime2); //appends user time
        document.getElementById("allguests").appendChild(twonewList2);

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
function deleteeverythingtwo() {
  var emptyoltwo = document.getElementById("olid2");
  emptyoltwo.innerHTML = "";
}
