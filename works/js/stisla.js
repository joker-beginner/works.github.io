$(function() {
	let loading = {
		show: function() {
			$("body").append("<div class='main-loading'></div>");
		},
		hide: function() {
			$(".main-loading").remove();
		}
	}
	$("body").easeScroll();

	$("[data-bg]").each(function() {
		let $this = $(this),
				$bg = $this.attr("data-bg");

		$this.css({
			backgroundImage: 'url('+$bg+')',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			backgroundSize: 'center'
		});
		$this.prepend("<div class='overlay'></div>");
	});

	$(".smooth-link").click(function() {
		let $this = $(this),
				$target = $($this.attr("href"));
		$("html, body").animate({
			scrollTop: $target.offset().top - ($(".main-navbar").outerHeight() - 1)
		});

		return false;
	});

	$(window).scroll(function() {
		let $this = $(this);
		if($this.scrollTop() > $(".hero").outerHeight() - 150) {
			$(".main-navbar").addClass("bg-dark");
		}else{
			$(".main-navbar").removeClass("bg-dark");
		}

		$("section").each(function() {
			if($this.scrollTop() >= ($(this).offset().top - $(".main-navbar").outerHeight())) {
				$(".smooth-link").parent().removeClass("active");
				$(".smooth-link[href='#"+$(this).attr("id")+"']").parent().addClass('active');
			}
		});
	});
	$(".col-spacing").children('.col-12').click(function() {
		let $this = $(this);
		index = $this.index();
		$.ajax({
			url: "mock/article.json",
			dataType: 'json',
			success: function(data) {
				var orderData = {
	            	"roomNum": roomNum,
	            	"orderDay" : orderDay,
	            	"orderTime": orderTime
	            };
	            var jsonStr = JSON.stringify(orderData);
				window.location.href = "/works/works.html?id="+index+"orderData"+jsonStr;

			}
		});
	});
	// $(".col-spacing").children('.col-12').click(function() {
	// 	let $this = $(this),
	// 		$id = $this.attr("id");
	// 		index = $this.index();
	// 	$("body").css({
	// 		overflow: "hidden"
	// 	});
		
	// 	console.log(index)

	// 	$.ajax({
	// 		url: "mock/article.json",
	// 		dataType: 'json',
	// 		beforeSend: function() {
	// 			loading.show();
	// 		},
	// 		complete: function() {
	// 			loading.hide();
	// 		},
	// 		success: function(data) {
	// 			let $element = '<div class="article-read">';
	// 			$element += '<div class="article-read-inner">';
	// 			$element += '<div class="article-back">';
	// 			$element += '<a class="btn btn-outline-primary"><i class="ion ion-chevron-left"></i> ??????</a>';
	// 			$element += '</div>';
	// 			$element += '<h1 class="article-title">'+data[index].title+'</h1>';
	// 			$element += '<figure class="article-picture"><img src="'+data[index].picture+'"></figure>';
	// 			$element += '<div class="article-content"><p>???????????????</p>'+data[index].content+'</div>';
	// 			$element += '</div>';
	// 			$element += '</div>';

	// 			let reg = /{([a-zA-Z0-9]+)}/g,
	// 					res = [],
	// 					element = $element;

	// 			while(match = reg.exec($element)) {
	// 				element = element.replace('{' + match[index] + '}', data[match[index]]);
	// 			}

	// 			$("body").prepend(element);
	// 			$(".article-read").fadeIn();
	// 			$(document).on("click", ".article-back .btn", function() {
	// 				$(".article-read").fadeOut(function() {
	// 					$(".article-read").remove();
	// 					$("body").css({
	// 						overflow: 'auto'
	// 					});
	// 				});
	// 				return false;
	// 			});
	// 		}
	// 	});

	// 	return false;
	// });

});