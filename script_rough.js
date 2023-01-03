  
  function c_converter(){
    let x = document.getElementById('numb').value;
    let c;
    c = (x-32)/1.8

    document.getElementById("log").innerHTML = c;
  }

  function F_converter(){
    let x = document.getElementById('numbF').value;
    let F;
    F = (x * (9/5))+32;

    document.getElementById("log1").innerHTML = F;
  }

 
 
