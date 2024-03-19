({
	refreshView : function(component, event, helper) {
		var action = component.get("c.appCustomWrapListMthd"); 
        
        action.setCallback(this, function(response){
            var state = response.getState();            
            if(state=='SUCCESS'){
                var result = response.getReturnValue();
                component.set('v.wrapListItems',result);
            }
        });
        $A.enqueueAction(action);
	}
})