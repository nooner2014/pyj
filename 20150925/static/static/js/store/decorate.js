$(document).ready(function () {
	$('#picFile').on('click', function () {
	});
	$('.show').on('click', function () {
		$('#picFile').triggerHandler('click');
	});
	var result = $('.show-pic-phone');
	var topResult = $('.show-pic-top');
	$('#topFile').change(function () {
	    var file = this.files[0];
	    if(!/image\/\w+/.test(file.type)){
	        alert("请确保文件为图像类型");
	        return false;
	    }
	    var reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onload = function(e){
	    	topResult.html('<img src="'+this.result+'" alt="" width=275 height=30/>');
	  }
	})
	$('#picFile').change(function () {
	    var file = this.files[0];
	    if(!/image\/\w+/.test(file.type)){
	        alert("请确保文件为图像类型");
	        return false;
	    }
	    var reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onload = function(e){
	    	result.html('<img src="'+this.result+'" alt="" width=383 height=178/>');
	  }
	})
});