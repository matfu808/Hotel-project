var input10 = document.getElementById("customer1"); //input box id
input10.addEventListener("keyup", function(event1) {
  if (event1.keyCode === 13) {
    addMeone();
  }
});
var input20 = document.getElementById("customer2");
input20.addEventListener("keyup", function(event2) {
  if (event2.keyCode === 13) {
    addMetwo();
  }
});
var input30 = document.getElementById("customer3");
input30.addEventListener("keyup", function(event3) {
  if (event3.keyCode === 13) {
    addMethree();
  }
});
var input40 = document.getElementById("customer4");
input40.addEventListener("keyup", function(event4) {
  if (event4.keyCode === 13) {
    addMefour();
  }
});
var input50 = document.getElementById("customer5");
input50.addEventListener("keyup", function(event5) {
  if (event5.keyCode === 13) {
    addMefive();
  }
});
var input60 = document.getElementById("customer6");
input60.addEventListener("keyup", function(event6) {
  if (event6.keyCode === 13) {
    addMesix();
  }
});
//
//
//
var allroom = [];
//
//
function addMeone() {
  //
  //
  //
  var oneroomstorage = document.getElementById("customer1").value; // input value

  allroom.push(oneroomstorage); //pushes var above to array allroom
  var allroomstorage = JSON.stringify(allroom); //makes allroom a string

  localStorage.setItem("guests", allroomstorage); //sets local storage
  //
  //
  //
  //
  var input1 = document.getElementById("customer1").value;
  var lengthword1 = input1.length;
  var orderlistforone = document
    .getElementById("olid1")
    .getElementsByTagName("li").length;
  if (lockcheck1 === false) {
    if (lengthword1 === 0) {
      document.getElementById("tryagain1").innerHTML =
        "Please put something in the input guest box";
    } else {
      document.getElementById("tryagain1").innerHTML = "";
      if (orderlistforone < 4) {
        var newList1 = document.createElement("li");
        newList1.setAttribute("class", "li1");
        var guest1 = document.getElementById("customer1").value;
        var newText1 = document.createTextNode(guest1);

        var customertime1 = new Date();
        var minutes = customertime1.getMinutes();
        if (customertime1.getMinutes().length < 2) {
          minutes = "0" + customertime1.getMinutes();
        }
        customertime1 =
          customertime1.getMonth() +
          "/" +
          customertime1.getDate() +
          "/" +
          customertime1.getFullYear() +
          "  " +
          customertime1.getHours() +
          ":" +
          minutes;

        var newTexttime1 = document.createTextNode(customertime1);
        newList1.appendChild(newText1); //appends user name
        newList1.appendChild(document.createElement("br"));
        newList1.appendChild(newTexttime1); //appends user time
        document.getElementById("olid1").appendChild(newList1);
        //add all guest
        var guestroom1number2 = document.getElementById("customer1").value;
        var oldText1 = document.createTextNode(guestroom1number2);
        var guestroom1time2 = new Date();
        var minutes = guestroom1time2.getMinutes();
        if (guestroom1time2.getMinutes().length < 2) {
          minutes = "0" + guestroom1time2.getMinutes();
        }
        guestroom1time2 =
          guestroom1time2.getMonth() +
          "/" +
          guestroom1time2.getDate() +
          "/" +
          guestroom1time2.getFullYear() +
          "  " +
          guestroom1time2.getHours() +
          ":" +
          minutes;

        var oldTexttime1 = document.createTextNode(guestroom1time2);
        var twonewList1 = document.createElement("p");
        twonewList1.appendChild(oldText1); //appends user name
        twonewList1.appendChild(document.createElement("br"));
        twonewList1.appendChild(oldTexttime1); //appends user time
        document.getElementById("allguests").appendChild(twonewList1);
        document.getElementById("customer1").value = "";

        newList1.onclick = function() {
          this.parentElement.removeChild(this);
        };
      }
    }
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
    document.getElementById("roomlockunlock1").innerHTML = "";
  }
}
function deleteeverythingone() {
  var emptyolone = document.getElementById("olid1");
  emptyolone.innerHTML = "";
}

//_______________________________________________________________________________________________________
//_________________________________________________________________________________________________________

function addMetwo() {
  //
  //
  //
  var oneroomstorage = document.getElementById("customer2").value; // input value

  allroom.push(oneroomstorage); //pushes var above to array allroom
  var allroomstorage = JSON.stringify(allroom); //makes allroom a string

  localStorage.setItem("guests", allroomstorage); //sets local storage
  //
  //
  //
  //
  var input2 = document.getElementById("customer2").value;
  var lengthword2 = input2.length;
  var orderlistfortwo = document
    .getElementById("olid2")
    .getElementsByTagName("li").length;
  if (lockcheck2 === false) {
    if (lengthword2 === 0) {
      document.getElementById("tryagain2").innerHTML =
        "Please put something in the input guest box";
    } else {
      document.getElementById("tryagain2").innerHTML = "";
      if (orderlistfortwo < 4) {
        var newList2 = document.createElement("li");
        newList2.setAttribute("class", "li2");
        var guest2 = document.getElementById("customer2").value;
        var newText2 = document.createTextNode(guest2);
        var customertime2 = new Date();
        var minutes = customertime2.getMinutes();
        if (customertime2.getMinutes().length < 2) {
          minutes = "0" + customertime2.getMinutes();
        }
        customertime2 =
          customertime2.getMonth() +
          "/" +
          customertime2.getDate() +
          "/" +
          customertime2.getFullYear() +
          "  " +
          customertime2.getHours() +
          ":" +
          minutes;

        var newTexttime2 = document.createTextNode(customertime2);
        newList2.appendChild(newText2); //appends user name
        newList2.appendChild(document.createElement("br"));
        newList2.appendChild(newTexttime2); //appends user time
        document.getElementById("olid2").appendChild(newList2);
        //add all guest
        var guestroom2number2 = document.getElementById("customer2").value;
        var oldText2 = document.createTextNode(guestroom2number2);
        var guestroom2time2 = new Date();
        var minutes = guestroom2time2.getMinutes();
        if (guestroom2time2.getMinutes().length < 2) {
          minutes = "0" + guestroom2time2.getMinutes();
        }
        guestroom2time2 =
          guestroom2time2.getMonth() +
          "/" +
          guestroom2time2.getDate() +
          "/" +
          guestroom2time2.getFullYear() +
          "  " +
          guestroom2time2.getHours() +
          ":" +
          minutes;

        var oldTexttime2 = document.createTextNode(guestroom2time2);
        var twonewList2 = document.createElement("p");
        twonewList2.appendChild(oldText2); //appends user name
        twonewList2.appendChild(document.createElement("br"));
        twonewList2.appendChild(oldTexttime2); //appends user time
        document.getElementById("allguests").appendChild(twonewList2);
        document.getElementById("customer2").value = "";
        newList2.onclick = function() {
          this.parentElement.removeChild(this);
        };
      }
    }
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
    document.getElementById("roomlockunlock2").innerHTML = "";
  }
}
function deleteeverythingtwo() {
  var emptyoltwo = document.getElementById("olid2");
  emptyoltwo.innerHTML = "";
}

//_______________________________________________________________________________________________________
//_________________________________________________________________________________________________________
function addMethree() {
  //
  //
  //
  var oneroomstorage = document.getElementById("customer3").value; // input value

  allroom.push(oneroomstorage); //pushes var above to array allroom
  var allroomstorage = JSON.stringify(allroom); //makes allroom a string

  localStorage.setItem("guests", allroomstorage); //sets local storage
  //
  //
  //
  //
  var input3 = document.getElementById("customer3").value;
  var lengthword3 = input3.length;
  var orderlistforthree = document
    .getElementById("olid3")
    .getElementsByTagName("li").length;
  if (lockcheck3 === false) {
    if (lengthword3 === 0) {
      document.getElementById("tryagain3").innerHTML =
        "Please put something in the input guest box";
    } else {
      document.getElementById("tryagain3").innerHTML = "";
      if (orderlistforthree < 4) {
        var newList3 = document.createElement("li");
        newList3.setAttribute("class", "li3");
        var guest3 = document.getElementById("customer3").value;
        var newText3 = document.createTextNode(guest3);
        var customertime3 = new Date();
        var minutes = customertime3.getMinutes();
        if (customertime3.getMinutes().length < 2) {
          minutes = "0" + customertime3.getMinutes();
        }
        customertime3 =
          customertime3.getMonth() +
          "/" +
          customertime3.getDate() +
          "/" +
          customertime3.getFullYear() +
          "  " +
          customertime3.getHours() +
          ":" +
          minutes;

        var newTexttime3 = document.createTextNode(customertime3);
        newList3.appendChild(newText3); //appends user name
        newList3.appendChild(document.createElement("br"));
        newList3.appendChild(newTexttime3); //appends user time
        document.getElementById("olid3").appendChild(newList3);
        //add all guest
        var guestroom3number2 = document.getElementById("customer3").value;
        var oldText3 = document.createTextNode(guestroom3number2);
        var guestroom3time2 = new Date();
        var minutes = guestroom3time2.getMinutes();
        if (guestroom3time2.getMinutes().length < 2) {
          minutes = "0" + guestroom3time2.getMinutes();
        }
        guestroom3time2 =
          guestroom3time2.getMonth() +
          "/" +
          guestroom3time2.getDate() +
          "/" +
          guestroom3time2.getFullYear() +
          "  " +
          guestroom3time2.getHours() +
          ":" +
          minutes;

        var oldTexttime3 = document.createTextNode(guestroom3time2);
        var twonewList3 = document.createElement("p");
        twonewList3.appendChild(oldText3); //appends user name
        twonewList3.appendChild(document.createElement("br"));
        twonewList3.appendChild(oldTexttime3); //appends user time
        document.getElementById("allguests").appendChild(twonewList3);
        document.getElementById("customer3").value = "";
        newList3.onclick = function() {
          this.parentElement.removeChild(this);
        };
      }
    }
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
    document.getElementById("roomlockunlock3").innerHTML = "";
  }
}
function deleteeverythingthree() {
  var emptyolthree = document.getElementById("olid3");
  emptyolthree.innerHTML = "";
}

//_______________________________________________________________________________________________________
//_________________________________________________________________________________________________________
function addMefour() {
  //
  //
  //
  var oneroomstorage = document.getElementById("customer4").value; // input value

  allroom.push(oneroomstorage); //pushes var above to array allroom
  var allroomstorage = JSON.stringify(allroom); //makes allroom a string

  localStorage.setItem("guests", allroomstorage); //sets local storage
  //
  //
  //
  //
  var input4 = document.getElementById("customer4").value;
  var lengthword4 = input4.length;
  var orderlistforfour = document
    .getElementById("olid4")
    .getElementsByTagName("li").length;
  if (lockcheck4 === false) {
    if (lengthword4 === 0) {
      document.getElementById("tryagain4").innerHTML =
        "Please put something in the input guest box";
    } else {
      document.getElementById("tryagain4").innerHTML = "";
      if (orderlistforfour < 4) {
        var newList4 = document.createElement("li");
        newList4.setAttribute("class", "li4");
        var guest4 = document.getElementById("customer4").value;
        var newText4 = document.createTextNode(guest4);
        var customertime4 = new Date();
        var minutes = customertime4.getMinutes();
        if (customertime4.getMinutes().length < 2) {
          minutes = "0" + customertime4.getMinutes();
        }
        customertime4 =
          customertime4.getMonth() +
          "/" +
          customertime4.getDate() +
          "/" +
          customertime4.getFullYear() +
          "  " +
          customertime4.getHours() +
          ":" +
          minutes;

        var newTexttime4 = document.createTextNode(customertime4);
        newList4.appendChild(newText4); //appends user name
        newList4.appendChild(document.createElement("br"));
        newList4.appendChild(newTexttime4); //appends user time
        document.getElementById("olid4").appendChild(newList4);
        //add all guest
        var guestroom4number2 = document.getElementById("customer4").value;
        var oldText4 = document.createTextNode(guestroom4number2);
        var guestroom4time2 = new Date();
        var minutes = guestroom4time2.getMinutes();
        if (guestroom4time2.getMinutes().length < 2) {
          minutes = "0" + guestroom4time2.getMinutes();
        }
        guestroom4time2 =
          guestroom4time2.getMonth() +
          "/" +
          guestroom4time2.getDate() +
          "/" +
          guestroom4time2.getFullYear() +
          "  " +
          guestroom4time2.getHours() +
          ":" +
          minutes;

        var oldTexttime4 = document.createTextNode(guestroom4time2);
        var twonewList4 = document.createElement("p");
        twonewList4.appendChild(oldText4); //appends user name
        twonewList4.appendChild(document.createElement("br"));
        twonewList4.appendChild(oldTexttime4); //appends user time
        document.getElementById("allguests").appendChild(twonewList4);
        document.getElementById("customer4").value = "";
        newList4.onclick = function() {
          this.parentElement.removeChild(this);
        };
      }
    }
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
    document.getElementById("roomlockunlock4").innerHTML = "";
  }
}
function deleteeverythingfour() {
  var emptyolfour = document.getElementById("olid4");
  emptyolfour.innerHTML = "";
}

//_______________________________________________________________________________________________________
//_________________________________________________________________________________________________________
function addMefive() {
  //
  //
  //
  var oneroomstorage = document.getElementById("customer5").value; // input value

  allroom.push(oneroomstorage); //pushes var above to array allroom
  var allroomstorage = JSON.stringify(allroom); //makes allroom a string

  localStorage.setItem("guests", allroomstorage); //sets local storage
  //
  //
  //
  //
  var input5 = document.getElementById("customer5").value;
  var lengthword5 = input5.length;
  var orderlistforfive = document
    .getElementById("olid5")
    .getElementsByTagName("li").length;
  if (lockcheck5 === false) {
    if (lengthword5 === 0) {
      document.getElementById("tryagain5").innerHTML =
        "Please put something in the input guest box";
    } else {
      document.getElementById("tryagain5").innerHTML = "";
      if (orderlistforfive < 4) {
        var newList5 = document.createElement("li");
        newList5.setAttribute("class", "li5");
        var guest5 = document.getElementById("customer5").value;
        var newText5 = document.createTextNode(guest5);
        var customertime5 = new Date();
        var minutes = customertime5.getMinutes();
        if (customertime5.getMinutes().length < 2) {
          minutes = "0" + customertime5.getMinutes();
        }
        customertime5 =
          customertime5.getMonth() +
          "/" +
          customertime5.getDate() +
          "/" +
          customertime5.getFullYear() +
          "  " +
          customertime5.getHours() +
          ":" +
          minutes;

        var newTexttime5 = document.createTextNode(customertime5);
        newList5.appendChild(newText5); //appends user name
        newList5.appendChild(document.createElement("br"));
        newList5.appendChild(newTexttime5); //appends user time
        document.getElementById("olid5").appendChild(newList5);
        //add all guest
        var guestroom5number2 = document.getElementById("customer5").value;
        var oldText5 = document.createTextNode(guestroom5number2);
        var guestroom5time2 = new Date();
        var minutes = guestroom5time2.getMinutes();
        if (guestroom5time2.getMinutes().length < 2) {
          minutes = "0" + guestroom5time2.getMinutes();
        }
        guestroom5time2 =
          guestroom5time2.getMonth() +
          "/" +
          guestroom5time2.getDate() +
          "/" +
          guestroom5time2.getFullYear() +
          "  " +
          guestroom5time2.getHours() +
          ":" +
          minutes;

        var oldTexttime5 = document.createTextNode(guestroom5time2);
        var twonewList5 = document.createElement("p");
        twonewList5.appendChild(oldText5); //appends user name
        twonewList5.appendChild(document.createElement("br"));
        twonewList5.appendChild(oldTexttime5); //appends user time
        document.getElementById("allguests").appendChild(twonewList5);
        document.getElementById("customer5").value = "";
        newList5.onclick = function() {
          this.parentElement.removeChild(this);
        };
      }
    }
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
    document.getElementById("roomlockunlock5").innerHTML = "";
  }
}
function deleteeverythingfive() {
  var emptyolfive = document.getElementById("olid5");
  emptyolfive.innerHTML = "";
}

//_______________________________________________________________________________________________________
//_________________________________________________________________________________________________________

function addMesix() {
  //
  //
  //
  var oneroomstorage = document.getElementById("customer6").value; // input value

  allroom.push(oneroomstorage); //pushes var above to array allroom
  var allroomstorage = JSON.stringify(allroom); //makes allroom a string

  localStorage.setItem("guests", allroomstorage); //sets local storage
  //
  //
  //
  //
  var input6 = document.getElementById("customer6").value;
  var lengthword6 = input6.length;
  var orderlistforsix = document
    .getElementById("olid6")
    .getElementsByTagName("li").length;
  if (lockcheck6 === false) {
    if (lengthword6 === 0) {
      document.getElementById("tryagain6").innerHTML =
        "Please put something in the input guest box";
    } else {
      document.getElementById("tryagain6").innerHTML = "";
      if (orderlistforsix < 4) {
        var newList6 = document.createElement("li");
        newList6.setAttribute("class", "li1");
        var guest6 = document.getElementById("customer6").value;
        var newText6 = document.createTextNode(guest6);
        var customertime6 = new Date();
        var minutes = customertime6.getMinutes();
        if (customertime6.getMinutes().length < 2) {
          minutes = "0" + customertime6.getMinutes();
        }
        customertime6 =
          customertime6.getMonth() +
          "/" +
          customertime6.getDate() +
          "/" +
          customertime6.getFullYear() +
          "  " +
          customertime6.getHours() +
          ":" +
          minutes;

        var newTexttime6 = document.createTextNode(customertime6);
        newList6.appendChild(newText6); //appends user name
        newList6.appendChild(document.createElement("br"));
        newList6.appendChild(newTexttime6); //appends user time
        document.getElementById("olid6").appendChild(newList6);
        //add all guest
        var guestroom6number2 = document.getElementById("customer6").value;
        var oldText6 = document.createTextNode(guestroom6number2);
        var guestroom6time2 = new Date();
        var minutes = guestroom6time2.getMinutes();
        if (guestroom6time2.getMinutes().length < 2) {
          minutes = "0" + guestroom6time2.getMinutes();
        }
        guestroom6time2 =
          guestroom6time2.getMonth() +
          "/" +
          guestroom6time2.getDate() +
          "/" +
          guestroom6time2.getFullYear() +
          "  " +
          guestroom6time2.getHours() +
          ":" +
          minutes;

        var oldTexttime6 = document.createTextNode(guestroom6time2);
        var twonewList6 = document.createElement("p");
        twonewList6.appendChild(oldText6); //appends user name
        twonewList6.appendChild(document.createElement("br"));
        twonewList6.appendChild(oldTexttime6); //appends user time
        document.getElementById("allguests").appendChild(twonewList6);
        document.getElementById("customer6").value = "";
        newList6.onclick = function() {
          this.parentElement.removeChild(this);
        };
      }
    }
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
    document.getElementById("roomlockunlock6").innerHTML = "";
  }
}
function deleteeverythingsix() {
  var emptyolsix = document.getElementById("olid6");
  emptyolsix.innerHTML = "";
}

//_______________________________________________________________________________________________________
//_________________________________________________________________________________________________________

function seepagetwo() {
  location.href = "page2.html";
}

function seepageone() {
  location.href = "index.html";
}

//_____________button above
//

//function pageone() {
//var a = document.getElementById("username").value; //sets index input to equal var a
//localStorage.setItem("myname", a); //sets var to given key
//location.href = "page2.html"; //sends user to page 2
//}

////////////////////This is for pagetwo.html//////////////////////////
//function duh() {
//var b = localStorage.getItem("sixthcustomer"); //retrives var using key
//window.alert(b);
//var listpagetwo = document.createTextNode(b);
//var newlistpagetwo = document.createElement("p");
//newlistpagetwo.appendChild(listpagetwo); //appends user name
//document.getElementById("newlistpagetwo").appendChild(newlistpagetwo);
//}

//document.getElementById("result").innerHTML = localStorage.getItem("sixthcustomer");

var room = JSON.parse(localStorage.getItem("guests"));
for (var i = 0; i < room.length; i++) {
  var newText = document.createTextNode(room[i]);

  var listone = document.createElement("li");

  listone.appendChild(newText);

  var gotol = document.getElementsByTagName("ol")[0];

  gotol.appendChild(listone);
}
