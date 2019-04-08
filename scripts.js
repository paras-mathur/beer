var path = require("path");
var slimselect$ = require('./multiselect');

window.onload = () => {

// multiselect - autocomplete
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

  // Modal
  var s = document.createElement('script');
	s.type = 'text/javascript';
	var code = `!function(t,o){"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o():t.tingle=o()}(this,function(){function t(t){var o={onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]};this.opts=r({},o,t),this.init()}function o(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function e(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.type="button",this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML="×",this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function s(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}function i(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:l.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:n.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}function n(t){-1!==this.opts.closeMethods.indexOf("escape")&&27===t.which&&this.isOpen()&&this.close()}function l(t){-1!==this.opts.closeMethods.indexOf("overlay")&&!d(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}function d(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}function a(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}function r(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}var h=function(){var t,o=document.createElement("tingle-test-transition"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==o.style[t])return e[t]}(),c=!1;return t.prototype.init=function(){if(!this.modal)return e.call(this),i.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter(),this},t.prototype._busy=function(t){c=t},t.prototype._isBusy=function(){return c},t.prototype.destroy=function(){null!==this.modal&&(this.isOpen()&&this.close(!0),a.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.open=function(){if(!this._isBusy()){this._busy(!0);var t=this;return"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),h?this.modal.addEventListener(h,function o(){"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t.modal.removeEventListener(h,o,!1),t._busy(!1)},!1):("function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t._busy(!1)),this.checkOverflow(),this}},t.prototype.close=function(t){if(!this._isBusy()){if(this._busy(!0),t=t||!1,"function"==typeof this.opts.beforeClose){if(!this.opts.beforeClose.call(this))return}document.body.classList.remove("tingle-enabled"),window.scrollTo(0,this._scrollPosition),document.body.style.top=null,this.modal.classList.remove("tingle-modal--visible");var o=this;t?(o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1)):h?this.modal.addEventListener(h,function t(){o.modal.removeEventListener(h,t,!1),o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1)},!1):(o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1))}},t.prototype.setContent=function(t){return"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t)),this.isOpen()&&this.checkOverflow(),this},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){return s.call(this),this},t.prototype.setFooterContent=function(t){return this.modalBoxFooter.innerHTML=t,this},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){return this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),o.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),this},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){var t=window.innerHeight;return this.modalBox.clientHeight>=t},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(o.call(this),this.setStickyFooter(!0)))},{modal:t}});`;
	try {
		s.appendChild(document.createTextNode(code));
		document.body.appendChild(s);
	} catch (e) {
		s.text = code;
		document.body.appendChild(s);
	}

  //CSV to JSON
  var s = document.createElement('script');
	s.type = 'text/javascript';
	var code = `//var csv is the CSV file with headers
`;
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
label{display:inline-block;max-width:100%;margin-bottom:12px;font-weight:700;}
.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;}
.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}
.form-control::-moz-placeholder{color:#999;opacity:1;}
.form-control:-ms-input-placeholder{color:#999;}
.form-control::-webkit-input-placeholder{color:#999;}
.form-control::-ms-expand{background-color:transparent;border:0;}
textarea.form-control{height:auto;}
.form-group{margin-bottom:15px;}
.btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
.btn:active:focus,.btn:focus{outline-offset:-2px;}
.btn:focus,.btn:hover{color:#333;text-decoration:none;}
.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125);}
.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4;}
.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40;}
.btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74;}
.btn-primary:active{color:#fff;background-color:#286090;background-image:none;border-color:#204d74;}
.btn-primary:active:focus,.btn-primary:active:hover{color:#fff;background-color:#204d74;border-color:#122b40;}
textarea.form-control {
    height: auto;
}
.form-control {
    border: none;
    box-shadow: none;
    background-color: #f0f0f0;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
textarea {
    font-family: "Courier New";
    resize: none;
    overflow-y: auto;
    overflow-x: hidden;
}

.btn-info {
    color: #fff;
    background-color: #39df7f;
    border-color: #39df7f;
}
.btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}
.btn-sm {
    padding: 3px 6px;
    font-size: 12px;
    line-height: 1.8;
    border-radius: 3px;
    margin-bottom: 8px;
}
.container:after,.container:before{display:table;content:" ";}
.container:after{clear:both;}
.select-wrapper {
  margin: auto;
  max-width: 600px;
  width: calc(100% - 40px);
}

.ss-main{position:relative;display:inline-block;user-select:none;color:#666;width:100%}.ss-main .ss-single-selected{display:flex;cursor:pointer;width:100%;height:30px;padding:6px;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;box-sizing:border-box;transition:background-color .3s}.ss-main .ss-single-selected.ss-disabled{background-color:#dcdee2;cursor:not-allowed}.ss-main .ss-single-selected.ss-open-above{border-top-left-radius:0;border-top-right-radius:0}.ss-main .ss-single-selected.ss-open-below{border-bottom-left-radius:0;border-bottom-right-radius:0}.ss-main .ss-single-selected .placeholder{flex:1 1 100%;text-align:left;width:calc(100% - 30px);line-height:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ss-main .ss-single-selected .placeholder,.ss-main .ss-single-selected .placeholder *{display:flex;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ss-main .ss-single-selected .placeholder *{width:auto}.ss-main .ss-single-selected .placeholder .ss-disabled{cursor:pointer;color:#8a8a8a}.ss-main .ss-single-selected .ss-deselect{display:flex;align-items:center;justify-content:flex-end;flex:0 1 auto;margin:0 6px;font-weight:700}.ss-main .ss-single-selected .ss-deselect.ss-hide{display:none}.ss-main .ss-single-selected .ss-arrow{display:flex;align-items:center;justify-content:flex-end;flex:0 1 auto;margin:0 6px}.ss-main .ss-single-selected .ss-arrow span{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:3px;transition:transform .2s,margin .2s}.ss-main .ss-single-selected .ss-arrow span.arrow-up{transform:rotate(-135deg);margin:3px 0 0}.ss-main .ss-single-selected .ss-arrow span.arrow-down{transform:rotate(45deg);margin:-3px 0 0}.ss-main .ss-multi-selected{display:flex;flex-direction:row;cursor:pointer;min-height:30px;width:100%;padding:0 0 0 3px;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;box-sizing:border-box;transition:background-color .3s}.ss-main .ss-multi-selected.ss-disabled{background-color:#dcdee2;cursor:not-allowed}.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-disabled{color:#666}.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-value .ss-value-delete{cursor:not-allowed}.ss-main .ss-multi-selected.ss-open-above{border-top-left-radius:0;border-top-right-radius:0}.ss-main .ss-multi-selected.ss-open-below{border-bottom-left-radius:0;border-bottom-right-radius:0}.ss-main .ss-multi-selected .ss-values{display:flex;flex-wrap:wrap;justify-content:flex-start;flex:1 1 100%;width:calc(100% - 30px)}.ss-main .ss-multi-selected .ss-values .ss-disabled{display:flex;padding:4px 5px;margin:2px 0;line-height:1em;align-items:center;width:100%;color:#8a8a8a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@keyframes scaleIn{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes scaleOut{0%{transform:scale(1);opacity:1}to{transform:scale(0);opacity:0}}.ss-main .ss-multi-selected .ss-values .ss-value{display:flex;user-select:none;align-items:center;font-size:12px;padding:3px 5px;margin:3px 5px 3px 0;color:#fff;background-color:#5897fb;border-radius:4px;animation-name:scaleIn;animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:both}.ss-main .ss-multi-selected .ss-values .ss-value.ss-out{animation-name:scaleOut;animation-duration:.2s;animation-timing-function:ease-out}.ss-main .ss-multi-selected .ss-values .ss-value .ss-value-delete{margin:0 0 0 5px;cursor:pointer}.ss-main .ss-multi-selected .ss-add{display:flex;flex:0 1 3px;margin:9px 12px 0 5px}.ss-main .ss-multi-selected .ss-add .ss-plus{display:flex;justify-content:center;align-items:center;background:#666;position:relative;height:10px;width:2px;transition:transform .2s}.ss-main .ss-multi-selected .ss-add .ss-plus:after{background:#666;content:"";position:absolute;height:2px;width:10px;left:-4px;top:4px}.ss-main .ss-multi-selected .ss-add .ss-plus.ss-cross{transform:rotate(45deg)}.ss-main .ss-content{position:absolute;width:100%;margin:-1px 0 0;box-sizing:border-box;border:1px solid #dcdee2;z-index:1010;background-color:#fff;transform-origin:center top;transition:transform .2s,opacity .2s;opacity:0;transform:scaleY(0)}.ss-main .ss-content.ss-open{display:block;opacity:1;transform:scaleY(1)}.ss-main .ss-content .ss-search{display:flex;flex-direction:row;padding:8px 8px 6px}.ss-main .ss-content .ss-search.ss-hide,.ss-main .ss-content .ss-search.ss-hide input{height:0;opacity:0;padding:0;margin:0}.ss-main .ss-content .ss-search input{display:inline-flex;font-size:inherit;line-height:inherit;flex:1 1 auto;width:100%;min-width:0;height:30px;padding:6px 8px;margin:0;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;text-align:left;box-sizing:border-box;-webkit-box-sizing:border-box;-webkit-appearance:textfield}.ss-main .ss-content .ss-search input::placeholder{color:#bdbdbd;vertical-align:middle}.ss-main .ss-content .ss-search input:focus{box-shadow:0 0 5px #5897fb}.ss-main .ss-content .ss-search .ss-addable{display:inline-flex;justify-content:center;align-items:center;padding-bottom: 6px;cursor:pointer;font-size:22px;font-weight:700;flex:0 0 30px;height:30px;margin:0 0 0 8px;border:1px solid #dcdee2;border-radius:4px;box-sizing:border-box}.ss-main .ss-content .ss-addable{padding-top:0}.ss-main .ss-content .ss-list{max-height:250px;overflow-x:hidden;overflow-y:auto;text-align:left}.ss-main .ss-content .ss-list .ss-optgroup .ss-optgroup-label{padding:6px 10px;font-weight:700}.ss-main .ss-content .ss-list .ss-optgroup .ss-option{padding:6px 6px 6px 25px}.ss-main .ss-content .ss-list .ss-optgroup-label-selectable{cursor:pointer}.ss-main .ss-content .ss-list .ss-optgroup-label-selectable:hover{color:#fff;background-color:#5897fb}.ss-main .ss-content .ss-list .ss-option{border-bottom: 1px solid #f9f9f9;padding:6px 10px;cursor:pointer;user-select:none}.ss-main .ss-content .ss-list .ss-option *{display:inline-block}.ss-main .ss-content .ss-list .ss-option.ss-highlighted,.ss-main .ss-content .ss-list .ss-option:hover{color:#fff;background-color:#5897fb}.ss-main .ss-content .ss-list .ss-option.ss-disabled{cursor:default;color:#bdbdbd;background-color:#fff}.ss-main .ss-content .ss-list .ss-option.ss-hide{display:none}.ss-main .ss-content .ss-list .ss-option .ss-search-highlight{background-color:rgba(255,247,0,.38)}
.tingle-modal *{box-sizing:border-box}.tingle-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1001;display:-ms-flexbox;display:flex;visibility:hidden;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;overflow:hidden;-webkit-overflow-scrolling:touch;background:rgba(0,0,0,.8);opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:transform .2s ease}.tingle-modal--noClose .tingle-modal__close,.tingle-modal__closeLabel{display:none}.tingle-modal--confirm .tingle-modal-box{text-align:center}.tingle-modal--noOverlayClose{cursor:default}.tingle-modal__close{position:fixed;top:10px;right:28px;z-index:1000;padding:0;width:5rem;height:5rem;border:none;background-color:transparent;color:#f0f0f0;font-size:6rem;font-family:monospace;line-height:1;cursor:pointer;transition:color .3s ease}.tingle-modal__close:hover{color:#fff}.tingle-modal-box{position:relative;-ms-flex-negative:0;flex-shrink:0;margin-top:auto;margin-bottom:auto;width:45%;border-radius:4px;background:#fff;opacity:1;cursor:auto;transition:transform .3s cubic-bezier(.175,.885,.32,1.275);-ms-transform:scale(.8);transform:scale(.8)}.tingle-modal-box__content{padding: 1rem 3rem}.tingle-modal-box__footer{padding:1rem;width:auto;border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#f5f5f5;cursor:auto}.tingle-modal-box__footer::after{display:table;clear:both;content:""}.tingle-modal-box__footer--sticky{position:fixed;bottom:-200px;z-index:10001;opacity:1;transition:bottom .3s ease-in-out .3s}.tingle-enabled{position:fixed;right:0;left:0;overflow:hidden}.tingle-modal--visible .tingle-modal-box__footer{bottom:0}.tingle-enabled .tingle-content-wrapper{filter:blur(8px)}.tingle-modal--visible{visibility:visible;opacity:1}.tingle-modal--visible .tingle-modal-box{-ms-transform:scale(1);transform:scale(1)}.tingle-modal--overflow{overflow-y:scroll;padding-top:2vh}.tingle-btn{display:inline-block;margin:0 .5rem;padding:0.4rem 2rem;border:none;background-color:grey;box-shadow:none;color:#fff;vertical-align:middle;text-decoration:none;font-size:inherit;font-family:inherit;line-height:normal;cursor:pointer;transition:background-color .4s ease}.tingle-btn--primary{background-color:#3498db}.tingle-btn--danger{background-color:#e74c3c}.tingle-btn--default{background-color:#34495e}.tingle-btn--pull-left{float:left}.tingle-btn--pull-right{float:right}@media (max-width :540px){.tingle-modal{top:0;display:block;padding-top:60px;width:100%}.tingle-modal-box{width:auto;border-radius:0}.tingle-modal-box__content{overflow-y:scroll}.tingle-modal--noClose{top:0}.tingle-modal--noOverlayClose{padding-top:0}.tingle-modal-box__footer .tingle-btn{display:block;float:none;margin-bottom:1rem;width:100%}.tingle-modal__close{top:0;right:0;left:0;display:block;width:100%;height:60px;border:none;background-color:#2c3e50;box-shadow:none;color:#fff;line-height:55px}.tingle-modal__closeLabel{display:inline-block;vertical-align:middle;font-size:1.5rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.tingle-modal__closeIcon{display:inline-block;margin-right:.5rem;vertical-align:middle;font-size:4rem}}@supports ((-webkit-backdrop-filter:blur(12px)) or (backdrop-filter:blur(12px))){.tingle-modal{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}@media (max-width :540px){.tingle-modal{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}}.tingle-enabled .tingle-content-wrapper{filter:none}}

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

pre.code {
    font-family: Menlo,Roboto Mono,Courier New,monospace;
    font-size: 13px;
    color: #cc99cc;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.7;
    font-weight: 400;
    margin: 0.7rem 0;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    border-radius: 4px;
    -webkit-font-smoothing: antialiased;
    display: block;
    overflow: auto;
    background-color: #333;
    border: 0;
    box-shadow: 2px 4px 25px rgba(0,0,0,.15);
}

.token.variable {
    color: #f2777a;
}
.token.cdata, .token.comment, .token.prolog {
    color: #777c85;
}

  	</style>
  	`
  	)

  require(path.resolve(__dirname, 'preload.js'))
  console.log($('body div').length)
}


