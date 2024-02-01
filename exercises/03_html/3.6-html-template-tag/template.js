const form = document.getElementById("form");
const contacts = document.getElementById("contacts");
const contactTemplate = document.getElementById("contact-template");

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    const name = document.getElementById("input-name").value;
    const email = document.getElementById("input-email").value;
    const homepage = document.getElementById("input-homepage").value;
    console.log(name, email, homepage);

    const clone = contactTemplate.content.cloneNode(true);


    clone.querySelector('h2').innerHTML = name;
    clone.querySelector('.email').innerHTML = email;
    clone.querySelector('.homepage a').innerHTML = homepage;
    clone.querySelector('a[href="#"]').setAttribute('href', homepage);
    

    contacts.appendChild(clone);

    form.reset();
});