var firebaseConfig = {
      apiKey: "AIzaSyCUBltbInT4IGLj6GLhQKGASnlml1zs9sw",
      authDomain: "kwitter1-c06dd.firebaseapp.com",
      databaseURL: "https://kwitter1-c06dd-default-rtdb.firebaseio.com",
      projectId: "kwitter1-c06dd",
      storageBucket: "kwitter1-c06dd.appspot.com",
      messagingSenderId: "1047041298007",
      appId: "1:1047041298007:web:2c3c177f0a4ecb6fac5d12"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
   
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}