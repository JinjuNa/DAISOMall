
window.onload = function(){
// scrolly
	// scrolly();

// scrollTo

// $(function(){
// 	$('.sidebar li a').click(function(e){
// 		$.scrollTo(this.hash || 0,800);
// 		e.preventDefault();
// 	});

// });

// $('#parent').animate({       
// 	scrollTop: $("#" + itemId).offset().top  - $('#parent').offset().top + $('#parent').scrollTop()
// 	 }, 500);

// $('body').animate({scrollTop: $('#category1').offset().top-10},1000);

// headerTop 광고 닫기 기능
$('#close').on('click', function(){
	$('.headerTop').slideUp();
});

//전체카테고리 버튼 보이기/숨기기
var onOff=true
$('.allcategorybutton').on('click', function(){
	onOff = !onOff;
	if(onOff==false){
	$('.total_cate_box').show();
	}else{
	$('.total_cate_box').hide();
	}
});


//mainVisaul 슬라이더
$(".regular").slick({
	autoplaySpeed:2500,
	autoplay:true,
	dots: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows:true,
	centerMode: false,
	prevArrow : '.mainVisual .button .button_prev',
	nextArrow : '.mainVisual .button .button_next',
	customPaging : function(s,i){
		return '<a href="#"></a>';
	},
	// a태그 기능이 안없어짐 
  }); 

  
  //best 슬라이더
  $(".itemslider").slick({
	autoplaySpeed:3500,
	autoplay:true,
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows:true,
	centerMode: false,
	prevArrow : '.best .button .button_prev',
	nextArrow : '.best .button .button_next',
	customPaging : function(s,i){
		return '<a href="#"></a>';
	},
	});

	// each???/
	//category1 슬라이더

    // var obj=[
	// 	"'.category1slider'",  
	// 	"'.category2slider'",
	// 	"'.category3slider'",
	// 	"'.category4slider'",
	// 	"'.category5slider'",
	// 	"'.category6slider'",
	// 	"'.category7slider'",
	// 	"'.category8slider'",
	// 	"'.category9slider'",
	// 	"'.category10slider'",
	// 	"'.category11slider'",
	// 	"'.category12slider'",
	// 	"'.category13slider'",
	// 	"'.category14slider'",
	// 	"'.category15slider'",
	// 	"'.category16slider'",
	// 	"'.category17slider'",
	// 	"'.category18slider'",
    // ];

    // var c=[ ];
    // for(var i=0; i<18; i++){
    //     c.push("'.category" +(i+1)+"slider'");
	// }
	
	// var prev=[ ];
	// for(var i=0; i<18; i++){
    //     prev.push("'#category" +(i+1)+".button .button_prev'");
	// }

	// var next=[ ];
	// for(var i=0; i<18; i++){
    //     next.push("'#category" +(i+1)+".button .button_next'");
	// }


	// for(var i=0; i<18; i++){
	// 		$(c[i]).slick({
	// 		autoplaySpeed:4500,
	// 		autoplay:true,
	// 		dots: true,
	// 		infinite: true,
	// 		slidesToShow: 3,
	// 		slidesToScroll: 1,
	// 		arrows:true,
	// 		centerMode: false,
	// 		prevArrow : prev[i],
	// 		nextArrow : next[i],
	// 		customPaging : function(s,i){
	// 			return '<a href="#"></a>';
	// 		},
	// 		});

	// 	}

	//category2 슬라이더
	// $(".category2slider").slick({
	// autoplaySpeed:4500,
	// autoplay:true,
	// dots: true,
	// infinite: true,
	// slidesToShow: 3,
	// slidesToScroll: 1,
	// arrows:true,
	// centerMode: false,
	// prevArrow : '#category2 .button .button_prev',
	// nextArrow : '#category2 .button .button_next',
	// customPaging : function(s,i){
	// 	return '<a href="#"></a>';
	// },
	// });




	//slider dots a링크 없애기
	$('.slick-dots').find('a').click(
	function(e){
		e.preventDefault();         //a링크 기능 없애줌
	});




	//categorybar
		//배열 사용하기
		var bg=['#f6699e','#1992df','#7e57c2', '#00aad4', '#ee9200','#62ab66','#9d7a6d', '#dd6641','#5868be','#83be41','#254e98','#3e8d86','#97563e','#b74b4b','#ab47bc','#00b599','#19b1ba','#f6699e']

	$('.sidebar__inner li').on('click',function(){

		var i =$(this).index();

		$(this).siblings().find('a').css({'backgroundColor':'#fff', 'color':'#666'});
		$(this).find('a').css({
			'backgroundColor' : bg[i-1],
			'color' : '#fff'
		});
		$('.categorybar .title a').css({'backgroundColor': '#2a2a2a','color':'#efefef'});

		var move  = $('.hotcategory>li').eq(i-1).offset().top;
		//카테고리바 위에 여백
		$('html, body').animate({
			'scrollTop' : move-250
		})

	});





	// $("#bar01").on('click', function(){
		
	// 	$(this).siblings().find('a').css({'backgroundColor':'#fff', 'color':'#666'});
	// 	$(this).find('a').css({'backgroundColor':'#f6699e','color':'#fff'});
	// 	$('.categorybar .title a').css({'backgroundColor': '#2a2a2a','color':'#efefef'});
	// })

	// $("#bar02").on('click', function(){
	// 	$(this).siblings().find('a').css({'backgroundColor':'#fff', 'color':'#666'});
	// 	$(this).find('a').css({'backgroundColor':'#1992df','color':'#fff'});
	// 	$('.categorybar .title a').css({'backgroundColor': '#2a2a2a','color':'#efefef'});
	// })
	//sticky siderbar





	  $(window).on('scroll',function(){

		var scr = $(window).scrollTop();
		var hot = $('.hotwrap').offset().top;
		console.log(hot);
	
	
		if(scr >= (hot+50) && scr <= 8050){
	
			$('.sidebar').css({
				'position' : 'fixed'
			})
		}else{

			$('.sidebar').css({
				'position' : 'absolute',
			})
		}
	
	
	
	
	});






}