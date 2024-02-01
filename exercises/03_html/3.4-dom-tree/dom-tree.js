const nav = document.querySelector('body').querySelector('nav').querySelector('ul');

//const children = nav.children;
/**
var newlink= document.createElement("a");
newlink.classList.add('menu__link');
newlink.textContent = 'newlink';
nav.appendChild(newlink);
 * 
 */

nav.classList.add('menu__link');

// Create anchor element.
var a = document.createElement('a');           
// Create the text node for anchor element.
var link = document.createTextNode("Localhost");
// Append the text node to anchor element.
a.appendChild(link); 
// Set the title.
//a.title = "This is Link"; 
// Set the href property.
a.href = "http://localhost:3000/"; 
  
//const li = nav.getElementsByTagName('li')[3];

const li = document.createElement("li");
li.append(a);
nav.appendChild(li);

//---------------
const orlist = document.getElementById('ordered');
var li2 = document.createElement('li');           
var link2 = document.createTextNode("item 0");
li2.appendChild(link2);
orlist.insertBefore(li2, orlist.firstChild);
//orlist.appendChild(li2);

//_---------
const todo = document.getElementById('todo');
todo.classList.remove('navi');

//---------------------
var itemDel = todo.children[1];
todo.removeChild(itemDel);

/**
 * const children = nav.children;
Array.from(children).forEach(li => {
    console.log(li.innerText);
});
 */
