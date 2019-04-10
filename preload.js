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
    .cred button,.cred input{border:none;outline:0;background:0 0;font-family:'Open Sans',Helvetica,Arial,sans-serif}.cred .tip{font-size:20px;margin:40px auto 50px;text-align:center}.cred.cont{overflow:hidden;position:relative;width:900px;height:550px;margin:0 auto 100px;background:#fff}.cred .form{position:relative;width:640px;height:100%;transition:-webkit-transform 1.2s ease-in-out;transition:transform 1.2s ease-in-out;transition:transform 1.2s ease-in-out,-webkit-transform 1.2s ease-in-out;padding:50px 30px 0}.cred .sub-cont{overflow:hidden;position:absolute;left:640px;top:0;width:900px;height:100%;padding-left:260px;background:#fff;transition:-webkit-transform 1.2s ease-in-out;transition:transform 1.2s ease-in-out;transition:transform 1.2s ease-in-out,-webkit-transform 1.2s ease-in-out}.cred.cont.s--signup .sub-cont{-webkit-transform:translate3d(-640px,0,0);transform:translate3d(-640px,0,0)}.cred button{display:block;margin:0 auto;width:260px;height:36px;border-radius:30px;color:#fff;font-size:15px;cursor:pointer}.cred .img{overflow:hidden;z-index:2;position:absolute;left:0;top:0;width:260px;height:100%;padding-top:360px}.cred .img:before{content:'';position:absolute;right:0;top:0;width:900px;height:100%;background-image:url(https://lh3.googleusercontent.com/xSDcJvVxiQWotD5MczzXRRklm_80oY86RIX7jOSGSdMIzUGA2gTV2_nWe0SpVxFeFFLgHYmmCWr0po4i7XWEmsQZ4nt18XPAswL7yMztfl6B3NlZsTv_yh6epVxE9opDAahNcDb9rqppFVeImLhJpf4NYBvObXT3tVI8DytIYOBZc7fG7WM4eiUDOze-IlVgcqK3smc0tvMePDa77VnnVZTR65kcXCiMyM-29vyhVsgjKyKqdI2m7dBVISQQKWbJgFaObzQKxRt3CNunXxANMl1iMAspN_OacpggWYgTjs5K_82AzHMKtvxslCsWzOQOqaqI7GLcow2Au9YCiXX0n0wKJzIyMQBQQAkdYqPknfz3T1ySYtxfX4kdcqOS8z_pihnuhWeQ_nJFAUfodePAW84TvQ-i4X6aLVKaV33FifObn_H1NyHe4O2MQa4efqKqWj2_9N-IvTyaAKHBgKRMRoYojDJxBAomwg2eCA8okAtWqY4TFUSB0jK-NNhYL0XMdPxmVcTTFN5z_rsEdPfwwBZycbfNOJaJ0fCxf5VcCmA3HpsoBHUw4aXV5E1IfoUJUofeI6ZYj_B4_N-qLny233REn9nBqHkAmwRMyYBUMOS3kWhzfAb9dMSwnjmSilg9Pw0Z5vIq6ZB7pGRhCF1d1zk6R4_gQU7H=w600-h400-no);background-size:cover;transition:-webkit-transform 1.2s ease-in-out;transition:transform 1.2s ease-in-out;transition:transform 1.2s ease-in-out,-webkit-transform 1.2s ease-in-out}.cred .img:after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.6)}.cred.cont.s--signup .img:before{-webkit-transform:translate3d(640px,0,0);transform:translate3d(640px,0,0)}.cred .img__text{z-index:2;position:absolute;left:0;top:50px;width:100%;padding:0 20px;text-align:center;color:#fff;transition:-webkit-transform 1.2s ease-in-out;transition:transform 1.2s ease-in-out;transition:transform 1.2s ease-in-out,-webkit-transform 1.2s ease-in-out}.cred .img__text h2{margin-bottom:10px;font-weight:400}.cred .img__text p{font-size:14px;line-height:1.5}.cred.cont.s--signup .img__text.m--up{-webkit-transform:translateX(520px);transform:translateX(520px)}.cred .img__text.m--in{-webkit-transform:translateX(-520px);transform:translateX(-520px)}.cred.cont.s--signup .img__text.m--in{-webkit-transform:translateX(0);transform:translateX(0)}.cred .img__btn{overflow:hidden;z-index:2;position:relative;width:100px;height:36px;margin:0 auto;background:0 0;color:#fff;text-transform:uppercase;font-size:15px;cursor:pointer}.cred .img__btn:after{content:'';z-index:2;position:absolute;left:0;top:0;width:100%;height:100%;border:2px solid #fff;border-radius:30px}.cred .img__btn span{position:absolute;left:0;top:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%;transition:-webkit-transform 1.2s;transition:transform 1.2s;transition:transform 1.2s,-webkit-transform 1.2s}.cred .img__btn span.m--in{-webkit-transform:translateY(-72px);transform:translateY(-72px)}.cred.cont.s--signup .img__btn span.m--in{-webkit-transform:translateY(0);transform:translateY(0)}.cred.cont.s--signup .img__btn span.m--up{-webkit-transform:translateY(72px);transform:translateY(72px)}.cred h2{width:100%;font-size:26px;text-align:center}.cred label{display:block;width:260px;margin:25px auto 0;text-align:center}.cred label span{font-size:12px;color:#cfcfcf;text-transform:uppercase}.cred input{display:block;width:100%;margin-top:5px;padding-bottom:5px;font-size:16px;border-bottom:1px solid rgba(0,0,0,.4);text-align:center}.cred .forgot-pass{margin-top:15px;text-align:center;font-size:12px;color:#cfcfcf}.cred .submit{margin-top:40px;margin-bottom:20px;background:#6f9ef5;text-transform:uppercase}.cred .fb-btn{border:2px solid #d3dae9;color:#8fa1c7}.cred .fb-btn span{font-weight:700;color:#455a81}.cred .sign-in{transition-timing-function:ease-out}.cred.cont.s--signup .sign-in{transition-timing-function:ease-in-out;transition-duration:1.2s;-webkit-transform:translate3d(640px,0,0);transform:translate3d(640px,0,0)}.cred .sign-up{-webkit-transform:translate3d(-900px,0,0);transform:translate3d(-900px,0,0)}.cred.cont.s--signup .sign-up{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.cred .icon-link{position:absolute;left:5px;bottom:5px;width:32px}.cred .icon-link img{width:100%;vertical-align:top}.cred .icon-link--twitter{left:auto;right:5px}
	</style>
	<span id="close" onclick="toggleView(this)" class="switch-area"></span>
	<div class="wrapper">
    <div class="container" style="display:none">
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
	</div>
  
  <div class="cont cred">
    <div class="form sign-in"> <h2>Welcome back,</h2> <label> <span>Email</span> <input type="email"/> </label> <label> <span>Password</span> <input type="password"/> </label> <p class="forgot-pass">Forgot password?</p><button type="button" class="submit">Sign In</button> <button type="button" class="fb-btn">Connect with <span>idobeer</span></button> </div><div class="sub-cont"> <div class="img"> <div class="img__text m--up"> <h2>New here?</h2> <p>Sign up and discover great amount of new opportunities!</p></div><div class="img__text m--in"> <h2>One of us?</h2> <p>If you already has an account, just sign in. We've missed you!</p></div><div class="img__btn"> <span class="m--up">Sign Up</span> <span class="m--in">Sign In</span> </div></div><div class="form sign-up"> <h2>Time to feel like home,</h2> <label> <span>Name</span> <input type="text"/> </label> <label> <span>Email</span> <input type="email"/> </label> <label> <span>Password</span> <input type="password"/> </label> <button type="button" class="submit">Sign Up</button> <button type="button" class="fb-btn">Join with <span>idobeer</span></button> </div></div>
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
  
  document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont.cred').classList.toggle('s--signup');
  });

}
