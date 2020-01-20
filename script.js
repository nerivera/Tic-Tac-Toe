 var turn = Math.random() < 0.5,
   boardvals = new Array(9),
   doit = true,
   atall = true;
 setTimeout(function() {
   document.getElementById("turn").innerHTML = turn ? "O" : "X";
 }, 0);

 function setSquares() {
   for (var i = 0; i < 9; i++) {
     switch (boardvals[i]) {
       case true:
         document.getElementById(String(i)).innerHTML = "O";
         break;
       case undefined:
         document.getElementById(String(i)).innerHTML = "";
         break;
       default:
         document.getElementById(String(i)).innerHTML = "X";
     }
   }
   document.getElementById("turn").innerHTML = turn ? "O" : "X";
 }

 function reset() {
   turn = Math.random() < 0.5;
   document.getElementById("pop").play();
   boardvals = new Array(9);
   setSquares();
   document.getElementById("win").style.display = "none";
   document.getElementById("mes").style.display = "block";
   atall = true;
 }

 function CBV(arr) {
   return (boardvals[arr[0]] === boardvals[arr[1]]) && (boardvals[arr[1]] === boardvals[arr[2]]) && (boardvals[arr[0]] != undefined);
 }

 function checkForWin() {
   if (CBV([0, 1, 2]) || CBV([3, 4, 5]) || CBV([6, 7, 8]) || CBV([0, 3, 6]) || CBV([1, 4, 7]) || CBV([2, 5, 8]) || CBV([0, 4, 8]) || CBV([2, 4, 6])) {
     document.getElementById("tada").play();
     document.getElementById("win").style.display = "block";
     document.getElementById("mes").style.display = "none";
     document.getElementById("winner").innerHTML = turn ? "X" : "O";
     atall = false;
     return;
   }
   var f = true;
   for (var i = 0; i < 9; i++) {
     if (boardvals[i] == undefined) {
       f = false;
     }
   }
   if (f) {
     document.getElementById("win").style.display = "block";
     document.getElementById("mes").style.display = "none";
     document.getElementById("winner").innerHTML = "No one";
     atall = false;
   }
 }

 function move(cin) {
   doit = true;
   if (boardvals[cin] === !turn) {
     boardvals[cin] = undefined;
   } else if (boardvals[cin] === turn) {
     doit = false;
   } else {
     boardvals[cin] = turn;
   }
   if (doit && atall) {
     document.getElementById("pop").play();
     turn = !turn;
     setSquares();
     checkForWin();
   }
 }
