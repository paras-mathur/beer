function sendmessage(input , message) {

    var querySelectorIn = "[title=\'"+input+"\']";
    var node = document.querySelector(querySelectorIn);
    simulateMouse(node)
    console.log('Done')
  
    var count = 0;
    while( document.querySelector('#main  span[title=\'"+input+"\']') == null && count < 100){
      count++;
    }
  
    var node2 = document.getElementsByClassName('_2S1VP copyable-text selectable-text');
    simulateMouse(node2[0])
    //triggerKeyboardEvent(node2[0], 0)
    node2[0].innerText = message;
    // Simulate keyboard event
    event = document.createEvent("UIEvents");
    event.initUIEvent("input", true, true, window, 1);
    node2[0].dispatchEvent(event);

    sendBtn = document.querySelector("span[data-icon=\"send\"]");
    simulateMouse(sendBtn)
    
    // setTimeout(
    //   function () {
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
    //   }, 3000);

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
  
  function sendMessageAll() {
    var listOfPeople = document.getElementById('to')
      .value.split(',');
    var arrayLength = listOfPeople.length;
    for (var i = 0; i < arrayLength; i++) {
      console.log(listOfPeople[i]);
      sendmessage(listOfPeople[i])
    }
  }
  
  
  function toggleView() {
    if (document.getElementsByClassName("wrapper")[0].style.display == "none") {
      document.getElementsByClassName("wrapper")[0].style.display = "";
    } else {
      document.getElementsByClassName("wrapper")[0].style.display = "none"
    }
  }
  

  function sendmessage(input) {

            var querySelectorIn = "[title="+input+"]";
            var node = document.querySelector(querySelectorIn);
            simulateMouse(node)
            console.log('Done')
          
            setTimeout(
              function () {
                var node2 = document.getElementsByClassName('_2S1VP copyable-text selectable-text');
                simulateMouse(node2[0])
                //triggerKeyboardEvent(node2[0], 0)
                node2[0].innerText = "Testing";
                // Simulate keyboard event
                event = document.createEvent("UIEvents");
                event.initUIEvent("input", true, true, window, 1);
                node2[0].dispatchEvent(event);
          
                sendBtn = document.querySelector("span[data-icon=\"send\"]");
                simulateMouse(sendBtn)
              }, 3000);

          }