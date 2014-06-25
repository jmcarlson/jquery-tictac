//
// $('.box').on("click", function() {

// 	var boxId = $(this).attr('id');
// 	console.log("Box id is " + boxId);

// 	var boxValue = $(this).text();
// 	console.log("Box value is " + boxValue);

// 	(boxValue !== 'X') ? $(this).text('X') : $(this).text('O');

// })


$('.box').on("click", function() {
	var boxValue = $(this).text();
	(boxValue !== 'X') ? $(this).text('X') : $(this).text('O');
})
