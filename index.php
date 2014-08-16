<script src='scripts/jquery.js'></script>

<script src='plugin.js'></script>

<script>

    $(document).ready(function() {
      $("#yolo").slideman();
    });

</script>

<body>

	<div id='yolo'>
		<div class='ye-lo' slowdownspeed='2'></div>
		<div class='ye-bl' slide='yay'></div>
		<div class='ye-lo' slide='yay'></div>
	</div>

</body>









<style>
body
{
margin:0px;
}

.ye_pic
{
diplay:inline-block;
width:60%;
overflow:hidden;
}

.osa_pic
{
display:block;
max-width:100%;
min-height:500px;
}

.ye_pac
{
display:block;
width:100%;
height:100%;

}

.ye-lo
{
background-color: #F7FF0D;
background-image: -ms-radial-gradient(center top,ellipse cover,#F7FF0D 0,#FFDD00 100%);
background-image: -moz-radial-gradient(center top,ellipse farthest-corner,#F7FF0D 0,#FFDD00 100%);
background-image: -o-radial-gradient(center top,ellipse cover,#F7FF0D 0,#FFDD00 100%);
background-image: -webkit-gradient(radial,center top,0,center top,559,color-stop(0,#F7FF0D),color-stop(1,#FFDD00));
background-image: -webkit-radial-gradient(center top,ellipse cover,#F7FF0D 0,#FFDD00 100%);


display:block;
position:absolute;
width:100%;
height:100%;
top:-100%;
}

.ye-bl
{
background-color: #137CED;
background-image: -ms-radial-gradient(center top,ellipse cover,#137CED 0,#87C1FF 100%);
background-image: -moz-radial-gradient(center top,ellipse farthest-corner,#137CED 0,#87C1FF 100%);
background-image: -o-radial-gradient(center top,ellipse cover,#137CED 0,#87C1FF 100%);
background-image: -webkit-gradient(radial,center top,0,center top,559,color-stop(0,#137CED),color-stop(1,#87C1FF));
background-image: -webkit-radial-gradient(center top,ellipse cover,#137CED 0,#87C1FF 100%);


display:block;
position:absolute;
width:100%;
height:100%;
top:-100%;
}

.ye-re
{
background-color: #4AD604;
background-image: -ms-radial-gradient(center top,ellipse cover,#4AD604 0,#96FF61 100%);
background-image: -moz-radial-gradient(center top,ellipse farthest-corner,#4AD604 0,#96FF61 100%);
background-image: -o-radial-gradient(center top,ellipse cover,#4AD604 0,#96FF61 100%);
background-image: -webkit-gradient(radial,center top,0,center top,559,color-stop(0,#4AD604),color-stop(1,#96FF61));
background-image: -webkit-radial-gradient(center top,ellipse cover,#4AD604 0,#96FF61 100%);


display:block;
position:absolute;
width:100%;
height:100%;
right:-100%;
}

.intro_whole
{
display:block;
position:fixed;
width:100%;
height:100%;
background:white;
z-index:+1;
}
</style>
