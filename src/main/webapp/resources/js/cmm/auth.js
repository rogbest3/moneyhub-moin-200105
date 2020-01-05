"use strict"
var auth = auth || {}
auth =(()=>{
	const WHEN_ERR = 'auth_vue - js파일을 찾지 못했습니다.'
	let _, js, img, auth_vue_js, cookie_js, mypage_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		auth_vue_js = js + '/vue/auth_vue.js'
		cookie_js = js + '/cmm/cookie.js'
		mypage_js = js + '/mypage/mypage.js'
	}
	let onCreate =x=>{
		init()
		$.when(
			$.getScript(auth_vue_js),
			$.getScript(cookie_js),
			$.getScript(mypage_js)
		)
		.done(()=>{
			setContentView(x)
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =x=>{
		if( x === 'join' ){
			join_1_page()
			join_2_page_btn()
			login_page_a()
		}
		else{
			login_page()
			login()
		}
		
	}
	let login_page =()=>{
		$('#root')
		.html(auth_vue.login_body(_))
		
		$(auth_vue.login())
		.appendTo('.themoin-login')
		join_2_page_btn()
	}
	
	let login_page_a =()=>{
		$('<p style="margin: 33px auto 0px;"><a>이미 회원이신가요?</a></p>')
		.appendTo('.moin-login')
		.click(()=>{
			login_page()
			login()
		})
	}
	
	let login =()=>{
		$('<button/>')
		.text('로그인')
		.addClass('btn-submit')
		.appendTo('.moin-login form.login')
		.click(e=>{
			e.preventDefault()
			$.ajax({
				url : _ + '/customers/login',
				type : 'POST',
				data : JSON.stringify({
					cemail : $('#cemail').val(),
					cpwd : $('#cpwd').val()
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg === 'SUCCESS'){
						mypage.onCreate()
					}
					else{
						alert('로그인 실패')
					}
				},
				error : e=>{
					alert('login ajax 실패')
				}
			})
		})
	}
	
	let join_1_page =()=>{
		$('#root')
		.html(auth_vue.login_body(_))
		
		$(auth_vue.join_1())
		.appendTo('.themoin-login')
	}
	
	let join_2_page_btn =()=>{
		$('<button>'+
		  '	<img src="https://img.themoin.com/public/img/login-email.svg">'+
		  '		<p class="newmoin-text-text-button">이메일로<br>시작하기</p>'+
		  '</button>')
		.prependTo('.buttons')
		.click(()=>{
			$('#root')
			.html(auth_vue.join_body(_))
			
			$(auth_vue.join_2())
			.appendTo('.themoin-signup')
			
			
			$('#agree_box_all')
				.click(function(){
					if($(this).children('div').hasClass("checked") == true){
						$('#agree_box_all div.box').attr('class', 'box')
			        	$('#agree_box_1 div.box').attr('class', 'box')
			        	$('#agree_box_2 div.box').attr('class', 'box')
			        	$('#agree_box_3 div.box').attr('class', 'box')
					}
			        else{

			        	$('#agree_box_all div.box').attr('class', 'box checked')
			        	$('#agree_box_1 div.box').attr('class', 'box checked')
			        	$('#agree_box_2 div.box').attr('class', 'box checked')
			        	$('#agree_box_3 div.box').attr('class', 'box checked')
			        }
				})
			$.each(['1', '2', '3'], (i, j)=>{
				$('#agree_box_' + j)
				.click(function(){
					if($(this).children('div').hasClass("checked") == true){
						$('#agree_box_'+ j +' div.box').attr('class', 'box')
					}
			        else{
			        	$('#agree_box_'+ j +' div.box').attr('class', 'box checked')
			        	
			        }
				})
			})
			
			$('#code_dropdown')
			.click(function(){
				$(this).attr('class', 'moin-input-group moin-dropdown open')
				$('ul.dropdown-menu').toggle()
			})
			
			$('#code_dropdown .dropdown-toggle')
			.text('+82 (South Korea)')
			.append('<img class="pull-right" src="https://img.themoin.com/public/img/ic-dropdown-p.png">')
			
			$('ul.dropdown-menu li a')
			.click(function(){
				$('#code_dropdown .dropdown-toggle')
				.text($(this).text())
				.append('<img class="pull-right" src="https://img.themoin.com/public/img/ic-dropdown-p.png">')
				
			})
			
			join()
		})
	}
	
	let join =()=>{
		existId()
		// <button class="btn-submit" type="submit">가입완료</button>
		$('<button/>')
		.text('가입완료')
		.addClass('btn-submit')
		.appendTo('.moin-login form.signup')
		.click(e=>{
			e.preventDefault()
			let cntcd = $('#phone1').text().substr(1, $('#phone1').text().indexOf(' '))
			alert(cntcd)
			if($('#cpwd').val() === $('#cfm_cpwd').val() && $('#cpwd').val().length > 0 ){
				$.ajax({
					url : _+'/customers/',
					type : 'POST',
					data : JSON.stringify({
						cemail : $('#cemail').val(),
						cpwd : $('#cpwd').val(),
						cname : $('#lname').val() + $('#fname').val(),
						cntcd : cntcd,
						cphone : $('#cphone').val()
						// cemail, cpwd, cfm_cpwd, fname, lname, 
						// phone1(국가코드), cphone
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : d=>{
						if(d.msg === 'SUCCESS'){
							login_page()
							login()
						}else{
							alert('회원가입 실패')
						}
					},
					error : e=>{
						alert('join ajax 실패')
					}
				})
			}else{
				alert('비번 틀림')
			}
		})
	}
	
	let existId =()=>{
		$('<input id="cemail" class="fs-block"'+
				' placeholder="youremail@email.com" type="text" tabindex="0" value="">'+
				'<div style="height:20px; margin-top:10px"></div>')
			.appendTo('#moin-input-id')
			
		$('#cemail').keyup(()=>{
			if($('#cemail').val().length >= 1){
				$.getJSON(_+'/customers' + '/existid/' + $('#cemail').val(), d=>{
					if(d.msg === 'Y'){
						$('#moin-input-id div')
						.text('이미 있는 아이디입니다.')
						.css({
							color : 'red'
						})

					}else{
						$('#moin-input-id div')
						.text('사용 가능한 이메일입니다.')
						.css({
							color : 'blue'
						})
					}
				})
			}
			else{
				$('#moin-input-id div').empty()
			}
		})
	}
	return { onCreate }
})()