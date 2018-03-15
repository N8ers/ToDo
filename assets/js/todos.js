// Check off Specific Todos by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//stopPropagation is jQuery method that... 
	//keeps the event from bubbling up 
	//and effecting the parent elements its in
	event.stopPropagation();
});
