var firebaseConfig = {
apiKey: "AIzaSyCOjucCtxEPthTnsieTPvlUQko0azpeF2I",
authDomain: "schoolchat-a0531.firebaseapp.com",
databaseURL: "https://schoolchat-a0531-default-rtdb.firebaseio.com",
projectId: "schoolchat-a0531",
storageBucket: "schoolchat-a0531.appspot.com",
messagingSenderId: "985533422274",
appId: "1:985533422274:web:c82e064c5e60898f4a395b"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0    
    });
    document.getElementById("msg").value="";
}


