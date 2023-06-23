var form=document.getElementById('addForm')
var itemlist=document.getElementById('items');

//FORM SUBMIT EVENT
form.addEventListener('submit',additem)
//delete item
itemlist.addEventListener('click',removeitem)
//ADD ITEM
function additem(e)
{
  e.preventDefault();
  //get imput value
  var newitem=document.getElementById('item').value;
  //create new li element
  var li =document.createElement('li');
  // add class
  li.className="list-group-item";
  //add text node with imput value
  li.appendChild(document.createTextNode(newitem));
  var editbtn=document.createElement('button')
  //add class
  editbtn.className="btn btn-primary btn-sm float-md-right "
  
  //add text 
  editbtn.appendChild(document.createTextNode('edit'))
  li.appendChild(editbtn)

  //add delete buttin
  var deletebtn=document.createElement('button');
  //add class 
  deletebtn.className="btn btn-danger btn-sm float-right delete"
  //add text
  deletebtn.appendChild(document.createTextNode('X'));
  //add delete button to li
  li.appendChild(deletebtn)
  


  
  
  //appended li to item list
  itemlist.appendChild(li)

}

function removeitem(e)
{
   if(e.target.classList.contains("delete"))
   { console.log(1)
    if(confirm('Are you sure?'))
    {
    var li=e.target.parentElement
    itemlist.removeChild(li)
    }
   }
}