'use strict';


  document.getElementById('menu-btn').onclick = function(evt) {
    evt.preventDefault();
    document.getElementById('gnavi').classList.toggle('open');
  
    evt.currentTarget.classList.toggle('close');
  };



  