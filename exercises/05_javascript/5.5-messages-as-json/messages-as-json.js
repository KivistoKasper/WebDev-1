
const template = document.getElementById("user-card-template");
const contacts = document.getElementById("contacts");

// event listener for userDataReady
document.addEventListener("userDataReady", function(e){

    // user JSON and it's parcing
    let users = e.detail.jsonText;
    users = JSON.parse(users);

    // loop for adding the users cards
    for ( var i in users ){
        clone = template.content.cloneNode(true);
    
        clone.querySelector('img').setAttribute("src", users[i].avatar);
        clone.querySelector('img').setAttribute("alt", users[i].firstName + " " + users[i].lastName);

        clone.querySelector('h1').innerHTML = users[i].firstName + " " + users[i].lastName;

        clone.querySelector('.email').innerHTML = users[i].email;

        clone.querySelector('.phone').getElementsByTagName('span')[0].innerHTML = users[i].phoneNumber;
        
        clone.querySelector('.address').getElementsByTagName('p')[0].innerHTML = users[i].address.streetAddress;
        clone.querySelector('.address').getElementsByTagName('p')[1].innerHTML = users[i].address.zipCode + " " + users[i].address.city;
        clone.querySelector('.address').getElementsByTagName('p')[2].innerHTML = users[i].address.country;

        clone.querySelector('.homepage a').innerHTML = users[i].homepage; 
        clone.querySelector('.homepage a').setAttribute('href', users[i].homepage); 

        clone.querySelector('a[href="#"]').setAttribute('href', users[i].username); 
        clone.querySelector('a[href="#"]').setAttribute('href', users[i].username); 
        clone.querySelector('a[href="#"]').setAttribute('href', users[i].username); 
        clone.querySelector('a[href="#"]').setAttribute('href', users[i].username); 
        
        contacts.appendChild(clone);
    }

});

// mandatory function
fetchUserData();
