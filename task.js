export default function addBoxClickEvents() {
  var boxes = document.getElementsByClassName("box");
  
  for(var i=1; i<=boxes.length; i++){
    boxes[i-1].addEventListener('click', function(){
      alert("Iam a box");
                });  
    if(i%2===0){
      /*index of boxes starts 0, i starts at 1*/
      boxes[i-1].addEventListener('click', function(){
                        alert("Iam also Even");
                      });  
    }
    else if(i%2===1){
      boxes[i-1].addEventListener('click', function(){ 
                        alert("Iam also Odd");
                      });
    }
  }
}
