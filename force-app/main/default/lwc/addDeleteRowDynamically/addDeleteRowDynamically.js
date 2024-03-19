import { LightningElement } from 'lwc';

export default class AddDeleteRowDynamically extends LightningElement {


    $(document).ready(function() {     
    
        var index = 0;
          $('#mybtn').click(function() {		
              index++;
              $("#myItem").clone().attr("id", "myItem" + index).appendTo("#main");		
              $("#myItem" + index).find("a").attr("rel", index);
              $("#myItem" + index).show();
          });	
        })
        
        
        function deleteItem(obj)
        {
            $("#myItem" + obj.rel).remove();
        }
}