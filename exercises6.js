// 1. Melakukan Looping Menggunakan While

var num = 0
var str = '- I love coding'
var str2 = '- I will become fullstack developer'

while( num < 20) {
   num += 2;
  console.log(num + "- I love coding");
  

}
console.log("===============================")
while(num >= 2 ){
  console.log(num + "- I will become fullstack developer");
  num-=2;
  
}


// 2. Melakukan Looping Menggunakan For

for( var i = 1 ; i <= 20 ; i++){
  console.log( i + "- I love coding");
}

for (var deret = 20; deret >=2 ; deret--){
  console.log( deret + "- I will become fullstack developer");
}


for(var counter= 0; counter>= 100 ; counter++){
  if (counter%2==0){
    console.log(counter + " " +"GENAP")
  } else{
    console.log(counter + " " + "GANJIL")
  }
}


for(var counter2=1; counter2<= 100 ;counter2+=2){
  
  if( counter2%3==0){
  console.log(counter2+ " KELIPATAN 3");
} else {
     console.log(counter2)
}
}

for(var counter3= 1 ; counter3 <= 100 ;counter3+=5){
  
  if(counter3%6==0){
    console.log(counter3+ " KELIPATAN 6");
  } else{
    console.log(counter3);
  }
}

for(var counter4=1 ; counter4<= 100;counter4+=9){
  
  if(counter4%10==0){
    console.log(counter4 + "KELIPATAN 10");
  }else{
    console.log(counter4)
  }
}