(function() {

  $(document).ready(init);

  var config = {
    apiKey: "AIzaSyBCCOueSDHXoEwdjzR3FDt7hRqhZmqy1No",
    authDomain: "center-for-the-homeless.firebaseapp.com",
    databaseURL: "https://center-for-the-homeless.firebaseio.com",
    projectId: "center-for-the-homeless",
    storageBucket: "center-for-the-homeless.appspot.com",
    messagingSenderId: "1019432978985"
  };

function init() {
  firebase.initializeApp(config);
  getBedStatusWomen();
  getBedStatusMen();
  getBedStatusFamOne();
  getBedStatusFamTwo();
  getBedStatusFamThree();
  getBedStatusFamFour();
  $("#women").on('click', '.bed',initChangeColorWomen);
  $("#men").on('click', '.bed',initChangeColorMen);
  $("#fam_1").on('click', '.bed',initChangeColorFamilyOne);
  $("#fam_2").on('click', '.bed',initChangeColorFamilyTwo);
  $("#fam_3").on('click', '.bed',initChangeColorFamilyThree);
  $("#fam_4").on('click', '.bed',initChangeColorFamilyFour);
}

function getBedStatusFamFour(){
  firebase.database().ref().child("Room/Family_4").on('value', function(snapshot){
    $('#fam_4').empty();
    var room = snapshot.val();
    for(var r in room){
      var roomAvail = room[r].available;
      var roomNum = r;
      if(roomAvail === true){
        $('#fam_4').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#fam_4').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });
}

function getBedStatusFamThree(){
  firebase.database().ref().child("Room/Family_3").on('value', function(snapshot){
    $('#fam_3').empty();
    var room = snapshot.val();
    for(var r in room){
      var roomAvail = room[r].available;
      var roomNum = r;
      if(roomAvail === true){
        $('#fam_3').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#fam_3').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });
}

function getBedStatusFamTwo(){
  firebase.database().ref().child("Room/Family_2").on('value', function(snapshot){
    $('#fam_2').empty();
    var room = snapshot.val();
    for(var r in room){
      var roomAvail = room[r].available;
      var roomNum = r;
      if(roomAvail === true){
        $('#fam_2').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#fam_2').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });
}

function getBedStatusFamOne(){
  firebase.database().ref().child("Room/Family_1").on('value', function(snapshot){
    $('#fam_1').empty();
    var room = snapshot.val();
    for(var r in room){
      var roomAvail = room[r].available;
      var roomNum = r;
      if(roomAvail === true){
        $('#fam_1').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#fam_1').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });
}

function getBedStatusMen(){
  firebase.database().ref().child("Room/Men").on('value', function(snapshot){
    $('#men').empty();
    var room = snapshot.val();
    for(var r in room){
      var roomAvail = room[r].available;
      var roomNum = r;
      if(roomAvail === true){
        $('#men').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#men').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });
}

function getBedStatusWomen(){
  firebase.database().ref().child("Room/Women").on('value', function(snapshot){
    $('#women').empty();
    var room = snapshot.val();
    for(var r in room){
      var roomAvail = room[r].available;
      var roomNum = r;
      if(roomAvail === true){
        $('#women').append("<div class='col s3 bed #032584'>" + r + "</div>")
      } else {
        $('#women').append("<div class='col s3 bed red'>" + r + "</div>")
      }
    }
  });
}
// end of function getBedStatus


function initChangeColorWomen(){
  var temp = $(this).text();
  firebase.database().ref().child("Room/Women/" + temp).once('value', function(snapshot){
    var state = snapshot.val().available;
    if(state === false) {
      var newState = {
        available: true
      }
      return firebase.database().ref("Room/Women/"+temp).update(newState);
    } else {
      var newState = {
        available: false
      }
      return firebase.database().ref("Room/Women/"+temp).update(newState);
    }
  });

}
// close to initChangeColor
function initChangeColorMen(){
  var temp = $(this).text();
  firebase.database().ref().child("Room/Men/" + temp).once('value', function(snapshot){
    var state = snapshot.val().available;
    if(state === false) {
      var newState = {
        available: true
      }
      return firebase.database().ref("Room/Men/"+temp).update(newState);
    } else {
      var newState = {
        available: false
      }
      return firebase.database().ref("Room/Men/"+temp).update(newState);
    }
  });
}
// close to initChangeColor

function initChangeColorFamilyOne(){
  var temp = $(this).text();
  firebase.database().ref().child("Room/Family_1/" + temp).once('value', function(snapshot){
    var state = snapshot.val().available;
    if(state === false) {
      var newState = {
        available: true
      }
      return firebase.database().ref("Room/Family_1/"+temp).update(newState);
    } else {
      var newState = {
        available: false
      }
      return firebase.database().ref("Room/Family_1/"+temp).update(newState);
    }
  });

}
// close to initChangeColor


function initChangeColorFamilyTwo(){
  var temp = $(this).text();
  firebase.database().ref().child("Room/Family_2/" + temp).once('value', function(snapshot){
    var state = snapshot.val().available;
    if(state === false) {
      var newState = {
        available: true
      }
      return firebase.database().ref("Room/Family_2/"+temp).update(newState);
    } else {
      var newState = {
        available: false
      }
      return firebase.database().ref("Room/Family_2/"+temp).update(newState);
    }
  });

}
// close to initChangeColor

function initChangeColorFamilyThree(){
  var temp = $(this).text();
  firebase.database().ref().child("Room/Family_3/" + temp).once('value', function(snapshot){
    var state = snapshot.val().available;
    if(state === false) {
      var newState = {
        available: true
      }
      return firebase.database().ref("Room/Family_3/"+temp).update(newState);
    } else {
      var newState = {
        available: false
      }
      return firebase.database().ref("Room/Family_3/"+temp).update(newState);
    }
  });

}
// close to initChangeColor

function initChangeColorFamilyFour(){
  var temp = $(this).text();
  firebase.database().ref().child("Room/Family_4/" + temp).once('value', function(snapshot){
    var state = snapshot.val().available;
    if(state === false) {
      var newState = {
        available: true
      }
      return firebase.database().ref("Room/Family_4/"+temp).update(newState);
    } else {
      var newState = {
        available: false
      }
      return firebase.database().ref("Room/Family_4/"+temp).update(newState);
    }
  });

}
// close to initChangeColor

})();
