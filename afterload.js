// function sendmessage(input , message) {

//     var querySelectorIn = "[title=\'"+input+"\']";
//     var node = document.querySelector(querySelectorIn);
//     simulateMouse(node)
//     console.log('Done')
  
//     var count = 0;
//     while( document.querySelector('#main  span[title=\'"+input+"\']') == null && count < 100){
//       count++;
//     }
  
//     var node2 = document.getElementsByClassName('_2S1VP copyable-text selectable-text');
//     simulateMouse(node2[0])
//     //triggerKeyboardEvent(node2[0], 0)
//     node2[0].innerText = message;
//     // Simulate keyboard event
//     event = document.createEvent("UIEvents");
//     event.initUIEvent("input", true, true, window, 1);
//     node2[0].dispatchEvent(event);

//     sendBtn = document.querySelector("span[data-icon=\"send\"]");
//     simulateMouse(sendBtn)

//   }

function sendmessage(e,t){return new Promise((n,o)=>{var s="[title='"+e+"']",l=document.querySelector(s);simulateMouse(l),console.log("Done");var a=setInterval(function(){if(document.getElementsByClassName("_2S1VP copyable-text selectable-text").length>0){clearInterval(a);var e=document.getElementsByClassName("_2S1VP copyable-text selectable-text");console.log("Node 2 "+e[0]),simulateMouse(e[0]),console.log("After click Node 2 "+e[0]),e[0].innerText=t,event=document.createEvent("UIEvents"),event.initUIEvent("input",!0,!0,window,1),e[0].dispatchEvent(event),sendBtn=document.querySelector('span[data-icon="send"]'),simulateMouse(sendBtn),n("Done")}},300)})}
  
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
  
  async function sendMessageAll() {
    // var listOfPeople = document.getElementById('to')
    //   .value.split(',');
    if(customerList != null && customerList != undefined && customerList.length > 0){
      var listOfPeople = customerList;
      var arrayLength = listOfPeople.length;
      var msg = document.getElementById('message').value;
      for (var i = 0; i < arrayLength; i++) {
        console.log(listOfPeople[i]);
        await sendmessage(listOfPeople[i].trim() , msg);
      }
    } 
  }
  
  
  function toggleView(that) {
    if (document.getElementsByClassName("wrapper")[0].style.display == "none") {
      document.getElementsByClassName("wrapper")[0].style.display = "";
    } else {
      document.getElementsByClassName("wrapper")[0].style.display = "none"
    }
    if (that.classList.contains('clicked')) {
      that.classList.remove('clicked');
    } else {
      that.classList.add('clicked');
    }
  }
   
    
  
