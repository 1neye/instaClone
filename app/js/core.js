// function onFileSelected(event) {
//   var selectedFile = event.target.files[0];
//   var reader = new FileReader();

//   var imgtag = document.getElementById("myimage");
//   imgtag.title = selectedFile.name;

//   reader.onload = function(event) {
//     imgtag.src = event.target.result;
//   };

//   reader.readAsDataURL(selectedFile);
// } 
let wrapper = document.getElementById('wrapper');
function readFile (input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        let img = document.createElement('img');
        wrapper.appendChild(img);
        img.src = reader.result;
        // console.log(reader.result);
    }
}
var div = document.createElement("div");

div.innerHTML = "Some text with <b>bold text</b>";
var text = document.createTextNode("Some text");
div.appendChild(text);

let btw = document.querySelector('.btw');
let counter = document.querySelector('.counter');
let clicked = false;
let idx = 0;
btw.addEventListener('click', function () {
    if(!clicked) {
        clicked = true;
        idx++
        counter.innerHTML = idx;
        console.log(idx);
    }
    else if(clicked) {
    clicked = false;
    idx--
    counter.innerHTML = idx;
    console.log(idx);
    }
});