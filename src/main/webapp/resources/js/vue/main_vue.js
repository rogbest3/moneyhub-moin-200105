var main_vue = main_vue || {}
main_vue ={
	main : ()=>{
		return '<div class="themoin-landing">'+
		'	<div class="intro">'+
		'		<img src="https://img.themoin.com/public/img/group-446.svg">'+
		'		<div>'+
		'			<div class="badge">&lt;송금한도 향상 기념 이벤트&gt;</div>'+
		'			<div class="newmoin-text-header">건당 300만원 → 550만원</div>'+
		'			<div class="newmoin-text-header">연간 3150만원 → 5500만원</div><br>'+
		'			<p class="newmoin-text-subtitle-grey">송금 한도 향상을 애타게 기다리셨던 분들, 더 많이 송금해보세요<br> '+
		'			상담하기 누르면 쿠폰을 받아볼 수 있습니다</p>'+
		'		</div>'+
		'	</div>'+
		'	<div class="themoin-remit-component">'+
		'		<div id="moin-event-amount" class="moin-event-amount">'+
		'			<p class="color-deepgrey"></p>'+
		'		</div>'+
		'		<div class="moin-amount">'+
		'			<div class="money-graph">'+
		'				<h3 class="index-money-title">실제로 받는 금액</h3>'+
		'				<div class="index-money-rank">'+
		'					<div id="rank-moin" class="index-money-moin">'+
		'						<div class="index-money-name">모&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%; width: 100%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">4,196.92</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-kb" class="index-money-bank">'+
		'						<div class="index-money-name">국민은행</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%; width: 50%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">4,141.75</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-hana" class="index-money-bank">'+
		'						<div class="index-money-name">하나은행</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%; width: 50%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">4,141.75</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-woori" class="index-money-bank">'+
		'						<div class="index-money-name">우리은행</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%; width: 50%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">4,141.75</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-shinhan" class="index-money-bank">'+
		'						<div class="index-money-name">신한은행</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">3,809.81</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-moin-verify" class="index-money-moin-event">'+
		'						<div class="index-money-name">학생인증</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">0</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-moin-event" class="index-money-moin-event">'+
		'						<div class="index-money-name">모인할인</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">0</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'				</div>'+
		'			</div>'+

		'			<div id="remit_box" class="form-calculator main">'+
		'				<div class="amount-row">'+
		'					<div class="">'+
		'						<p>내가 보내는 금액 (수수료 포함)</p>'+
		'						<input class="send-amount" type="text" tabindex="0" value="5,500,000">'+
		'					</div>'+
		'					<div class="unit-select disabled" tabindex="0">'+
		'						<p>대한민국</p>'+
		'						<h3>KRW</h3>'+
		'					</div>'+
		'				</div>'+
		'				<div class="amount-row">'+
		'					<div class="">'+
		'						<p>실제로 받는 금액 (직접입력 가능)</p>'+
		'						<input class="receive-amount" type="text" tabindex="0" value="4,196.92">'+
		'					</div>'+
		'					<div class="unit-select receive" tabindex="0">'+
		'						<p>아일랜드</p>'+
		'						<h3>EUR</h3>'+
		'					</div>'+
		'				</div>'+
//		'				<button type="submit" class="index-send-btn moin-body">송금하기</button>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+

		'	<div class="themoin-landing-countries">'+
		'		<div>'+
		'			<h1>송금 가능 국가</h1>'+
		'			<ul>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-jp.svg">'+
		'					<span class="newmoin-text-subtitle">일본</span>'+
		'					<p>계좌송금</p>'+
		'					<a href="https://blog.naver.com/moin_company/221488774973" target="_blank" rel="noopener noreferrer">페이이지</a>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-cn.svg">'+
		'					<span class="newmoin-text-subtitle">중국</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-us.svg">'+
		'					<span class="newmoin-text-subtitle">미국</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-sg.svg">'+
		'					<span class="newmoin-text-subtitle">싱가포르</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-au.svg">'+
		'					<span class="newmoin-text-subtitle">호주</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-gb.svg">'+
		'					<span class="newmoin-text-subtitle">영국</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-np.svg">'+
		'					<span class="newmoin-text-subtitle">네팔</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-de.svg">'+
		'					<span class="newmoin-text-subtitle">독일</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-fr.svg">'+
		'					<span class="newmoin-text-subtitle">프랑스</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-it.svg">'+
		'					<span class="newmoin-text-subtitle">이탈리아</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-nl.svg">'+
		'					<span class="newmoin-text-subtitle">네덜란드</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li>'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-pt.svg">'+
		'					<span class="newmoin-text-subtitle">포르투갈</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-es.svg">'+
		'					<span class="newmoin-text-subtitle">스페인</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-be.svg">'+
		'					<span class="newmoin-text-subtitle">벨기에</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-cy.svg">'+
		'					<span class="newmoin-text-subtitle">키프로스</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-ee.svg">'+
		'					<span class="newmoin-text-subtitle">에스토니아</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-fi.svg">'+
		'					<span class="newmoin-text-subtitle">핀란드</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-gr.svg">'+
		'					<span class="newmoin-text-subtitle">그리스</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-ie.svg">'+
		'					<span class="newmoin-text-subtitle">아일랜드</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-lv.svg">'+
		'					<span class="newmoin-text-subtitle">라트비아</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-lt.svg">'+
		'					<span class="newmoin-text-subtitle">리투아니아</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-lu.svg">'+
		'					<span class="newmoin-text-subtitle">룩셈부르크</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-mt.svg">'+
		'					<span class="newmoin-text-subtitle">몰타</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-mc.svg">'+
		'					<span class="newmoin-text-subtitle">모나코</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-sm.svg">'+
		'					<span class="newmoin-text-subtitle">산 마리노</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-sk.svg">'+
		'					<span class="newmoin-text-subtitle">슬로바키아</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-si.svg">'+
		'					<span class="newmoin-text-subtitle">슬로베니아</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="hide">'+
		'					<img src="https://img.themoin.com/public/img/circle-flag-at.svg">'+
		'					<span class="newmoin-text-subtitle">오스트리아</span>'+
		'					<p>계좌송금</p>'+
		'				</li>'+
		'				<li class="empty hide"></li>'+
		'				<li class="empty hide"></li>'+
		'			</ul>'+
		'		</div>'+
/*		'		<div class="see-more">'+
		'			총 28개의 송금 국가 확인하기'+
		'			<img class="img-close" src="https://img.themoin.com/public/img/ic-open-list-blue.svg">'+
		'		</div>'+*/
		'	</div>'+

	/*	'	<div class="section-confidence">'+
		'		<div class="item-container">'+
		'			<div class="item">'+
		'				<img class="img-container" src="https://img.themoin.com/public/img/img-confidence1.svg">'+
		'				<h3 class="newmoin-text-subtitle-center">금융감독원장상 두 차례 수상</h3>'+
		'				<p class="newmoin-text-body-center">2019 매경 핀테크 어워드 금감원장상 수상<br classname="desktop-line-break">2016 금융개혁! 창업∙일자리 박람회 경진대회 금감원장상 수상</p>'+
		'			</div>'+
		'			<div class="item">'+
		'				<img class="img-container" src="https://img.themoin.com/public/img/img-venture-capital-2.svg">'+
		'				<h3 class="newmoin-text-subtitle-center">한국·미국 VC로부터의 투자</h3>'+
		'				<p class="newmoin-text-body-center">은행권 연합회를 포함하여 다수의 한국/미국 VC로부터 투자를 받았습니다.</p>'+
		'			</div>'+
		'			<div class="item">'+
		'				<img class="img-container" src="https://img.themoin.com/public/img/img-license-2.svg">'+
		'				<h3 class="newmoin-text-subtitle-center">정식 라이센스 취득</h3>'+
		'				<p class="newmoin-text-body-center">2018년 1월에 기재부로부터 소액외화이체업 정식 라이센스를 취득하였습니다.</p>'+
		'			</div>'+
		'			<div class="item">'+
		'				<img class="img-container" src="https://img.themoin.com/public/img/img-confidence4.svg">'+
		'				<h3 class="newmoin-text-subtitle-center">2019 Leading Global Fintech Innovators</h3>'+
		'				<p class="newmoin-text-body-center">KPMG와 H2벤처스가 선정한<br classname="desktop-line-break">2019 세계 핀테크 100대 기업에<br classname="desktop-line-break">한국에선 딱 2군데 중 한 곳으로 뽑혔습니다</p>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+

		'	<div class="pros">'+
		'		<div>'+
		'			<h1 class="moin-row">모인 서비스의 장점</h1>'+
		'			<div class="moin-row">'+
		'				<div class="card-pros">'+
		'					<div class="moin-index-box">'+
		'						<h3>저렴한 수수료</h3>'+
		'						<p>은행보다 최대 90%<br>수수료가 저렴합니다.</p>'+
		'						<a href="/faq">어떻게 가능한가요?</a>'+
		'					</div>'+
		'				</div>'+
		'				<div class="card-pros">'+
		'					<div class="moin-index-box">'+
		'						<h3>빠른 송금 시간</h3>'+
		'						<p>중계은행을 거치지 않아<br>송금 속도가 매우 빠릅니다.</p>'+
		'						<a href="/faq">얼마나 빠른가요?</a>'+
		'					</div>'+
		'				</div>'+
		'				<div class="card-pros">'+
		'					<div class="moin-index-box">'+
		'						<h3>편리한 방법</h3>'+
		'						<p>은행에 직접 가지 않아도 온라인으로<br>언제 어디서든 송금할 수 있습니다.</p>'+
		'						<a href="/faq">송금 방법 보기</a>'+
		'					</div>'+
		'				</div>'+
		'				<div class="card-pros">'+
		'					<div class="moin-index-box">'+
		'						<h3>도착 알림 서비스</h3>'+
		'						<p>보내는 분과 받는 분이 모두<br>안심하실 수 있도록, 송금 진행 상황을<br>문자로 안내해드립니다.</p>'+
		'					</div>'+
		'				</div>'+
		'				<div class="card-pros">'+
		'					<div class="moin-index-box">'+
		'						<h3>철저한 보안</h3>'+
		'						<p>안전성이 보장된 블록체인<br>기술을 기반으로 하며,<br>모든 정보는 암호화 됩니다.</p>'+
		'					</div>'+
		'				</div>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+

		'	<div class="themoin-landing-applink">'+
		'		<h1>모인 앱을 다운로드 받으세요</h1>'+
		'		<div class="item-container">'+
		'			<a class="btn-android">'+
		'				<img src="https://img.themoin.com/public/img/page-1.svg">'+
		'				<div class="hd-button">안드로이드 앱 다운로드</div>'+
		'			</a>'+
		'			<a class="btn-ios">'+
		'				<img src="https://img.themoin.com/public/img/img-apple.svg">'+
		'				<div class="hd-button">iOS 앱 다운로드</div>'+
		'			</a>'+
		'		</div>'+
		'	</div>'+*/
		'	<div style="display:none"></div>'+
		'</div>'
	},
	logined_main : ()=>{
		return '<div class="themoin-main">'+
		'	<div class="themoin-currency-component">'+
		'		<div>'+
		'			<div class="graph-lines">'+
		'				<div class="line-box">'+
		'					<div class="line color-moin" style="transform: translate3d(0px, -83px, 0px) rotateZ(4.391deg);"></div>'+
		'				</div>'+
		'				<div class="line-box">'+
		'					<div class="line color-moin" style="transform: translate3d(0px, -74.9787px, 0px) rotateZ(0.0739949deg);"></div>'+
		'				</div>'+
		'				<div class="line-box">'+
		'					<div class="line color-moin" style="transform: translate3d(0px, -74.8259px, 0px) rotateZ(-0.6882deg);"></div>'+
		'				</div>'+
		'				<div class="line-box">'+
		'					<div class="line color-moin" style="transform: translate3d(0px, -76.0596px, 0px) rotateZ(7.59461deg);"></div>'+
		'				</div>'+
		'				<div class="line-box">'+
		'					<div class="line color-moin" style="transform: translate3d(0px, -62.1449px, 0px) rotateZ(6.45984deg);"></div>'+
		'				</div>'+
		'				<div class="line-box">'+
		'					<div class="line color-moin" style="transform: translate3d(0px, -50.3258px, 0px) rotateZ(1.84079deg);"></div>'+
		'				</div>'+
		'				<div class="line-box">'+
		'					<div class="line color-moin" style="transform: translate3d(0px, -46.958px, 0px) rotateZ(3.88589deg);"></div>'+
		'				</div>'+
		'				<div class="line-box">'+
		'					<div class="line color-moin" style="transform: translate3d(0px, -39.8604px, 0px) rotateZ(11.4038deg);"></div>'+
		'				</div>'+
		'				<div class="line-box">'+
		'					<div class="line color-moin" style="transform: translate3d(0px, -18.8193px, 0px) rotateZ(8.62074deg);"></div>'+
		'				</div>'+
		'			</div>'+
		'			<div class="graph-dots">'+
		'				<div class="dot-box">'+
		'					<div class="dot color-moin" style="transform: translate3d(0px, -80px, 0px);"></div>'+
		'					<div class="date">12</div>'+
		'					<div class="currency-tooltip">'+
		'						<div class="moin">'+
		'							<div>모인 환율</div>'+
		'							<div>1322.52</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'				<div class="dot-box">'+
		'					<div class="dot color-moin" style="transform: translate3d(0px, -71.9787px, 0px);"></div>'+
		'					<div class="date">13</div>'+
		'					<div class="currency-tooltip">'+
		'						<div class="moin">'+
		'							<div>모인 환율</div>'+
		'							<div>1319.37</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'				<div class="dot-box">'+
		'					<div class="dot color-moin" style="transform: translate3d(0px, -71.8259px, 0px);"></div>'+
		'					<div class="date">14</div>'+
		'					<div class="currency-tooltip">'+
		'						<div class="moin">'+
		'							<div>모인 환율</div>'+
		'							<div>1319.31</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'				<div class="dot-box">'+
		'					<div class="dot color-moin" style="transform: translate3d(0px, -73.0596px, 0px);"></div>'+
		'					<div class="date">15</div>'+
		'					<div class="currency-tooltip">'+
		'						<div class="moin">'+
		'							<div>모인 환율</div>'+
		'							<div>1319.79</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'				<div class="dot-box">'+
		'					<div class="dot color-moin" style="transform: translate3d(0px, -59.1449px, 0px);"></div>'+
		'					<div class="date">16</div>'+
		'					<div class="currency-tooltip">'+
		'						<div class="moin">'+
		'							<div>모인 환율</div>'+
		'							<div>1314.31</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'				<div class="dot-box">'+
		'					<div class="dot color-moin" style="transform: translate3d(0px, -47.3258px, 0px);"></div>'+
		'					<div class="date">17</div>'+
		'					<div class="currency-tooltip">'+
		'						<div class="moin">'+
		'							<div>모인 환율</div>'+
		'							<div>1309.66</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'				<div class="dot-box">'+
		'					<div class="dot color-moin" style="transform: translate3d(0px, -43.958px, 0px);"></div>'+
		'					<div class="date">18</div>'+
		'					<div class="currency-tooltip">'+
		'						<div class="moin">'+
		'							<div>모인 환율</div>'+
		'							<div>1308.33</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'				<div class="dot-box">'+
		'					<div class="dot color-moin" style="transform: translate3d(0px, -36.8604px, 0px);"></div>'+
		'					<div class="date">19</div>'+
		'					<div class="currency-tooltip">'+
		'						<div class="moin">'+
		'							<div>모인 환율</div>'+
		'							<div>1305.54</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'				<div class="dot-box">'+
		'					<div class="dot color-moin" style="transform: translate3d(0px, -15.8193px, 0px);"></div>'+
		'					<div class="date">20</div>'+
		'					<div class="currency-tooltip">'+
		'						<div class="moin">'+
		'							<div>모인 환율</div>'+
		'							<div>1297.26</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'				<div class="dot-box">'+
		'					<div class="dot color-moin" style="transform: translate3d(0px, 0px, 0px);"></div>'+
		'					<div class="date">21</div>'+
		'					<div class="currency-tooltip">'+
		'						<div class="moin">'+
		'							<div>모인 환율</div>'+
		'							<div>1291.03</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'			</div>'+

		'			<div class="content">'+
		'				<div class="title">실시간 모인 환율</div>'+
		'				<div class="currency">1 EUR = 1291.03 KRW</div>'+
		'			</div>'+
		'			<div class="legend">'+
		'				<div class="moin-avg">'+
		'					<div></div> '+
		'					모인 환율'+
		'				</div>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+

		'	<div class="themoin-remit-component">'+
		'		<div id="moin-event-amount" class="moin-event-amount">'+
		'			<p class="color-deepgrey"></p>'+
		'		</div>'+
		'		<div class="moin-amount">'+
		'			<div class="money-graph">'+
		'				<h3 class="index-money-title">실제로 받는 금액</h3>'+
		'				<div class="index-money-rank">'+
		'					<div id="rank-moin" class="index-money-moin">'+
		'						<div class="index-money-name">모&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%; width: 100%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">4,256.29</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-kb" class="index-money-bank">'+
		'						<div class="index-money-name">국민은행</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%; width: 50%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">4,200.35</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-hana" class="index-money-bank">'+
		'						<div class="index-money-name">하나은행</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%; width: 50%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">4,200.35</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-woori" class="index-money-bank">'+
		'						<div class="index-money-name">우리은행</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%; width: 50%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">4,200.35</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-shinhan" class="index-money-bank">'+
		'						<div class="index-money-name">신한은행</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">3,863.71</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-moin-verify" class="index-money-moin-event">'+
		'						<div class="index-money-name">학생인증</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">0</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'					<div id="rank-moin-event" class="index-money-moin-event">'+
		'						<div class="index-money-name">모인할인</div>'+
		'						<div class="index-money-bar">'+
		'							<div style="height: 100%;"></div>'+
		'						</div>'+
		'						<div class="index-money-amount">0</div>'+
		'						<div class="index-money-unit">EUR</div>'+
		'					</div>'+
		'				</div>'+
		'			</div>'+
		'			<div id="remit_box" class="form-calculator main">'+
		'				<div class="amount-row">'+
		'					<div class="">'+
		'						<p>내가 보내는 금액 (수수료 포함)</p>'+
		'						<input class="send-amount" type="text" tabindex="0" value="5,500,000">'+
		'					</div>'+
		'					<div class="unit-select disabled" tabindex="0">'+
		'						<p>대한민국</p>'+
		'						<h3>KRW</h3>'+
		'					</div>'+
		'				</div>'+
		'				<div class="amount-row">'+
		'					<div class="">'+
		'						<p>실제로 받는 금액 (직접입력 가능)</p>'+
		'						<input class="receive-amount" type="text" tabindex="0" value="4,256.29">'+
		'					</div>'+
		'					<div class="unit-select receive" tabindex="0">'+
		'						<p>아일랜드</p>'+
		'						<h3>EUR</h3>'+
		'					</div>'+
		'				</div>'+
//		'				<button type="submit" class="index-send-btn moin-body">송금하기</button>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+

		'	<div class="user-remit-container">'+
		'		<div class="user-title">'+
		'			<h3>내 입금 계좌</h3>'+
		'		</div>'+
		'		<div class="user-account">'+
		'			<p class="warning">'+
		'				<span class="warning fs-block">반드시 인증받으신 기업은행 23210816702025 계좌에서 내 입금 계좌로 이체 해 주세요.</span><br>내 입금 계좌 : '+
		'				<span class="fs-block">광주은행 9427010261003 김민국_모인</span>'+
		'			</p>'+
		'		</div>'+
		'		<div class="user-title">'+
		'			<h3>송금 내역</h3>'+
		'		</div>'+
		'		<div class="user-limit">'+
		'			<p>올해 누적 송금액 :<span> 0</span> 원</p>'+
		'			<p class="divider">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</p>'+
		'			<p>올해 잔여 한도 :<span class=""> 55,000,000</span> 원</p>'+
		'		</div>'+
		'		<div class="remits empty">'+
		'			<br><h3>아직 송금 내역이 없습니다.</h3>'+
		'			<button class="start">여기를 눌러 송금을 시작하세요.</button><br><br>'+
		'			<img src="https://img.themoin.com/public/img/icon-null-illust.svg"><br><br>'+
		'		</div>'+
		'	</div>'+
		'</div>'
	}
}