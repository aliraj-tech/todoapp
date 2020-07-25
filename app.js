var list1= document.getElementById("list")
function add() 
{

    var inp=document.getElementById("inp")

    var li=document.createElement("li")

    var litext= document.createTextNode(inp.value)
    li.appendChild(litext)






    var delbut= document.createElement("button")
var deltext= document.createTextNode("Delete")
delbut.setAttribute("class","butn")
delbut.setAttribute("onclick","deleteitem(this)")

delbut.appendChild(deltext)



var editbut=document.createElement("button")
var edittx=document.createTextNode("Edit")
editbut.setAttribute("onclick","editt(this)")

editbut.setAttribute("class","butn1")

editbut.appendChild(edittx)
li.appendChild(editbut)


li.appendChild(delbut)


list1.appendChild(li)



var delbut= document.createElement("button")



inp.value=""
    console.log(li)

}
function editt(e){
var bal= e.parentNode.firstChild.nodeValue
    var edot= prompt("Enter ur text",bal)
    e.parentNode.firstChild.nodeValue=edot
  
}

function deleteitem(e){
e.parentNode.remove()}


function Alldel(){
    list1.innerHTML= ""
}