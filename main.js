//   window.onload();


  let outputScreen = document.getElementById("output");

  const display = (num) => {
      outputScreen.value += num;
  }

 let calculate = () => {
     try{
         outputScreen.value = eval(outputScreen.value);
     }
     catch(err){
        alert('Invalid');
     }
 }

//   let clear = () => {
//      outputScreen.value = " ";
//  }

const reset = () => {
    outputScreen.value = "";
}

const del = () => {
    outputScreen.value = outputScreen.value.slice(0,-1);
}
