let authors = [];
function author(name, id){
    this.name = name;
    this.id = id;
}

let author1= new author('Bob', 1);
authors.push(author1);
author1= new author('Joe', 2);
authors.push(author1);
author1= new author('Jill', 3);
authors.push(author1);
author1= new author('Julie', 4);
authors.push(author1);
author1= new author('Sam', 5);
authors.push(author1);
author1= new author('Sue', 6);
authors.push(author1);
author1= new author('Tony', 7);
authors.push(author1);
document.getElementById("author1").innerHTML = authors[0].name;
document.getElementById("author2").innerHTML = authors[1].name;
document.getElementById("author3").innerHTML = authors[2].name;
document.getElementById("author4").innerHTML = authors[3].name;
document.getElementById("author5").innerHTML = authors[4].name;
var size = authors.length;
var count = 1;
while(size > 0){
    var node = document.createElement("LI");
    var a = document.createElement("a");
    a.href = "#"
    a.textContent = count;
    a.onclick= function(e) {clicked(e);};
    node.appendChild(a);
    count++;
    document.getElementsByClassName("pagination")[0].appendChild(node);
    size = size - 5;
}

function clicked(e){
document.getElementById("author1").innerHTML = authors[0 +5*(e.target.textContent-1)].name;
if(authors[1+5*(e.target.textContent-1)]){
document.getElementById("author2").innerHTML = authors[1+5*(e.target.textContent-1)].name;
document.getElementById("author2").style.display = "block";
}
else
{
    document.getElementById("author2").style.display = "none";
}
if(authors[2+5*(e.target.textContent-1)]){
document.getElementById("author3").innerHTML = authors[2+5*(e.target.textContent-1)].name;
document.getElementById("author3").style.display = "block";
}
else{
    document.getElementById("author3").style.display = "none";
}
if(authors[3+5*(e.target.textContent-1)]){
document.getElementById("author4").innerHTML = authors[3+5*(e.target.textContent-1)].name;
document.getElementById("author4").style.display = "block";
}
else{
    document.getElementById("author4").style.display = "none";
}
if(authors[4+5*(e.target.textContent-1)]){
document.getElementById("author5").innerHTML = authors[4+5*(e.target.textContent-1)].name;
document.getElementById("author5").style.display = "block";
}
else{
    document.getElementById("author5").style.display = "none";
}
}