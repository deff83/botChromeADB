 <html>
<head>
   <style>
       .cat_obj {
           width:30px;
           height:30px;
           border-style: solid;
           border-width: 2px;
           border-color: #ff0000;
           position: relative;
       }
  
       .cat_ears, .cat_tail, .cat_body, .cat_head, .cat_legs {
           position: absolute;
       }
       .cat_ears {
           /*border-style: solid;
           border-width: 1px;
           border-color: #ffff00;*/
           top: -110px;
           left: -55px;
       }
    
       .cat_tail {
           /*border-style: solid;
           border-width: 1px;
           border-color: #00ff00;*/
           top: -73px;
           left: 60px;
       }
  
       .cat_body {
           /*border-style: solid;
           border-width: 1px;
           border-color: #0000ff;*/
           top: -50px; 
           left: -30px;
       }
  
       .cat_head {
           /*border-style: solid;
           border-width: 1px;
           border-color: #ff0000;*/
           top: -93px;
           left: -50px;
       }
  
       .cat_legs {
           /*border-style: solid;
           border-width: 1px;
           border-color: #ff00ff;*/
           bottom: 0px;
           left: -30px;
       }
       
       .wth {
           position: absolute;
           top: -160px;
           left: -90px;
           text-align: center;
           color: white;
       }
       body {
           background-color: #000000;
		   width:100%;
		   height:100%;
		   position:absolute;
		   display:-webkit-box;
		   display:-ms-flexbox;
		   display:flex;
			-webkit-box-pack: center;
			    -ms-flex-pack: center;
			        justify-content: center;
			-webkit-box-align:center;
			    -ms-flex-align:center;
			        align-items:center;
       }
    </style>
    <meta charset="utf8">
</head>
<body>
    <div class="cat_obj">
        <div class="cat_ears"> <img src="img/ears.png"> </div>
        <div class="cat_body"> <img src="img/body.png"> </div>
        <div class="cat_tail"> <img src="img/tail.png"> </div>
        <div class="cat_head"> <img src="img/head.png"> </div>
        <div class="cat_legs"> <img src="img/legs.png"> </div>
        <div class="wth"> <p> ЧУДОВИЩЕ КОШАКШТЕЙНА </p> </div>
    </div>
</body>
