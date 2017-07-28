function startTime() {                  // This function gets the clock running. Notice that it must be started 'onload' on the body tag.
  var today = new Date();      // new Date() creates a new date object and stores it in 'today' var in this format: Fri Jul 28 2017 16:02:59 GMT-0500 (CDT).
  var h = today.getHours();    // gets hours from Date() and stores it in h.
  var m = today.getMinutes();   // gets minutes from Date() and stores it in m.
  m = checkTime(m);             // runs checktime() function shown below.
  document.getElementById('javaScriptClock').innerHTML =
  h + ':' + m;                // displays time in h1 #javaScriptClock tag.
  var t = setTimeout(startTime, 500);  // sets a time (500 ms) for running 'startTime()'. It means it will run 500 ms after loading the page.
}
function checkTime(i) {   // This function runs after being called in line 5.
  if (i < 10) {
    i = "0" + i;
    return i;           // Pretty simple, it adds a 0 before the minute if it is less than 10, if i > 10 it just returns the
  }else {               // original value.
    return i;
  }
}

function focusSearchBar() {
  document.getElementById('searchBar').focus();   // This function takes the input #searchBar element and applies the focus() method. It means
}                                                 // the cursor will be inside the input box ready for typing. Notice that this function must be
                                                  // started 'onload'.

document.getElementById('searchBar').addEventListener('keyup',search)   // This event listener applied to the input element will listen for keys typed.

function search(event) {
  if (event.which === 13) {           // Number 13 corresponds to the enter key.
    var searchTerm = document.getElementById('searchBar').value;  // Gets the text value typed inside the input box and stores it in te searchTerm var.
      if (searchTerm.length > 0) {
        window.location = "https://duckduckgo.com/?q=" + searchTerm;    // if enter key is clicked and theres a string in the text box, it will be
                                                                      // redirected to duckduckgo's search result for the value typed.
      }
  }else if (event.which === 27) {                           // In case of typing esc key (27):
    document.getElementById('searchBar').value = "";        // text boxt will display an empty string
    document.getElementById('searchBar').blur();            // input element will become unfocused

  }
}
