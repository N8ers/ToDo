// Check off Specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//stopPropagation is jQuery method that... 
	//keeps the event from bubbling up 
	//and effecting the parent elements its in
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//gets new todo items from input
		var todoText = $(this).val();
		$(this).val("");
		//creat new li and add to ul
		$('ul').append("<li><span><i class= 'fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});