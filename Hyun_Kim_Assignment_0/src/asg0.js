/*
  Hyun Kim
  hysekim@ucsc.edu
  Notes to Grader:
  Hope to have a great quarter!
*/

// DrawRectangle.js
function drawVector(v, color){
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(200, 200);

  const scale = 20;
  const x = v.elements[0] * scale;
  const y = v.elements[1] * scale;

  ctx.lineTo(200 + x, 200 - y);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
}

function handleDrawEvent(){
  let v1_x = document.getElementById('v1-x').value;
  let v1_y = document.getElementById('v1-y').value;
  let v2_x = document.getElementById('v2-x').value;
  let v2_y = document.getElementById('v2-y').value;
  const v1 = new Vector3([v1_x, v1_y, 0]);
  const v2 = new Vector3([v2_x, v2_y, 0]);

  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');
  
  // Recreating the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set background color
  ctx.fillRect(0, 0, 400, 400); // Draw the background

  drawVector(v1, "red");
  drawVector(v2, "blue");
}

function hanldeDrawOperationEvent(){

  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');
  // Recreating the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set background color
  ctx.fillRect(0, 0, 400, 400); // Draw the background

  let v1_x = document.getElementById('v1-x').value;
  let v1_y = document.getElementById('v1-y').value;
  let v2_x = document.getElementById('v2-x').value;
  let v2_y = document.getElementById('v2-y').value;

  const v1 = new Vector3([v1_x, v1_y, 0]);
  const v2 = new Vector3([v2_x, v2_y, 0]);
  drawVector(v1, "red");
  drawVector(v2, "blue");


  let operation = document.getElementById('operation').value;
  let scalar = document.getElementById('scalar-value').value;
  if(scalar === ""){
    scalar = 1;
  }

  if(operation === "add"){
    v1.add(v2);
    let x = v1.elements[0];
    let y = v1.elements[1];
    const v3 = new Vector3([x, y, 0])
    console.log(v3)
    drawVector(v3, "green");
  }
  else if(operation === "subtract"){
    v1.sub(v2);
    let x = v1.elements[0];
    let y = v1.elements[1];

    const v3 = new Vector3([x, y, 0])

    drawVector(v3, "green");
  }
  else if(operation === "multiply"){
    v1.mul(scalar);
    v2.mul(scalar);
    let x = v1.elements[0];
    let y = v1.elements[1];
    let x2 = v2.elements[0];
    let y2 = v2.elements[1];

    const v3 = new Vector3([x, y, 0])
    const v4 = new Vector3([x2, y2, 0])

    drawVector(v3, "green");
    drawVector(v4, "green");
  }
  else if(operation === "divide"){
    v1.div(scalar);
    v2.div(scalar);

    let x = v1.elements[0];
    let y = v1.elements[1];
    let x2 = v2.elements[0];
    let y2 = v2.elements[1];

    const v3 = new Vector3([x, y, 0])
    const v4 = new Vector3([x2, y2, 0])

    drawVector(v3, "green");
    drawVector(v4, "green");
  }
  else if(operation === "normalize"){
    v1.normalize();
    v2.normalize();

    let x = v1.elements[0];
    let y = v1.elements[1];
    let x2 = v2.elements[0];
    let y2 = v2.elements[1];

    const v3 = new Vector3([x, y, 0])
    const v4 = new Vector3([x2, y2, 0])

    drawVector(v3, "green");
    drawVector(v4, "green");
  }
  else if(operation === "angle-between"){
    angelBetween(v1, v2);
  }
  else if(operation === "area"){
    areaTriangle(v1, v2);
  }
  else{
    // Currently else statement for Magnitude :)
    console.log("Magnitude v1:" + v1.magnitude())
    console.log("Magnitude v2:" + v2.magnitude())
  }
}

function angelBetween(v1, v2){
  let dot = Vector3.dot(v1, v2);
  let v1_mag = v1.magnitude();
  let v2_mag = v2.magnitude();

  // Cos(alpha)
  const cosTheta = dot / (v1_mag * v2_mag);

  // Cos -1(theta)
  const angleInRadians = Math.acos(cosTheta);
  
  // Converting into a degree
  const angleInDegrees = angleInRadians * (180 / Math.PI);
  console.log("Angle: " + angleInDegrees);
}

function areaTriangle(v1, v2){
  let cross = Vector3.cross(v1, v2);
  let absoluteValue = Math.abs(cross.elements[2]);
  let area_of_triangle = absoluteValue / 2;
  console.log("Area of the Triangle: " + area_of_triangle)
}

function main() {

    // creating a Vector3 class
    let v1 = new Vector3([0, 0, 0]);


    // Retrieve <canvas> element
    var canvas = document.getElementById('example');
    if (!canvas) {
      console.log('Failed to retrieve the <canvas> element');
      return;
    }
  
    // Get the rendering context for 2DCG
    var ctx = canvas.getContext('2d');
  
    // Draw a blue rectangle
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a blue color
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color
    drawVector(v1, "red");
    
  }
  