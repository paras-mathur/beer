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

function sendmessage(input, message) {

  var querySelectorIn = "[title=\'" + input + "\']";
  var node = document.querySelector(querySelectorIn);
  simulateMouse(node)
  console.log('Done')

  var myInterval = setInterval(function(){
    if( document.getElementsByClassName('_2S1VP copyable-text selectable-text').length > 0 ) {
      clearInterval(myInterval);
      var node2 = document.getElementsByClassName('_2S1VP copyable-text selectable-text');
      console.log('Node 2 ' + node2[0]);
      simulateMouse(node2[0])
      console.log('After click Node 2 ' + node2[0]);
      //triggerKeyboardEvent(node2[0], 0)
      node2[0].innerText = message;
      // Simulate keyboard event
      event = document.createEvent("UIEvents");
      event.initUIEvent("input", true, true, window, 1);
      node2[0].dispatchEvent(event);

      sendBtn = document.querySelector("span[data-icon=\"send\"]");
      simulateMouse(sendBtn)
    }
  }, 300);

}


function simulateMouse(node) {
  triggerMouseEvent(node, "mouseover");
  triggerMouseEvent(node, "mousedown");
  triggerMouseEvent(node, "mouseup");
  triggerMouseEvent(node, "click");
}

function triggerMouseEvent(node, eventType) {
  console.log('Event is - ' + eventType)
  let clickEvent = document.createEvent('MouseEvents');
  console.log('Event is - 1 ' + eventType)
  clickEvent.initEvent(eventType, true, true);
  console.log('Event is - 2 ' + eventType)
  node.dispatchEvent(clickEvent);
  console.log('Event is - 3 ' + eventType)
}

function triggerKeyboardEvent(el, keyCode) {
  var keyboardEvent = document.createEvent("KeyboardEvent");

  var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


  keyboardEvent[initMethod](
    "keydown",
    true, // bubbles oOooOOo0
    true, // cancelable
    window, // view
    false, // ctrlKeyArg
    false, // altKeyArg
    false, // shiftKeyArg
    false, // metaKeyArg
    keyCode,
    0 // charCode
  );

  el.dispatchEvent(keyboardEvent);
}

function sendMessageAll() {
  var listOfPeople = document.getElementById('to')
    .value.split(',');
  var arrayLength = listOfPeople.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log(listOfPeople[i]);
    setTimeout(function(){
      sendmessage(listOfPeople[i]);
    },1000)
    
  }
}

function showDashboard() {

  body = document.getElementsByTagName('body');

  headerCode = `
	<style>
		.wrapper{padding:10px;background-color:#fff;position: absolute;width: 100%;height: 100%;z-index: 1000;}
	</style>
	<script>

	</script>

	<div class="row" style="z-index: 1001;">
		<span id="close" class="float-right" style="
		font-size: x-large;
		color: black;
		background-color: white;
		z-index: 1001;
		position: absolute;
		" onclick="toggleView()">X</span>
	</div>

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
			<textarea class="form-control copyable-text selectable-text" rows="1" id="to" placeholder="Enter the list of names here ( comma separated )  "></textarea>
			
			<div style="margin-top:10px;"></div>
			
			<label for="message">Message:</label>
	  	<textarea class="form-control copyable-text selectable-text" rows="5" id="message"></textarea>
	  </div>

	  <button type="button" class="btn btn-primary" onclick="sendMessageAll()">Send</button>
	  
	</div>
	
	`
  body[0].insertAdjacentHTML('beforeend', headerCode);
  // document.getElementById('send').addEventListener("click", function(){
  // 	sendmessage()
  // });
}
