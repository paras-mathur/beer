const electron = require('electron');
var path = require("path");
const { app, BrowserWindow, session } = require('electron')
require('electron-reload')(__dirname);

app.on('ready', () => {

    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.116';
    callback({ cancel: false, requestHeaders: details.requestHeaders });
      });

    //Create the browser window
 
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: false,
            preload:   path.resolve(__dirname, 'scripts.js')
        }
    });
    mainWindow.loadURL('https://web.whatsapp.com');
    mainWindow.webContents.on('did-finish-load', function() {
        mainWindow.webContents.executeJavaScript(`
          
          function simulateMouse(node) {
            console.log('Node is - ' + node.innerText);
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
          
          async function sendMessageAll() {
            var listOfPeople = document.getElementById('to')
              .value.split(',');
            var arrayLength = listOfPeople.length;
            var msg = document.getElementById('message').value;
            for (var i = 0; i < arrayLength; i++) {
              console.log(listOfPeople[i]);
                await sendmessage(listOfPeople[i].trim() , msg);
            }
          }

          // Minified version of sendmessage function - https://javascript-minifier.com/
          //function sendmessage(e,t){var n="[title='"+e+"']",o=document.querySelector(n);simulateMouse(o),console.log("Done");for(var l=0;null==document.querySelector("#main  span[title='"+e+"']")&&l<100;)console.log("inside"),l++;var s=setInterval(function(){if(document.getElementsByClassName("_2S1VP copyable-text selectable-text").length>0){clearInterval(s);var e=document.getElementsByClassName("_2S1VP copyable-text selectable-text");console.log("Node 2 "+e[0]),simulateMouse(e[0]),console.log("After click Node 2 "+e[0]),e[0].innerText=t,event=document.createEvent("UIEvents"),event.initUIEvent("input",!0,!0,window,1),e[0].dispatchEvent(event),sendBtn=document.querySelector('span[data-icon="send"]'),simulateMouse(sendBtn)}},300)}
          function sendmessage(e,t){return new Promise((n,o)=>{var s="[title='"+e+"']",l=document.querySelector(s);simulateMouse(l),console.log("Done");var a=setInterval(function(){if(document.getElementsByClassName("_2S1VP copyable-text selectable-text").length>0){clearInterval(a);var e=document.getElementsByClassName("_2S1VP copyable-text selectable-text");console.log("Node 2 "+e[0]),simulateMouse(e[0]),console.log("After click Node 2 "+e[0]),e[0].innerText=t,event=document.createEvent("UIEvents"),event.initUIEvent("input",!0,!0,window,1),e[0].dispatchEvent(event),sendBtn=document.querySelector('span[data-icon="send"]'),simulateMouse(sendBtn),n("Done")}},300)})}
          
          function toggleView() {
            if (document.getElementsByClassName("wrapper")[0].style.display == "none") {
              document.getElementsByClassName("wrapper")[0].style.display = "";
            } else {
              document.getElementsByClassName("wrapper")[0].style.display = "none"
            }
          }
          
        `);
    });

    // mainWindow.webContents.on('did-finish-load', function() {
    //     mainWindow.webContents.executeJavaScript(require(path.resolve(__dirname, 'afterload.js')));
    // });

});