//1. Create an HTML page that will contain text and a button. Clicking the button should hide the text. Clicking it again should display the text.



      // function hideAndDisplay() {
      //   let x = document.getElementById('text');
      //   if (x.style.display === 'none') {
      //     x.style.display = 'block';
      //   } else {
      //     x.style.display = 'none';
      //  }
      // }


//2. Create an HTML page with a progress bar and a button. Clicking the button should fill the progress bar by 5%. To create a progress bar you can use <progress> tag https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress

      // function load(){
      //   let file = document.getElementById('file');
      //   let value = +file.getAttribute('value');
      //   file.setAttribute('value', value +5 );
      // }

//3. Create an HTML page with a Like button. Clicking it should increase the number in the likes counter.

//=========================== Maryna explains Events ====================//

// adding events listener

      let button = document.getElementById('button');
        button.addEventListener('click',function(){
          console.log(100);
        });
      function buttonClick(){
        console.log(100);
      }
      button.addEventListener('click',buttonClick);

      window.addEventListener('resize', function(){
        console.log(window.innerWidth);
      });

// click - fires when we click on the element
//scroll - ui events, fires when user scrolls
// resize - ui events, fires when window is resized
// error - fires when there is an error in javascriot
//fires when document is loaded
//Mouse Event
// click fires when we click on an event
//mouseout - when mouse gous out of an element
//mousedown, mouseup, mousemove

//form events
// input - fires on every key press in the input
//submit - fires when form is submitted
//change - fires when checkboxis clicke, something is selected.
//cut, copy, select, paste - fires when input is writing and selecting text and cutting it.

