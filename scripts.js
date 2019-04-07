var path = require("path");
var slimselect$ = require('./multiselect');

window.onload = () => {

 var s = document.createElement('script');
	s.type = 'text/javascript';
	var code = slimselect$.slimselect;
	try {
		s.appendChild(document.createTextNode(code));
		document.body.appendChild(s);
	} catch (e) {
		s.text = code;
		document.body.appendChild(s);
	}

  //TODO: fonts not working, need to fix
	// adding font-awesome link to head tag
	var link = document.createElement('link');
    link.type = "stylesheet";
    link.href = './public/fonts/fontawesome.min.css';
    document.head.appendChild(link);

  const $ = require('jquery')
//  require('bootstrap');

  $('head').append(
  	`
  	<style type="text/css"> 

h1{font-size:2em;margin:.67em 0;}
button,textarea{color:inherit;font:inherit;margin:0;}
button{overflow:visible;}
button{text-transform:none;}
button{-webkit-appearance:button;cursor:pointer;}
button::-moz-focus-inner{border:0;padding:0;}
textarea{overflow:auto;}
@media print{
*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important;}
p{orphans:3;widows:3;}
}
*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
button,textarea{font-family:inherit;font-size:inherit;line-height:inherit;}
h1{font-family:inherit;font-weight:500;line-height:1.1;color:inherit;}
h1{margin-top:20px;margin-bottom:10px;}
h1{font-size:36px;}
p{margin:0 0 10px;}
.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}
@media (min-width:768px){
.container{width:750px;}
}
@media (min-width:992px){
.container{width:970px;}
}
@media (min-width:1200px){
.container{width:1170px;}
}
label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700;}
.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;}
.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}
.form-control::-moz-placeholder{color:#999;opacity:1;}
.form-control:-ms-input-placeholder{color:#999;}
.form-control::-webkit-input-placeholder{color:#999;}
.form-control::-ms-expand{background-color:transparent;border:0;}
textarea.form-control{height:auto;}
.form-group{margin-bottom:15px;}
.btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
.btn:active:focus,.btn:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
.btn:focus,.btn:hover{color:#333;text-decoration:none;}
.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125);}
.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4;}
.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40;}
.btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74;}
.btn-primary:active{color:#fff;background-color:#286090;background-image:none;border-color:#204d74;}
.btn-primary:active:focus,.btn-primary:active:hover{color:#fff;background-color:#204d74;border-color:#122b40;}
.container:after,.container:before{display:table;content:" ";}
.container:after{clear:both;}
.select-wrapper {
  margin: auto;
  max-width: 600px;
  width: calc(100% - 40px);
}

.ss-main{position:relative;display:inline-block;user-select:none;color:#666;width:100%}.ss-main .ss-single-selected{display:flex;cursor:pointer;width:100%;height:30px;padding:6px;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;box-sizing:border-box;transition:background-color .3s}.ss-main .ss-single-selected.ss-disabled{background-color:#dcdee2;cursor:not-allowed}.ss-main .ss-single-selected.ss-open-above{border-top-left-radius:0;border-top-right-radius:0}.ss-main .ss-single-selected.ss-open-below{border-bottom-left-radius:0;border-bottom-right-radius:0}.ss-main .ss-single-selected .placeholder{flex:1 1 100%;text-align:left;width:calc(100% - 30px);line-height:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ss-main .ss-single-selected .placeholder,.ss-main .ss-single-selected .placeholder *{display:flex;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ss-main .ss-single-selected .placeholder *{width:auto}.ss-main .ss-single-selected .placeholder .ss-disabled{cursor:pointer;color:#8a8a8a}.ss-main .ss-single-selected .ss-deselect{display:flex;align-items:center;justify-content:flex-end;flex:0 1 auto;margin:0 6px;font-weight:700}.ss-main .ss-single-selected .ss-deselect.ss-hide{display:none}.ss-main .ss-single-selected .ss-arrow{display:flex;align-items:center;justify-content:flex-end;flex:0 1 auto;margin:0 6px}.ss-main .ss-single-selected .ss-arrow span{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:3px;transition:transform .2s,margin .2s}.ss-main .ss-single-selected .ss-arrow span.arrow-up{transform:rotate(-135deg);margin:3px 0 0}.ss-main .ss-single-selected .ss-arrow span.arrow-down{transform:rotate(45deg);margin:-3px 0 0}.ss-main .ss-multi-selected{display:flex;flex-direction:row;cursor:pointer;min-height:30px;width:100%;padding:0 0 0 3px;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;box-sizing:border-box;transition:background-color .3s}.ss-main .ss-multi-selected.ss-disabled{background-color:#dcdee2;cursor:not-allowed}.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-disabled{color:#666}.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-value .ss-value-delete{cursor:not-allowed}.ss-main .ss-multi-selected.ss-open-above{border-top-left-radius:0;border-top-right-radius:0}.ss-main .ss-multi-selected.ss-open-below{border-bottom-left-radius:0;border-bottom-right-radius:0}.ss-main .ss-multi-selected .ss-values{display:flex;flex-wrap:wrap;justify-content:flex-start;flex:1 1 100%;width:calc(100% - 30px)}.ss-main .ss-multi-selected .ss-values .ss-disabled{display:flex;padding:4px 5px;margin:2px 0;line-height:1em;align-items:center;width:100%;color:#8a8a8a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@keyframes scaleIn{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes scaleOut{0%{transform:scale(1);opacity:1}to{transform:scale(0);opacity:0}}.ss-main .ss-multi-selected .ss-values .ss-value{display:flex;user-select:none;align-items:center;font-size:12px;padding:3px 5px;margin:3px 5px 3px 0;color:#fff;background-color:#5897fb;border-radius:4px;animation-name:scaleIn;animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:both}.ss-main .ss-multi-selected .ss-values .ss-value.ss-out{animation-name:scaleOut;animation-duration:.2s;animation-timing-function:ease-out}.ss-main .ss-multi-selected .ss-values .ss-value .ss-value-delete{margin:0 0 0 5px;cursor:pointer}.ss-main .ss-multi-selected .ss-add{display:flex;flex:0 1 3px;margin:9px 12px 0 5px}.ss-main .ss-multi-selected .ss-add .ss-plus{display:flex;justify-content:center;align-items:center;background:#666;position:relative;height:10px;width:2px;transition:transform .2s}.ss-main .ss-multi-selected .ss-add .ss-plus:after{background:#666;content:"";position:absolute;height:2px;width:10px;left:-4px;top:4px}.ss-main .ss-multi-selected .ss-add .ss-plus.ss-cross{transform:rotate(45deg)}.ss-main .ss-content{position:absolute;width:100%;margin:-1px 0 0;box-sizing:border-box;border:1px solid #dcdee2;z-index:1010;background-color:#fff;transform-origin:center top;transition:transform .2s,opacity .2s;opacity:0;transform:scaleY(0)}.ss-main .ss-content.ss-open{display:block;opacity:1;transform:scaleY(1)}.ss-main .ss-content .ss-search{display:flex;flex-direction:row;padding:8px 8px 6px}.ss-main .ss-content .ss-search.ss-hide,.ss-main .ss-content .ss-search.ss-hide input{height:0;opacity:0;padding:0;margin:0}.ss-main .ss-content .ss-search input{display:inline-flex;font-size:inherit;line-height:inherit;flex:1 1 auto;width:100%;min-width:0;height:30px;padding:6px 8px;margin:0;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;text-align:left;box-sizing:border-box;-webkit-box-sizing:border-box;-webkit-appearance:textfield}.ss-main .ss-content .ss-search input::placeholder{color:#bdbdbd;vertical-align:middle}.ss-main .ss-content .ss-search input:focus{box-shadow:0 0 5px #5897fb}.ss-main .ss-content .ss-search .ss-addable{display:inline-flex;justify-content:center;align-items:center;padding-bottom: 6px;cursor:pointer;font-size:22px;font-weight:700;flex:0 0 30px;height:30px;margin:0 0 0 8px;border:1px solid #dcdee2;border-radius:4px;box-sizing:border-box}.ss-main .ss-content .ss-addable{padding-top:0}.ss-main .ss-content .ss-list{max-height:200px;overflow-x:hidden;overflow-y:auto;text-align:left}.ss-main .ss-content .ss-list .ss-optgroup .ss-optgroup-label{padding:6px 10px;font-weight:700}.ss-main .ss-content .ss-list .ss-optgroup .ss-option{padding:6px 6px 6px 25px}.ss-main .ss-content .ss-list .ss-optgroup-label-selectable{cursor:pointer}.ss-main .ss-content .ss-list .ss-optgroup-label-selectable:hover{color:#fff;background-color:#5897fb}.ss-main .ss-content .ss-list .ss-option{border-bottom: 1px solid #f9f9f9;padding:6px 10px;cursor:pointer;user-select:none}.ss-main .ss-content .ss-list .ss-option *{display:inline-block}.ss-main .ss-content .ss-list .ss-option.ss-highlighted,.ss-main .ss-content .ss-list .ss-option:hover{color:#fff;background-color:#5897fb}.ss-main .ss-content .ss-list .ss-option.ss-disabled{cursor:default;color:#bdbdbd;background-color:#fff}.ss-main .ss-content .ss-list .ss-option.ss-hide{display:none}.ss-main .ss-content .ss-list .ss-option .ss-search-highlight{background-color:rgba(255,247,0,.38)}

span.switch-area {
	display: block;
	width: 24px;
	height: 32px;
	margin: 10px;
	cursor: pointer;
	border-radius: 0px;
	z-index: 1001;
	position: absolute;
	right:0;
  	-webkit-transition: all .3s ease, -webkit-transform .2s ease;
    transition: all .3s ease, transform .2s ease;
  	background: -webkit-linear-gradient(top, transparent 0%, transparent 20%, #2E313C 20%, #2E313C 23%, transparent 23%, transparent 48%, #2E313C 48%, #2E313C 50%, transparent 47%, transparent 76%, #2E313C 76%, #2E313C 78%, transparent 78%), -webkit-linear-gradient(transparent, transparent);
  	background: linear-gradient(to bottom, transparent 0%, transparent 20%, #2E313C 20%, #2E313C 23%, transparent 23%, transparent 48%, #2E313C 48%, #2E313C 50%, transparent 47%, transparent 76%, #2E313C 76%, #2E313C 78%, transparent 78%), linear-gradient(transparent, transparent);
}
span.switch-area:active, span.switch-area:hover {
  -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
          transform: scale(0.9);
}
span.switch-area.clicked {
  background: -webkit-linear-gradient(135deg, transparent 0%, transparent 48%, #2E313C 49%, #2E313C 51%, transparent 51%, transparent 100%), -webkit-linear-gradient(45deg, transparent 0%, transparent 48%, #2E313C 49%, #2E313C 51%, transparent 51%, transparent 100%);
  background: linear-gradient(-45deg, transparent 0%, transparent 48%, #2E313C 49%, #2E313C 51%, transparent 51%, transparent 100%), linear-gradient(45deg, transparent 0%, transparent 48%, #2E313C 49%, #2E313C 51%, transparent 51%, transparent 100%);
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
span.switch-area.clicked:active, span.switch-area.clicked:hover {
  -webkit-transform: scale(0.9) rotate(180deg);
      -ms-transform: scale(0.9) rotate(180deg);
          transform: scale(0.9) rotate(180deg);
}

  	</style>
  	`
  	)

  require(path.resolve(__dirname, 'preload.js'))
  console.log($('body div').length)
}


