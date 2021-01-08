    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
       
      // var bottom_of_window = $(window).scrollTop() + $(window).height();
      var window_height = $(window).height();
       var window_top_position = $(window).scrollTop();
       var window_bottom_position = (window_top_position + window_height);
       $('.bottom').each( function(i){
            
           // var bottom_of_object = $(this).position().top+$(this).outerHeight();
            
           var element = $(this);
           var element_height = $(element).outerHeight();
           var element_top_position = $(element).offset().top;
           var element_bottom_position = (element_top_position + element_height);
          //  If the object is completely visible in the window, fade it it  bottom_of_window >= bottom_of_object
          //&&     (element_bottom_position >= window_top_position)     
            if( element_top_position<=(window_top_position + window_height*0.62)  && element_top_position>=(window_top_position + window_height*0.25)){
                
             // console.log();
             $(this).animate({'bottom':'0','opacity': '1'},1000);
             return;
            }
               
        }); 

        $('.left').each( function(i){
            
          // var bottom_of_object = $(this).position().top+$(this).outerHeight();
           
          var element = $(this);
          var element_height = $(element).outerHeight();
          var element_top_position = $(element).offset().top;
          var element_bottom_position = (element_top_position + element_height);
         //  If the object is completely visible in the window, fade it it  bottom_of_window >= bottom_of_object
         //&&     (element_bottom_position >= window_top_position)     
           if(element_top_position<=(window_top_position + window_height*0.55)  && element_top_position>=(window_top_position + window_height*0.25)){
               
            // console.log();
            $(this).animate({'left':'0','opacity': '1'},1000);
           // $(this).animate({'left':'0','opacity': '0'},1000);
           }
                  
              
       }); 

      
      
      
       $('.right').each( function(i){
            
        // var bottom_of_object = $(this).position().top+$(this).outerHeight();
         
        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = (element_top_position + element_height);
       //  If the object is completely visible in the window, fade it it  bottom_of_window >= bottom_of_object
       //&&     (element_bottom_position >= window_top_position)     
         if( element_top_position<=(window_top_position + window_height*0.55)  && element_top_position>=(window_top_position + window_height*0.25)){
             
          // console.log();
          $(this).animate({'right':'0','opacity': '1'},1000);
         }
            
     }); 
     $('.fadee').each( function(i){
            
      // var bottom_of_object = $(this).position().top+$(this).outerHeight();
       
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);
     //  If the object is completely visible in the window, fade it it  bottom_of_window >= bottom_of_object
     //&&     (element_bottom_position >= window_top_position)     
       if( element_top_position<=(window_top_position + window_height*0.60)  && element_top_position>=(window_top_position + window_height*0.25)){
           
        // console.log();
        $(this).animate({'opacity': '1'},1000);
       }
          
   }); 
       
    
    });
    
    $(document).ready(function(){
      $(".img-thumbnail").click(function(){
         var img=$(this).attr('src');
           $("#show-img").attr('src',img);
           $("#imgmodal").modal('show');
      });
  });