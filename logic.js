


let n=[1,2,3,4,5,6,7,8,9];

let i,x,y,z;
i=Math.floor(Math.random() * 9);
x=n[i];
const index = n.indexOf(x);
if (index > -1) {
  n.splice(index, 1); 
n.push(0);
i=Math.floor(Math.random() * 9);
y=n[i];
const index1 = n.indexOf(y);
if (index1 > -1) {
  n.splice(index1, 1); 
}
i=Math.floor(Math.random() * 8);
z=n[i];

let t=[x,y,z];

 
// counting the number of guesses
// made for correct Guess


function calculate (){

 let match=0;  
 let rightplace=0;
let m = document.getElementById("guessField").value;
m.toString().split('');
console.log(m);
   for(let i=0;i<3;i++){
     if(m.includes(t[i])){
      match+=1;
     }
     if(m[i]==t[i]){
     rightplace+=1;   
    }
   }
   let v;
   if (match==3&rightplace==3){
      v=m+": You are correct ";
      
   }else {
     v=m+": There are "+match+" correct numbers in the answer and "+rightplace+" numbers in right place";
   }
  
    let li = document.createElement("li");
    let h = document.createTextNode(v);
    li.appendChild(h);
    if (m === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("guessField").value = "";
  }
   
}
function refresh(){
    window.location.reload("Play Again");
  }
 




