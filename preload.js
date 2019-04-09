jQuery = window.$;
//const csv2json = require('./node_modules/csvjson-csv2json/csv2json.js');

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

function csvJSON(csv){
  console.log(csv)
  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  for(var i=1;i<lines.length;i++){
    var obj = {};
    var currentline=lines[i].split(",");
    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result; //JavaScript object
  //return JSON.stringify(result); //JSON
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
	  <h1>WhatsPush</h1>

	  <div class="form-group">
			<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="toRadioOptions" id="to-1" value="toCL">
					<label class="form-check-label" for="to-1" style="font-weight: 100;">Custom List</label>
					<span style="margin-left:10px;"></span>
					<input class="form-check-input" type="radio" name="toRadioOptions" id="to-2" value="toGroup">
					<label class="form-check-label" for="to-2" style="font-weight: 100;">Group</label>
          <span style="margin-right:25px;"></span>
          <button type="button" class="bulk-upload-btn btn btn-info btn-sm">+ Bulk Upload</button>
			</div>
      <select class="copyable-text taggify toContacts selectable-text" id="toContacts" multiple>
      </select>
			<div style="margin-top:10px;"></div>
			
			<label for="message">Message:</label>
	  	<textarea class="form-control copyable-text selectable-text" rows="5" id="message"></textarea>
	  </div>

	  <button type="button" class="send-message-all-btn tingle-btn tingle-btn--primary" onclick="sendMessageAll()">Send</button>
	  
	</div>`

  body[0].insertAdjacentHTML('beforeend', headerCode);

  new SlimSelect({
    select: '#toContacts',
    placeholder: 'Select Contact',
    data: [
      {text: 'Me'},
      {text: 'Test Contact'},
      {text: 'Jack Sparrow'},
      {text: 'John Sena'},
      {text: 'Namo'},
      {text: 'Raga'}
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

  // instanciate new modal
var bulkUploadModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // before cloase callback
        return true; // close the modal
    }
  });
  // set content
  bulkUploadModal.setContent(`<label>Paste your CSV here</label>
  <pre class="code">
      <span class="token comment">
      // On pasting, follow this format!(without spaces)</span>
      <span class="token variable">name,number</span>
      Namo,9876543210
      John Sena,118776655432
  </pre>
  <textarea id="csvCon" class="form-control input save" rows="18" spellcheck="false" data-gramm="true" data-gramm_editor="true" style="z-index: auto; position: relative; line-height: 20px; font-size: 14px; transition: none 0s ease 0s; background: transparent !important;">`);
  bulkUploadModal.addFooterBtn('Upload', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function() {
    var csvText = document.getElementById('csvCon').value
    
    var json = csvJSON(csvText);
    console.log(json);
    bulkUploadModal.close();
  });
  
  document.querySelector('.bulk-upload-btn').addEventListener("click",function(e){    
    bulkUploadModal.open()
  })

}
