for (let li of document.querySelectorAll('li')) {
    // get the title from the text node
    let title = li.firstChild.data;

    title = title.trim(); // remove extra spaces from ends

    // get the descendants count
    let count = li.getElementsByTagName('li').length;

    if ( count > 0) {
        
        // generate the new title
        let newTitle = title + ' (' + count + ')';
        //console.log(newTitle);

        // assign the new title to the element
        li.firstChild.data = newTitle;
    }
    
    
  }