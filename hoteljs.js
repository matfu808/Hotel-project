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
        newList1.setAttribute("class", "li1");
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
    document.getElementById("full1").innerHTML = "";
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
        newList2.setAttribute("class", "li2");
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
    document.getElementById("full2").innerHTML = "";
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

//--------------------------------------------------
//---------------------------------------------------

function addMethree() {
  var input3 = document.getElementById("customer3").value;
  var lengthword3 = input3.length;
  var timeinput3 = document.getElementById("time3").value;
  var timelength3 = timeinput3.length;
  var orderlistforthree = document
    .getElementById("olid3")
    .getElementsByTagName("li").length;
  if (lockcheck3 === false) {
    if (lengthword3 === 0 || timelength3 === 0) {
      document.getElementById("full3").innerHTML =
        "Please put something in either the time box or input guest box";
    } else {
      document.getElementById("full3").innerHTML = "";
      if (orderlistforthree < 4) {
        var newList3 = document.createElement("li");
        newList3.setAttribute("class", "li3");
        var guest3 = document.getElementById("customer3").value;
        var newText3 = document.createTextNode(guest3);
        var customertime3 = document.getElementById("time3").value;
        var newTexttime3 = document.createTextNode(customertime3);
        newList3.appendChild(newText3); //appends user name
        newList3.appendChild(document.createElement("br"));
        newList3.appendChild(newTexttime3); //appends user time
        document.getElementById("olid3").appendChild(newList3);
        //add all guest
        var guestroom3number2 = document.getElementById("customer3").value;
        var oldText3 = document.createTextNode(guestroom3number2);
        var guestroom3time2 = document.getElementById("time3").value;
        var oldTexttime3 = document.createTextNode(guestroom3time2);
        var twonewList3 = document.createElement("li");
        twonewList3.appendChild(oldText3); //appends user name
        twonewList3.appendChild(document.createElement("br"));
        twonewList3.appendChild(oldTexttime3); //appends user time
        document.getElementById("allguests").appendChild(twonewList3);
      } else {
        document.getElementById("full3").innerHTML = "list is full";
      }
    }
  } else {
  }
}

function removeStuffthree() {
  if (lockcheck3 === false) {
    var personNum3 = document.getElementById("removecustomer3").value;
    var list3 = document.getElementById("olid3");
    var child3 = document.getElementsByTagName("li")[personNum3 - 1];
    list3.removeChild(child3);
    document.getElementById("full3").innerHTML = "";
  } else {
  }
}
var lockcheck3 = false;
function lockthree() {
  if (lockcheck3 === false) {
    lockcheck3 = true;
    document.getElementById("roomlockunlock3").innerHTML = "room is locked";
  } else {
    lockcheck3 = false;
    document.getElementById("roomlockunlock3").innerHTML = "room is unlocked";
  }
}
function deleteeverythingthree() {
  var emptyolthree = document.getElementById("olid3");
  emptyolthree.innerHTML = "";
}

//--------------------------------------------------
//---------------------------------------------------

function addMefour() {
  var input4 = document.getElementById("customer4").value;
  var lengthword4 = input4.length;
  var timeinput4 = document.getElementById("time4").value;
  var timelength4 = timeinput4.length;
  var orderlistforfour = document
    .getElementById("olid4")
    .getElementsByTagName("li").length;
  if (lockcheck4 === false) {
    if (lengthword4 === 0 || timelength4 === 0) {
      document.getElementById("full4").innerHTML =
        "Please put something in either the time box or input guest box";
    } else {
      document.getElementById("full4").innerHTML = "";
      if (orderlistforfour < 4) {
        var newList4 = document.createElement("li");
        newList4.setAttribute("class", "li4");
        var guest4 = document.getElementById("customer4").value;
        var newText4 = document.createTextNode(guest4);
        var customertime4 = document.getElementById("time4").value;
        var newTexttime4 = document.createTextNode(customertime4);
        newList4.appendChild(newText4); //appends user name
        newList4.appendChild(document.createElement("br"));
        newList4.appendChild(newTexttime4); //appends user time
        document.getElementById("olid4").appendChild(newList4);
        //add all guest
        var guestroom4number2 = document.getElementById("customer4").value;
        var oldText4 = document.createTextNode(guestroom4number2);
        var guestroom4time2 = document.getElementById("time4").value;
        var oldTexttime4 = document.createTextNode(guestroom4time2);
        var twonewList4 = document.createElement("li");
        twonewList4.appendChild(oldText4); //appends user name
        twonewList4.appendChild(document.createElement("br"));
        twonewList4.appendChild(oldTexttime4); //appends user time
        document.getElementById("allguests").appendChild(twonewList4);
      } else {
        document.getElementById("full4").innerHTML = "list is full";
      }
    }
  } else {
  }
}

function removeStufffour() {
  if (lockcheck4 === false) {
    var personNum4 = document.getElementById("removecustomer4").value;
    var list4 = document.getElementById("olid4");
    var child4 = document.getElementsByTagName("li")[personNum4 - 1];
    list4.removeChild(child4);
    document.getElementById("full4").innerHTML = "";
  } else {
  }
}
var lockcheck4 = false;
function lockfour() {
  if (lockcheck4 === false) {
    lockcheck4 = true;
    document.getElementById("roomlockunlock4").innerHTML = "room is locked";
  } else {
    lockcheck4 = false;
    document.getElementById("roomlockunlock4").innerHTML = "room is unlocked";
  }
}
function deleteeverythingfour() {
  var emptyolfour = document.getElementById("olid4");
  emptyolfour.innerHTML = "";
}

//------------------------------------------------
//------------------------------------

function addMefive() {
  var input5 = document.getElementById("customer5").value;
  var lengthword5 = input5.length;
  var timeinput5 = document.getElementById("time5").value;
  var timelength5 = timeinput5.length;
  var orderlistforfive = document
    .getElementById("olid5")
    .getElementsByTagName("li").length;
  if (lockcheck5 === false) {
    if (lengthword5 === 0 || timelength5 === 0) {
      document.getElementById("full5").innerHTML =
        "Please put something in either the time box or input guest box";
    } else {
      document.getElementById("full5").innerHTML = "";
      if (orderlistforfive < 4) {
        var newList5 = document.createElement("li");
        newList5.setAttribute("class", "li5");
        var guest5 = document.getElementById("customer5").value;
        var newText5 = document.createTextNode(guest5);
        var customertime5 = document.getElementById("time5").value;
        var newTexttime5 = document.createTextNode(customertime5);
        newList5.appendChild(newText5); //appends user name
        newList5.appendChild(document.createElement("br"));
        newList5.appendChild(newTexttime5); //appends user time
        document.getElementById("olid5").appendChild(newList5);
        //add all guest
        var guestroom5number2 = document.getElementById("customer5").value;
        var oldText5 = document.createTextNode(guestroom5number2);
        var guestroom5time2 = document.getElementById("time5").value;
        var oldTexttime5 = document.createTextNode(guestroom5time2);
        var twonewList5 = document.createElement("li");
        twonewList5.appendChild(oldText5); //appends user name
        twonewList5.appendChild(document.createElement("br"));
        twonewList5.appendChild(oldTexttime5); //appends user time
        document.getElementById("allguests").appendChild(twonewList5);
      } else {
        document.getElementById("full5").innerHTML = "list is full";
      }
    }
  } else {
  }
}

function removeStufffive() {
  if (lockcheck5 === false) {
    var personNum5 = document.getElementById("removecustomer5").value;
    var list5 = document.getElementById("olid5");
    var child5 = document.getElementsByTagName("li")[personNum5 - 1];
    list5.removeChild(child5);
    document.getElementById("full5").innerHTML = "";
  } else {
  }
}
var lockcheck5 = false;
function lockfive() {
  if (lockcheck5 === false) {
    lockcheck5 = true;
    document.getElementById("roomlockunlock5").innerHTML = "room is locked";
  } else {
    lockcheck5 = false;
    document.getElementById("roomlockunlock5").innerHTML = "room is unlocked";
  }
}
function deleteeverythingfive() {
  var emptyolfive = document.getElementById("olid5");
  emptyolfive.innerHTML = "";
}

//------------------------------------------------
//------------------------------------

function addMesix() {
  var input6 = document.getElementById("customer6").value;
  var lengthword6 = input6.length;
  var timeinput6 = document.getElementById("time6").value;
  var timelength6 = timeinput6.length;
  var orderlistforsix = document
    .getElementById("olid6")
    .getElementsByTagName("li").length;
  if (lockcheck6 === false) {
    if (lengthword6 === 0 || timelength6 === 0) {
      document.getElementById("full6").innerHTML =
        "Please put something in either the time box or input guest box";
    } else {
      document.getElementById("full6").innerHTML = "";
      if (orderlistforsix < 4) {
        var newList6 = document.createElement("li");
        newList6.setAttribute("class", "li5");
        var guest6 = document.getElementById("customer6").value;
        var newText6 = document.createTextNode(guest6);
        var customertime6 = document.getElementById("time6").value;
        var newTexttime6 = document.createTextNode(customertime6);
        newList6.appendChild(newText6); //appends user name
        newList6.appendChild(document.createElement("br"));
        newList6.appendChild(newTexttime6); //appends user time
        document.getElementById("olid6").appendChild(newList6);
        //add all guest
        var guestroom6number2 = document.getElementById("customer6").value;
        var oldText6 = document.createTextNode(guestroom6number2);
        var guestroom6time2 = document.getElementById("time6").value;
        var oldTexttime6 = document.createTextNode(guestroom6time2);
        var twonewList6 = document.createElement("li");
        twonewList6.appendChild(oldText6); //appends user name
        twonewList6.appendChild(document.createElement("br"));
        twonewList6.appendChild(oldTexttime6); //appends user time
        document.getElementById("allguests").appendChild(twonewList6);
      } else {
        document.getElementById("full6").innerHTML = "list is full";
      }
    }
  } else {
  }
}

function removeStuffsix() {
  if (lockcheck6 === false) {
    var personNum6 = document.getElementById("removecustomer6").value;
    var list6 = document.getElementById("olid6");
    var child6 = document.getElementsByTagName("li")[personNum6 - 1];
    list6.removeChild(child6);
    document.getElementById("full6").innerHTML = "";
  } else {
  }
}
var lockcheck6 = false;
function locksix() {
  if (lockcheck6 === false) {
    lockcheck6 = true;
    document.getElementById("roomlockunlock6").innerHTML = "room is locked";
  } else {
    lockcheck6 = false;
    document.getElementById("roomlockunlock6").innerHTML = "room is unlocked";
  }
}
function deleteeverythingsix() {
  var emptyolsix = document.getElementById("olid6");
  emptyolsix.innerHTML = "";
}