// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery-ui
//= require private_pub
//= require bootstrap
//= require streaminfo.js
//= require ckeditor/init
//= require jquery-ui
//= require streaminfo.js
//= require_tree .

setInterval(function(){
      // method to be executed;

var chatDiv = document.getElementsByClassName('chat')[0]; //I assume you only have one chat box!
chatDiv.scrollTop = chatDiv.scrollHeight;
    },20000);

setInterval(function(){
var recenttracks = document.getElementsByClassName('recenttracks')[0];
	recenttracks.load
    },5000);