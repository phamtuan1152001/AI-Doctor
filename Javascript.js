$(document).ready(function() {

    // Gets the video src from the data-src on each button
    
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    
      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
      
    
    
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
        
    $(function() {
  
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});
    
    
      
      
    // document ready  
    });
    // $('document').ready(function(){
    //     $('input[type="text"], input[type="message"], textarea').focus(function(){
    //         var background = $(this).attr('id');
    //         $('#' + background + '-form').addClass('formgroup-active');
    //         $('#' + background + '-form').removeClass('formgroup-error');
    //     });
    //     $('input[type="text"], input[type="message"], textarea').blur(function(){
    //         var background = $(this).attr('id');
    //         $('#' + background + '-form').removeClass('formgroup-active');
    //     });
    
    // function errorfield(field){
    //     $(field).addClass('formgroup-error');
    //     console.log(field);	
    // }
    
    // $("#waterform").submit(function() {
    //     var stopsubmit = false;
    
    // if($('#name').val() == "") {
    //     errorfield('#name-form');
    //     stopsubmit=true;
    // }
    // if($('#message').val() == "") {
    //     errorfield('#message-form');
    //     stopsubmit=true;
    // }
    //   if(stopsubmit) return false;
    // });
            
    // });

    // $(document).ready(function()
    // { 
    //    //khai báo biến submit form lấy đối tượng nút submit
    //    var submit = $("input[type='submit']");
 
    //    //khi nút submit được click
    //    submit.click(function()
    //    {
    //      //khai báo các biến dữ liệu gửi lên server
    //      var name = $("input[name='name']").val(); //lấy giá trị trong input user
  
    //      //Kiểm tra xem trường đã được nhập hay chưa
    //      if(name == ''){
    //        alert('Vui lòng nhập Tên người dùng');
    //        return false;
    //      }
  
    //      //Lấy toàn bộ dữ liệu trong Form
    //      var datas = $('form#form_input').serialize();
       
    //      //Sử dụng phương thức Ajax.
    //      $.ajax({
    //            type : 'POST', //Sử dụng kiểu gửi dữ liệu POST
    //            url : 'data.php', //gửi dữ liệu sang trang data.php
    //            data : datas, //dữ liệu sẽ được gửi
    //            success : function(data)  // Hàm thực thi khi nhận dữ liệu được từ server
    //                      { 
    //                         if(data == 'false') 
    //                         {
    //                           alert('Không có người dùng');
    //                         }else{
    //                           $('#content').html(data); //dữ liệu HTML trả về sẽ được chèn vào trong thẻ có id content
    //                         }
    //                      }
    //            });
    //            return false;
    //      });
    //  });

    