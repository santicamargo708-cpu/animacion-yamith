$(function() {

   
var estado=1;
var vol=1;
	$("#fondo").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20,21,22,23],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
    
    $("#luz").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    apaga:[0],
            prende: [1],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
        $("#garra").animateSprite({
		fps: 12,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            levanta: [0, 1, 2, 3,4,6,7,8,9,12,13,14,15],
            vuelve: [15,14,13,12,9,8,7,6,4,3,2,1,0],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });


	     $("#llanta1").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            rueda: [0, 1,2,5,6,7],
           
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });

	   $("#llanta2").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
           rueda: [0, 1,2,5,6,7],
           
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });

	    $("#llanta3").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
           rueda: [0, 1,2,5,6,7],
           
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });

	   $("#llanta4").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
           rueda: [0, 1,2,5,6,7],
           
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
//------------------------
//- Programacion Botones -
//------------------------
    
	$("#b_stop").on("click",function(){
    	vol=0;
        $("#fondo").animateSprite('stop');
		 $("#llanta1").animateSprite('stop');
		  $("#llanta2").animateSprite('stop');
		   $("#llanta3").animateSprite('stop');
		    $("#llanta4").animateSprite('stop');
            $("#luz").animateSprite('stop');
            $("#garra").animateSprite('stop');
    });
//-------------
    $("#b_play").on("click",function(){
    	vol=1;
         $("#fondo").animateSprite('play', 'camina');
		  $("#llanta1").animateSprite('play', 'rueda');
		    $("#llanta2").animateSprite('play', 'rueda');
			  $("#llanta3").animateSprite('play', 'rueda');
			   $("#llanta4").animateSprite('play', 'rueda');
		
	});
       $("#b_luces").on("click",function(){
    	estado++;
           if(estado%2==0){
         $("#luz").animateSprite('play', 'prende');
           }
           else{
                $("#luz").animateSprite('play', 'apaga');
           }
		
	});
    
       $("#b_platon1").on("click",function(){
          
            $("#garra").animateSprite('play', 'levanta');
           
           	});
      $("#b_platon2").on("click",function(){
          
            $("#garra").animateSprite('play', 'vuelve');
           
           	});
    
    $("#b_reinicia").on("click",function(){
    vol=0;
        $("#luces").animateSprite('play', 'apaga');
		 $("#llanta1").animateSprite('inicio');
		  $("#llanta2").animateSprite('inicio');
		   $("#llanta3").animateSprite('inicio');
		     $("#llanta4").animateSprite('inicio');
        $("#fondo").animateSprite('play', 'inicio');
        $("#garra").animateSprite('play', 'inicio');
    });
//-------------	



});