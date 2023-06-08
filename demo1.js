// /* draggable element */
// // const item = document.querySelector('#item');
// // let id =0;



let item = "";

function Test1(id1){
    console.log('#'+id1);
    id =id1;
    item = document.querySelector('#'+id1);
    // item = document.getElementById('#'+id1);
    // console.log(item);

}


console.log("1");


/* drop targets */

let boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
   
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    console.log("enter");
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    console.log("over");
    e.preventDefault();
    e.target.classList.add('drag-over');
  
}

function dragLeave(e) {
    console.log("leave");
    e.target.classList.remove('drag-over');
}

function drop(e) {
    console.log("HERE");
    e.target.classList.remove('drag-over');
  
    console.log(e);
    console.log(id);
   
    var draggable = document.getElementById(id);
    var dragged = document.getElementById("box1");
    console.log(draggable);
    // add it to the drop target
   
    if(e.target.children.length == 1)
    {
        e.target.appendChild(draggable);
      
        // dragged.appendChild( draggable )    ;

    }


}

// dragula([document.getElementById("box1"), document.getElementById("upperbox1")], {
   
//     copy: function (el, source) {
//       return source === document.getElementById("box1")
//     },
//     accepts: function (el, target) {
//       return target !== document.getElementById("upperbox1")
//     }
//   });


var r_count=3;

//  function to Add qubits
//  boxes = document.querySelectorAll('.box');
function addQubit(){
    // console.log("plus is clicked");
    
    var upperbox = document.getElementById('upperbox');
    var reg = document.getElementById('reg');
    

    if(r_count >= 3){

       const div =  document.createElement("div");
       div.id = "qubit_"+r_count;
   
    div.className = "row";
    
       upperbox.insertBefore(div, reg);
    
      
        div.innerHTML += '<div class="col-1">  <div class="head">q['+r_count +'] </div>  </div> \n'+
        '<div class="col-1"><div class="box"><hr id="test5"> </div></div>\n '+
        '<div class="col-1"><div class="box"><hr> </div></div> \n'+
        '<div class="col-1"><div class="box"><hr> </div></div> \n'+
        '<div class="col-1"><div class="box"><hr> </div></div> \n'+
        '<div class="col-1"><div class="box"><hr> </div></div> \n'+
        '<div class="col-1"><div class="box"><hr> </div></div> \n'+
        '<div class="col-1"><div class="box"><hr> </div></div> \n'+
        '<div class="col-1"><div class="box"><hr> </div></div> \n'+
        '<div class="col-1"><div class="box"><hr> </div></div> \n'+
        '<div class="col-1"><div class="box"><hr> </div></div> \n'+
        '<div class="col-1"><div class="box"><hr> </div></div> \n'+
        
    
    '</div> \n'

        
        r_count++;
    }
    boxes = document.querySelectorAll('.box');
   boxes.forEach(box => {
 
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});
    console.log(boxes);

}


// to delete a qubit
function deleteQubit(){
    console.log(r_count);
    if(r_count> 3){
    r_count--;
    console.log("qubit_"+r_count);
    const upperbox = document.getElementById("qubit_"+r_count);
    upperbox.remove();
    }
    
}



//   dragula([document.getElementById("box1"), document.getElementById("upperbox1")], {
//     copy: function (el, source) {
//       return source === document.getElementById("box1")
//     },
//     accepts: function (el, target) {
//       return target !== document.getElementById("box1")
//     }
//   });




// let counter = 1; 

// let reg = document.getElementById("c");
// function plusreg(){
//     console.log("plus");
    
//     if(counter >= 1)
//     {
//         counter ++;
//         reg.innerHTML = "c"+counter;
//     }
  
// }

// function minusreg(){
//     console.log("minus");
    
//     if(counter > 1)
//     {
//         counter --;
//         reg.innerHTML = "c"+counter;
//     }
// }



var c1_count=2;

function plusreg(){
    var upperbox = document.getElementById('upperbox');
    

    if(c1_count >= 2){

 
    upperbox.innerHTML += '<div class="row" id="'+c1_count +'" ><div class="col-1">  <div class="head">c'+ c1_count+' </div>  </div> \n'+
        '<div class="col-1"><div class="cbox"><hr > <hr class="newhr"></div></div>\n '+
        '<div class="col-1"><div class="cbox"><hr> <hr class="newhr"> </div></div> \n'+
        '<div class="col-1"><div class="cbox"><hr> <hr class="newhr"></div></div> \n'+
        '<div class="col-1"><div class="cbox"><hr> <hr class="newhr"></div></div> \n'+
        '<div class="col-1"><div class="cbox"><hr> <hr class="newhr"></div></div> \n'+
        '<div class="col-1"><div class="cbox"><hr> <hr class="newhr"></div></div> \n'+
        '<div class="col-1"><div class="cbox"><hr> <hr class="newhr"></div></div> \n'+
        '<div class="col-1"><div class="cbox"><hr> <hr class="newhr"></div></div> \n'+
        '<div class="col-1"><div class="cbox"><hr> <hr class="newhr"></div></div> \n'+
        '<div class="col-1"><div class="cbox"><hr> <hr class="newhr"></div></div> \n'+
        '<div class="col-1"><div class="cbox"><hr> <hr class="newhr"></div></div> \n'+
        
    
    '</div> </div> \n'

        
    c1_count++;
    }
    boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
  
     box.addEventListener('dragenter', dragEnter);
     box.addEventListener('dragover', dragOver);
     box.addEventListener('dragleave', dragLeave);
     box.addEventListener('drop', drop); });
}



function minusreg(){
   
    if(c1_count> 2){
        c1_count--;
    console.log("c = "+c1_count);
    const upperbox = document.getElementById(+c1_count);
    upperbox.remove();
    }
}



