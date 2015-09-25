$(document).ready(function() {  
    //Default Action  
    $(".tab_content").hide(); //Hide all content  
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab  
    $(".tab_content:first").show(); //Show first tab content  
      
    //On Click Event  
    $("ul.tabs li").click(function() {  
        $("ul.tabs li").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active"); //Add "active" class to selected tab  
        $(".tab_content").hide(); //Hide all tab content  
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
        $(activeTab).fadeIn(); //Fade in the active content  
        return false;  
    });  
    $('.on, .off').unbind('click');
    $('.send').on('click', function () {
        var codeNum = $(this).closest('tr').find('td:eq(0)').text();
        $('.cash-background').find('.del-tip input.expressage').val(codeNum);
        $('.cash-background').show();
    });
    $('.order-off').on('click', function () {
        $('.cash-background').hide();
    });
    $('.order-on').on('click', function () {
        $('.cash-background').hide();
    });
    var orderTypeCheckBox = $('.order-type input[type="checkbox"]');
    orderTypeCheckBox.on('click', function () {
        orderTypeCheckBox.not($(this)).attr('checked', false);
        $('.order-date input').val('');
    });
  
}); 