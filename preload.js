jQuery = window.$;

setTimeout(function () {
  start();
}, 1000)

function start() {
  console.log('hello');
  startChecking();
}

function startChecking() {
  myVar = setInterval(function () {
    WhatsappmainDiv = document.getElementById('app');
    if (localStorage.getItem('last-wid')) {
      sayLoggedIn()
    }
  }, 500);
}

function sayLoggedIn() {
  clearInterval(myVar);
  WhatsappmainDiv.style.opacity = "1";
  showDashboard();
}

function showDashboard() {

  body = document.getElementsByTagName('body');
  headerCode = `
	<style>
		.wrapper{padding:10px;background-color:#fff;position: absolute;width: 100%;height: 100%;z-index: 1000;}
	</style>
	<script>
		  
	</script>

	<span id="close" onclick="toggleView(this)" class="switch-area">		
	</span>

	<div class="wrapper">

	<div class="container">
	  <h1>WhatPush</h1>

	  <div class="form-group">
			<label for="to">Select the senders</label>
			<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="toRadioOptions" id="to-1" value="toCL">
					<label class="form-check-label" for="to-1" style="font-weight: 100;">Custom List</label>
					<span style="margin-left:10px;"></span>
					<input class="form-check-input" type="radio" name="toRadioOptions" id="to-2" value="toGroup">
					<label class="form-check-label" for="to-2" style="font-weight: 100;">Group</label>
			</div>
      <div class="copyable-text taggify to selectable-text" id='to'></div>
      <select id="multiple" multiple>
      </select>
			<div style="margin-top:10px;"></div>
			
			<label for="message">Message:</label>
	  	<textarea class="form-control copyable-text selectable-text" rows="5" id="message"></textarea>
	  </div>

	  <button type="button" class="btn btn-primary" onclick="sendMessageAll()">Send</button>
	  
	</div>
	
	`
  body[0].insertAdjacentHTML('beforeend', headerCode);
  new SlimSelect({
    select: '#multiple',
    placeholder: 'Select Contact',
    data: [
      {text: 'contact 1'},
      {text: 'contact 2'},
      {text: 'contact 3'},
      {text: 'hacker 1'},
    ],
    addable: function (value) {      
      if (value === 'bad') {return false}
      return {
        text: value,
        value: value.toLowerCase()
      }
    },
    closeOnSelect: false,
    onChange: (info) => {
      window.customerList = info
    }
  }) 

}
