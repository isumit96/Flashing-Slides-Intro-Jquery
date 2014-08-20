<!DOCTYPE html>

<html>
	<head>
		<title>Jquery Slideman plugin demo</title>
		<meta charset="UTF-8">
		<meta name="description" content="Free Jquery Slideman plugin">
		<meta name="keywords" content="HTML,CSS,XML,JavaScript,Jquery,Plugin,Free">
		<meta name="author" content="http://sumitraj.com">
		<meta name="author" content="isumit96@gmail.com">
	</head>
</html>

	<script src='assets/js/jquery.js' type="text/javascript"></script>
	<script src='assets/js/slideman.js' type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="assets/css/slideman.css">

	<script type="text/javascript">

		$(document).ready(function() {
		
			$("#yolo").slideman();
			
		});

	</script>

	<body>

		<div id='yolo'>
			<div class='slideman'>
			
				<center>
					<h1 class='slide-intro'>Hello, This is the Jquery Slideman Plugin</h1>
				</center>
			
			</div>
			<div class='slideman'>
			
				<center>
					<h1 class='slide-intro'>Which gives you the ability to create beautiful introductory slides for your website.</h1>
				</center>
			
			</div>
			<div class='slideman'>
			
				<center>
					<h1 class='slide-intro'>Checkout more stuff made by me <a href='http://sumitraj.com'>on my website</a></h1>
				</center>
			
			</div>
		</div>

	<style>
	
	.slide-intro
	{
		display:block;
		position:relative;
		margin-top:22%;
		font-family:'calibri';
		font-size:200%;
		width:70%;
	}
	
	</style>
		
	</body>

</html>