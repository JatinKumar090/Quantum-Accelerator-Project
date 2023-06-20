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


/* to drop targets */

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
    //const clone = dragElementclone.cloneNode(true);

  
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

//code for cloning the drag n drop element

// const dragElementclone = document.getElementById('dragElement');
// const dropTarget = document.getElementById('dropTarget'); //drop-targets

// dragElementclone.addEventListener('dragstart', (event) => {
// event.dataTransfer.setData('text/plain', ''); // Required for dragging to work in some browsers
// });

// dropTarget.addEventListener('dragover', (event) => {
// event.preventDefault();
// });

// dropTarget.addEventListener('drop', (event) => {
// event.preventDefault();

//   // Create a clone of the dragged element
//   const clone = dragElementclone.cloneNode(true);
//   clone.id = ''; // Remove the ID from the clone to avoid duplicates

//   // Append the clone to the drop target
//   dropTarget.appendChild(clone);
// });


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

//to add textarea code 

// const dragElement = document.getElementById('dragElement');
// const codeTextArea = document.getElementById('codeTextArea');

// dragElement.addEventListener('dragstart', (event) => {
//   event.dataTransfer.setData('text/plain', dragElement.textContent);
// });

// codeTextArea.addEventListener('dragover', (event) => {
//   event.preventDefault();
// });

// codeTextArea.addEventListener('drop', (event) => {
//   event.preventDefault();
//   const draggedText = event.dataTransfer.getData('text/plain');
//   codeTextArea.value += draggedText + '\n';
// });



//code to how to delete specific div assigned for CX and CCX gates  

// let delete_item_class;
// let delete_item_id;
// let item_id = 0;


// function deletecell(){
//     console.log("delete clicked");

//     if (item_id == 0){
//           document.getElemetById(delete_item_id).innerHTML = "";
//     }
// else if(item_id==10)
// {
//  const myArray = delete_item_id.split("x");
//  let row = parseInt(myArray[0])+1;
//  let column = myArray[1];

//  document.getElementById(delete_item_id).innerHTML = "";
//  document.getElementById(row + "x" + column).innerHTML = "";
// }
//  else if(item_id == 11){
//     const myArray = delete_item_id.split("x");
//     let row = parseInt(myArray[0])+1;
//     let column = myArray[1];
//  }


//code for adding drag n drop

const toolbox = document.getElementById('toolbox');
const canvas = document.getElementById('canvas');
const codeTextArea = document.getElementById('code');

// Store the gates and their corresponding code generated 
const gateCodeMapping = {
  H: "H gate code",
  NOT: "NOT gate code",
  CX: "CX gate code",
  CCX: "CCX gate code"
};


// Add event listeners for draggable gates using canvas for drag and drop
const gates = document.querySelectorAll('.gate');
gates.forEach(gate => {
  gate.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.dataset.gate);
  });
});
  
// Add event listeners for droppable canvas
canvas.addEventListener('dragover', (event) => {
  event.preventDefault();
});

canvas.addEventListener('drop', (event) => {
  event.preventDefault();

  // Get the gate type from the dragged data
  const gateType = event.dataTransfer.getData('text/plain');

  // Create a gate element
  const gateElement = document.createElement('div');
  gateElement.classList.add('gate');
  gateElement.textContent = gateType + ' Gate';

  // Append the gate element to the canvas
  canvas.appendChild(gateElement);

  // Generate the corresponding code and update the textarea
  const gateCode = gateCodeMapping[gateType];
  codeTextArea.value += gateCode + '\n';
});
