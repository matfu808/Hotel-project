function addMeone() {
  var input1 = document.getElementById("customer1").value;
  var lengthword1 = input1.length;
  var timeinput1 = document.getElementById("time1").value;
  var timelength1 = timeinput1.length;
  if (lockcheck1 == false) {
    if (lengthword1 == 0 || timelength1 == 0) {
      document.getElementById("full1").innerHTML =
        "Please put something in either the time box or input guest box";
    } else {
      document.getElementById("full1").innerHTML = "";
      if (document.getElementsByTagName("li").length < 4) {
        var newList1 = document.createElement("li");
        var newText1 = document.createTextNode(
          document.getElementById("customer1").value
        );
        newList1.appendChild(newText1);
        var position1 = document.getElementsByTagName("ol")[0];
        position1.appendChild(newList1);
      } else {
        document.getElementById("full1").innerHTML = "list is full";
      }
    }
  } else {
  }
}

function removeStuffone() {
  if (lockcheck1 == false) {
    if (document.getElementsByTagName("li").length < 4) {
      var personNum1 = document.getElementById("removecustomer1").value;
      var y1 = parseInt(personNum1);
      var getchild1 = document.getElementsByTagName("li")[y - 1];
      var getparent1 = getchild.parentNode;
      getparent1.removeChild(getchild1);
    } else {
      document.getElementById("full1").innerHTML = "List is not full";
      var personNum = document.getElementById("removecustomer1").value;
      var y1 = parseInt(personNum);
      var getchild1 = document.getElementsByTagName("li")[y1 - 1];
      var getparent1 = document.getElementsByTagName("ol")[0];
      getparent1.removeChild(getchild1);
    }
  } else {
  }
}
var lockcheck1 = false;
function lockone() {
  if (lockcheck1 == false) {
    lockcheck1 = true;
    document.getElementById("roomlockunlock1").innerHTML = "room is locked";
  } else {
    lockcheck1 = false;
    document.getElementById("roomlockunlock1").innerHTML = "room is unlocked";
  }
}

function deleteeverythingone() {
  var deleteeerything1 = document.getElementsByTagName("ol")[0];
  deleteeerything1.innerHTML = "";
}
