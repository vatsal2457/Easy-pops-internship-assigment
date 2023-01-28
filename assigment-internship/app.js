// On click Button event Code
$('#save').on('click', function() {
    var fName = $('#firstName').val();
    var lName = $('#lastName').val();
    var count = $('#myData tr').length
    
    
    if(fName !="" && lName!=""){
        $('#myData tbody').append('<tr class="child"><td>'+count+'</td><td>'+fName+'</td><td>'+lName+'</td><td><a href="javascript:void(0);" class="remdata"><i class="fa fa-trash"></i></a></td></tr>');
    }
    });
    
    // On click delete event Code
    $(document).on('click','.remdata',function(){
        $(this).parent().parent().remove();
            $('#myData tbody tr').each(function(i){            
            $($(this).find('td')[0]).html(i+1);          
        });
    });