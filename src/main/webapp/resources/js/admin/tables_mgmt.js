"use strict"
var tables_mgmt = tables_mgmt || {}
tables_mgmt =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, faq1_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		faq1_vue_js = js + '/admin_vue/faq1_vue.js'
	}
	
	let onCreate =()=>{
		init()
		setContentView()

	}
	
	let setContentView =()=>{
		$('#tables_a')
		.click(function(){
			$('div.container-fluid').empty()
			$('<table id="tab"><tr></tr></table>')
			.css({ 
				width : '80%', 
				height : '900px', 
				border : '1px solid black', 
				margin : '0 auto' 
			})
			.appendTo('div.container-fluid')	// body에 오버로딩
			
			$('<td/>', {id : 'left'})	//	<td/> = <td></td>
			.css({ 
				width : '20%', 
				height : '100%', 
				border : '1px solid black', 
				margin : '0 auto', 
				'vertical-align' : 'top',
				'text-align' : 'center'
			})
			.appendTo('tr')
			
			$('<td/>', {id : 'right'})
			.css({ 
				width : '80%', 
				height : '100%', 
				border : '1px solid black', 
				padding : '0 auto',
				'text-align' : 'center',
				'vertical-align' : 'top'
			})
			.appendTo('tr')
			
			$.each(['웹크롤링', '고객 관리', 'FAQ 관리', '환율 API', 'FAQ 페이지'], (i, j)=>{
				$('<div/>')
				.text(j)		// text(j) - setter
				.css({
					width : '100%', 
					height : '10%', 
					border : '1px solid black'
					
				})
				.appendTo('#left')
					.click(function(){
				//		let that = $(this).attr('name')
						$(this).css({'background-color':'yellow'})
						$(this).siblings().css({'background-color':'white'})
						switch($(this).text()){
						case '웹크롤링' :
//							alert('web_crawl')
							webCrawl()						
							break
						case '고객 관리' : 
							alert('cust_mgmt')
						//	cust_mgmt()
							break
						case 'FAQ 관리' :
//							alert('faq_mgmt')
							faq_mgmt()
							break
						case '환율 API' :
							exchange_rate()
							break
						case 'FAQ 페이지' :
							faq1.onCreate()
						//	faq_mgmt()
							break
						}
				})
			})
			
		})
	}
	let exchange_rate =()=>{
		$('#right').empty()
		$.getJSON('https://api.manana.kr/exchange/rate/KRW/'
				+'KRW,USD,JPY,EUR,CNY,HKD,SGD,TWD,THB,VND,PHP,AUD,NZD,CAD,GBP.json', d=>{
			$.each(d, (i, j)=>{
				$(`<div class="box">
						<div class="question">
							<p>날짜 : ${j.date.substr(0, 10)}, 
							통화명 : ${j.name.substr(0, 3)},
							환율 : ${j.rate.toFixed(2)}</p>
							
				       </div>
				       <div class="answer">
							
						</div>
					</div>`)
			    .appendTo('#right')
			})
		})
	}
	let faq_mgmt =()=>{
		$('#right').empty()
		$(`<h3><a>FAQ 테이블 생성</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + '/faqs/create/table', d=>{
				alert(`테이블 성공여부 : ${d.result}`)
			})
		})
		
		$(`<h3><a>FAQ Crawling & Insert</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/tx/crawling/kakaofaq`, d=>{
				alert(`테이블 생성 성공여부 : ${d.result}`)
			})
		})
		
		$(`<h3><a>FAQ 테이블 삭제</a></h3><br><br>`)
		.appendTo('#right')
		.click(e=>{
			e.preventDefault()
			$.getJSON( _ + `/faqs/delete/table`, d=>{
				alert(`테이블 삭제 성공여부 : ${d.result}`)
			})
			
		})
	}
	
	return { onCreate }
})()