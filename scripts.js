var path = require("path");

window.onload = () => {
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

  	</style>
  	`
  	)

  require(path.resolve(__dirname, 'preload.js'))
  console.log($('body div').length)
}


