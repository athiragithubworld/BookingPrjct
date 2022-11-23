var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var newItem = document.getElementById('item').value;
var newItem1 = document.getElementById('itemid').value;
const msg = document.querySelector('.msg');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// ----------------------------Add item------------------------------------
function addItem(e){

  e.preventDefault();
  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('itemid').value;
     
     if(newItem === '' || newItem1 === '') {
       // alert('Please enter all fields');
       msg.classList.add('error');
       msg.innerHTML = 'Please enter all fields';
   
       // Remove error after 3 seconds
       setTimeout(() => msg.remove(), 3000);
     } else {

  // -------Store the value in local storage----------
//   const name = e.target.name.value;
//   const email = e.target.email.value;
  
  const myobj={ name:newItem,
    email:newItem1

  };
  // Emailid  Use to avoid duplicate
  localStorage.setItem(myobj.email,JSON.stringify(myobj));
  // localStorage.setItem('Name',name);
  // localStorage.setItem('Email',email);

  // get the value from local storage and save it into the form
  const obj=JSON.parse(localStorage.getItem(myobj.email));


// -----------------------------------------------------------
 // Create new list item with the help of local storage details
 const li = document.createElement('li');

 // Add class
   li.className = 'list-group-item';

// Add text node with input values
li.appendChild(document.createTextNode(`${obj.name}: ${obj.email}`));

 // Add HTML
 // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
//  ------------------------------------------------

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));
//   li.appendChild(document.createTextNode(newItem1));

  

  //   create edit button element
var editBtn = document.createElement('button');

// Add classes to edit button
editBtn.className = 'btn btn-dark btn-sm float-right edit';

// Append text node
editBtn.appendChild(document.createTextNode('Edit'));

// Append button to li
li.appendChild(editBtn);

// Append li to list
itemList.appendChild(li);
// -----------------------------------------------------
// Create del button element
var deleteBtn = document.createElement('button');

// Add classes to del button
  deleteBtn.className = 'btn btn-danger mr-2 btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

   // Clear fields
   document.getElementById('item').value = '';
   document.getElementById('itemid').value = '';
     }
}

// -----------remove item---------------------------


function removeItem(e){

    // const myobj={ name:newItem,
    //     email:newItem1
    
    //   };
    //   // Emailid  Use to avoid duplicate
    //   localStorage.setItem(myobj.email,JSON.stringify(myobj));
    //   // localStorage.setItem('Name',name);
    //   // localStorage.setItem('Email',email);
    
    //   // get the value from local storage and save it into the form
    //   const obj=JSON.parse(localStorage.getItem(myobj.email));
    //   var obj1=myobj.email;
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var mail=itemName.split(':');
        var arr=[];
        arr.push(mail)
        var itemName1 = item.childNodes[1].textContent;

        if (e.target.classList.contains('delete')){
            if(confirm("Are you sure ?")){
                console.log(itemName);
                var x = localStorage.getItem("itemName");
                localStorage.removeItem(x);
                var li = e.target.parentElement;
                itemList.removeChild(li);
                
            }
        }
       // console.log(itemName);
    //    if(itemName.toLowerCase().indexOf(text)!=-1  || itemName1.toLowerCase().indexOf(text)!=-1 ){
    //        item.style.display='block';
    //    }
    //    else{
    //        item.style.display='none';
    //    }
       });
    
}





// Fliter Items
function filterItems(e) {
    //  convert text to lowercase
    var text=e.target.value.toLowerCase();
    // console.log(text);
    // get li
    var items = itemList.getElementsByTagName('li');
//   convert to an array
Array.from(items).forEach(function(item){
 var itemName = item.firstChild.textContent;
 var itemName1 = item.childNodes[1].textContent;
// console.log(itemName);
if(itemName.toLowerCase().indexOf(text)!=-1  || itemName1.toLowerCase().indexOf(text)!=-1 ){
    item.style.display='block';
}
else{
    item.style.display='none';
}
});
// Array.from(items).forEach(function(itemid){
//     var itemName = itemid.firstChild.textContent;
//    // console.log(itemName);
//    if(itemName.toLowerCase().indexOf(text)!=-1){
//     itemid.style.display='block';
//    }
//    else{
//     itemid.style.display='none';
//    }
//    });
}



