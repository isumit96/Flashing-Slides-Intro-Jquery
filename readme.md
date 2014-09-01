Slideman.jquery, Readme File:
==============================================================================
2014-09-01, [Sumit Raj // isumit96](http://sumitraj.com)

# DESCRIPTION

This is a very simple and very easy to use plugin for jquery. When called upon a list of div elements, It will automatically create a beautiful fullscreen introduction slideshow which will appear for once when your webpage is opened and then will fade out. The plugin also provides different attributes and options that let you customize the way the slideShow will be rendered eg. - direction of slides, speed and slowdown speed.

The plugin is perfect to be displayed when a new user visits your website so you can give them a gist of the webpage using various slides. Also will help in creating immersive video like introduction slides.

The script is licensed under [MIT License](http://www.opensource.org/licenses/mit-license.php) and you can use it for free!

# EXAMPLES

Coming soon

# FEATURES

* Not necessary to be used with full screen slides.
* Lots of options and callbacks to modify slidshow.
* Random or same direction of slides.
* Minimal size (the plugin is only of 4 Kbs).
* Not just limited to div, can be used with other elements too.
* Supports images, youtube videos, text, anything.

# USAGE
	
Javascript
```sh
$(document).ready(function() {
	$("#slidshow_container").slideman();
});
```		

HTML
```sh
<div id='yolo'>
	<div class='slideman'>Slide One</div>
	<div class='slideman'>Slde Two</div>
	<div class='slideman'>Slide Three</div>
</div>
```
		
# OPTIONS
* `direction` [('top','bottom','right','random'), default random]
Direction from which each slide will appear from.

* `slowdowndist` [integer, default: -30%]
Distace after which the slide slows down.

* `autoSpeed` [boolean, default: 4000]
Time taken to cover upto slowdowndist.

* `slowdownSpeed` [boolean, default: 2000]
Time taken to complete after slowdowndist.

# UPDATES/FEEDBACK & BUGS
If you found a bug, check out for updates or anything else on this project please visit the Flashing-Slides-Intro-Jquery Project Page on Github and post it there under "issues".
