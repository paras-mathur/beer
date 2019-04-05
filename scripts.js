var path = require("path");

window.onload = () => {

	// adding autocomplete script to head tag
	var s = document.createElement('script');
	s.type = 'text/javascript';
	var code = 'var SelectPure=function(){"use strict";const t={value:"data-value",disabled:"data-disabled",class:"class",type:"type"};class e{constructor(t,e={},s={}){return this._node=t instanceof HTMLElement?t:document.createElement(t),this._config={i18n:s},this._setAttributes(e),e.textContent&&this._setTextContent(e.textContent),this}get(){return this._node}append(t){return this._node.appendChild(t),this}addClass(t){return this._node.classList.add(t),this}removeClass(t){return this._node.classList.remove(t),this}toggleClass(t){return this._node.classList.toggle(t),this}addEventListener(t,e){return this._node.addEventListener(t,e),this}removeEventListener(t,e){return this._node.removeEventListener(t,e),this}setText(t){return this._setTextContent(t),this}getHeight(){return window.getComputedStyle(this._node).height}setTop(t){return this._node.style.top=`${t}px`,this}focus(){return this._node.focus(),this}_setTextContent(t){this._node.textContent=t}_setAttributes(e){for(const s in e)t[s]&&e[s]&&this._setAttribute(t[s],e[s])}_setAttribute(t,e){this._node.setAttribute(t,e)}}var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};return class{constructor(t,i){this._config=s({},i),this._state={opened:!1},this._icons=[],this._boundHandleClick=this._handleClick.bind(this),this._boundUnselectOption=this._unselectOption.bind(this),this._boundSortOptions=this._sortOptions.bind(this),this._body=new e(document.body),this._create(t),this._setValue()}_create(t){const s="string"==typeof t?document.querySelector(t):t;this._parent=new e(s),this._select=new e("div",{class:"select-pure__select"}),this._label=new e("span",{class:"select-pure__label"}),this._optionsWrapper=new e("div",{class:"select-pure__options"}),this._config.multiple&&this._select.addClass("select-pure__select--multiple"),this._options=this._generateOptions(),this._select.addEventListener("click",this._boundHandleClick),this._select.append(this._label.get()),this._select.append(this._optionsWrapper.get()),this._parent.append(this._select.get())}_generateOptions(){return this._config.autocomplete&&(this._autocomplete=new e("input",{class:"select-pure__autocomplete",type:"text"}),this._autocomplete.addEventListener("input",this._boundSortOptions),this._optionsWrapper.append(this._autocomplete.get())),this._config.options.map(t=>{const s=new e("div",{class:"select-pure__option",value:t.value,textContent:t.label,disabled:t.disabled});return this._optionsWrapper.append(s.get()),s})}_handleClick(t){if(t.stopPropagation(),"select-pure__autocomplete"!==t.target.className){if(this._state.opened){const e=this._options.find(e=>e.get()===t.target);return e&&this._setValue(e.get().getAttribute("data-value"),!0),this._select.removeClass("select-pure__select--opened"),this._body.removeEventListener("click",this._boundHandleClick),this._select.addEventListener("click",this._boundHandleClick),void(this._state.opened=!1)}t.target.className!==this._config.icon&&(this._select.addClass("select-pure__select--opened"),this._body.addEventListener("click",this._boundHandleClick),this._select.removeEventListener("click",this._boundHandleClick),this._state.opened=!0,this._autocomplete&&this._autocomplete.focus())}}_setValue(t,e,s){if(t&&!s&&(this._config.value=this._config.multiple?this._config.value.concat(t):t),t&&s&&(this._config.value=t),this._options.forEach(t=>{t.removeClass("select-pure__option--selected")}),this._config.multiple){const t=this._config.value.map(t=>{const e=this._config.options.find(e=>e.value===t);return this._options.find(t=>t.get().getAttribute("data-value")===e.value.toString()).addClass("select-pure__option--selected"),e});return void this._selectOptions(t,e)}const i=this._config.value?this._config.options.find(t=>t.value.toString()===this._config.value):this._config.options[0];this._options.find(t=>t.get().getAttribute("data-value")===i.value.toString()).addClass("select-pure__option--selected"),this._selectOption(i,e)}_selectOption(t,e){this._selectedOption=t,this._label.setText(t.label),this._config.onChange&&e&&this._config.onChange(t.value)}_selectOptions(t,s){this._label.setText(""),this._icons=t.map(t=>{const s=new e("span",{class:"select-pure__selected-label",textContent:t.label}),i=new e("i",{class:this._config.icon,value:t.value});return i.addEventListener("click",this._boundUnselectOption),s.append(i.get()),this._label.append(s.get()),i.get()}),s&&this._optionsWrapper.setTop(Number(this._select.getHeight().split("px")[0])+5),this._config.onChange&&s&&this._config.onChange(this._config.value)}_unselectOption(t){const e=[...this._config.value],s=e.indexOf(t.target.getAttribute("data-value"));-1!==s&&e.splice(s,1),this._setValue(e,!0,!0)}_sortOptions(t){this._options.forEach(e=>{e.get().textContent.toLowerCase().startsWith(t.target.value.toLowerCase())?e.removeClass("select-pure__option--hidden"):e.addClass("select-pure__option--hidden")})}}}();';
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

.select-pure__select {
  align-items: center;
  background: #f9f9f8;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  color: #363b3e;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  justify-content: left;
  min-height: 44px;
  padding: 5px 10px;
  position: relative;
  transition: 0.2s;
  width: 100%;
}

.select-pure__options {
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  color: #363b3e;
  display: none;
  left: 0;
  max-height: 221px;
  overflow-y: scroll;
  position: absolute;
  top: 50px;
  width: 100%;
  z-index: 5;
}

.select-pure__select--opened .select-pure__options {
  display: block;
}

.select-pure__option {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  box-sizing: border-box;
  height: 44px;
  line-height: 25px;
  padding: 10px;
}

.select-pure__option--selected {
  color: #e4e4e4;
  cursor: initial;
  pointer-events: none;
}

.select-pure__option--hidden {
  display: none;
}

.select-pure__selected-label {
	background: #728690;
	border-radius: 4px;
	color: #fff;
	cursor: initial;
	display: inline-block;
	margin: 0px 5px 3px 0;
	padding: 4px 5px;
}

.select-pure__selected-label:last-of-type {
  margin-right: 0;
}

.select-pure__selected-label i {
  cursor: pointer;
  display: inline-block;
  margin-left: 7px;
}

.select-pure__selected-label i:hover {
  color: #e4e4e4;
}

.select-pure__autocomplete {
  background: #f9f9f8;
  border-bottom: 1px solid #e4e4e4;
  border-left: none;
  border-right: none;
  border-top: none;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  padding: 10px;
  width: 100%;
}

.fa-times:before{
	content: "x";
}

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


