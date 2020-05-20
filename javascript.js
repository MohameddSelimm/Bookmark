var nameRequired;
var urlRequired;


function IsEmpty() {

  var inputValue1 = document.getElementById("siteName").value;
  var inputValue2 = document.getElementById("siteUrl").value;
     if ( inputValue1 == ''  ) 
    {
            $("#nameRequired").show(1000);
           
            
    }
    if ( inputValue2 == ''  ) 
    {
          
            $("#urlRequired").show(1000);
            
    }
    

  }

  

