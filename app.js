var inputAge =document.getElementById('inputAge');
var res =document.getElementById('result');


function checkAge() {
if (inputAge.value >=1 && inputAge.value <=7) {
      res.innerHTML ='Siz yoshbolasz';
}else if (inputAge.value >7 && inputAge.value <=18) {
      res.innerHTML ='Siz maktab o\'quvchisiz';
            
}
else if(inputAge.value >18 && inputAge.value <= 65){
res.innerHTML='Sizning yoshingiz munosib';
}
else if (inputAge.value >65 && inputAge.value <=100)
 {
res.innerHTML='Siz nafaqadasiz';
      }
else if(inputAge.value >100 && inputAge.value <=500)
{
res.innerHTML='bobo siz bir o\'ylab ko\'ring siz uje o\'lib ketizov';
      }
else if (inputAge.value <0 ) {
res.innerHTML="Siz hali planda yoqsiz"
      }
else {
res.innerHTML='Siz xali ma\'lumot kiritmadiz ';
      }
}

