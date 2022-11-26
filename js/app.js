// Función para mostrar el 'modal' del Login

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Función para fijar la cabecera al hacer scroll en la página

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// Función para mostrar una imagen de forma aleatoria en el desplegable del Login

window.onload = choosePic;

var myPix = new Array("css/images/loginlogo.png","css/images/loginlogo2.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}

//Función para las tablas
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="inline";
	
 var nombre=document.getElementById("nombre_row"+no);
 var precio=document.getElementById("precio_row"+no);
 var descripcion=document.getElementById("descripcion_row"+no);
 var stock=document.getElementById("stock_row"+no);
 var ratings=document.getElementById("ratings_row"+no);
	
 var nombre_data=nombre.innerHTML;
 var precio_data=precio.innerHTML;
 var descripcion_data=descripcion.innerHTML;
 var stock_data=stock.innerHTML;
 var ratings_data=ratings.innerHTML;
	
 nombre.innerHTML="<input type='text' id='nombre_text"+no+"' value='"+nombre_data+"'>";
 precio.innerHTML="<input type='text' id='precio_text"+no+"' value='"+precio_data+"'>";
 descripcion.innerHTML="<input type='text' id='descripcion_text"+no+"' value='"+descripcion_data+"'>";
 stock.innerHTML="<input type='text' id='stock_text"+no+"' value='"+stock_data+"'>";
 ratings.innerHTML="<input type='text' id='ratings_text"+no+"' value='"+ratings_data+"'>";
}

function save_row(no)
{
 var nombre_val=document.getElementById("nombre_text"+no).value;
 var precio_val=document.getElementById("precio_text"+no).value;
 var descripcion_val=document.getElementById("descripcion_text"+no).value;
 var stock_val=document.getElementById("stock_text"+no).value;
 var ratings_val=document.getElementById("ratings_text"+no).value ;

 document.getElementById("nombre_row"+no).innerHTML=nombre_val;
 document.getElementById("precio_row"+no).innerHTML=precio_val;
 document.getElementById("descripcion_row"+no).innerHTML=descripcion_val;
 document.getElementById("stock_row"+no).innerHTML=stock_val;
 document.getElementById("ratings_row"+no).innerHTML=ratings_val;

 document.getElementById("edit_button"+no).style.display="inline";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_nombre=document.getElementById("new_nombre").value;
 var new_precio=document.getElementById("new_precio").value;
 var new_descripcion=document.getElementById("new_descripcion").value;
 var new_stock=document.getElementById("new_stock").value;
 var new_ratings=document.getElementById("new_ratings").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='nombre_row"+table_len+"'>"+new_nombre+"</td><td id='precio_row"+table_len+"'>"+new_precio+"</td><td id='descripcion_row"+table_len+"'>"+new_descripcion+"</td><td id='stock_row"+table_len+"'>"+new_stock+"</td><td id='ratings_row"+table_len+"'>"+new_ratings+"</td><td><input type='button' id='edit_button"+table_len+"' value='Editar' class='edit' onclick='edit_row("+table_len+")'><input type='button' id='save_button"+table_len+"' value='Guardar' class='save' onclick='save_row("+table_len+")'><input type='button' value='Borrar' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_nombre").value="";
 document.getElementById("new_precio").value="";
 document.getElementById("new_descripcion").value="";
 document.getElementById("new_stock").value="";
 document.getElementById("new_ratings").value="";
}

/* -------------------------------------------------------------------------------------------------------------------------------------- */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var a=document.querySelector("nombrada");
console.log(a);
var b=document.querySelector("passworada");
console.log(b);



function mostrada(){
  if (a.value=="admin" && b.value=="admin"){
    window.location.href="index.html";
    document.getElementById("adminada").style.display="block";
  }
}


