var nav_vue = nav_vue || {}
nav_vue = {
	nav : x=>{
		return '<nav class="themoin-header">'+
		'	<div>'+
		'		<a class="logo">'+
//		'			<img src="https://img.themoin.com/public/img/img-new-moin-logo.svg">'+
		'			<img src="'+ x +'/resources/img/logo2.png" style="width : 68px; height : 60px">'+
		'		</a>'+
		'		<div class="spacer"></div>'+
		'		<a class="menu">'+
		'			<div class="line1"></div>'+
		'			<div class="line2"></div>'+
		'		</a>'+
		'		<ul class="">'+
		'			<li><a id="admin_login">관리자</a></li>'+
		'			<li><a id="login">로그인</a></li>'+
		'			<li><a id="join">회원가입</a></li>'+
		'			<li class="mobile">'+
		'				<div class="themoin-language-dropdown" tabindex="0">'+
		'					<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'					<a> 한국어 </a>'+
		'					<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'					<ul>'+
		'						<li>'+
		'							<div class="spacer"></div>'+
		'							<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>'+
		'						</li>'+
		'						<li>'+
		'							<div class="spacer"></div>'+
		'							<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>'+
		'						</li>'+
		'					</ul>'+
		'				</div>'+
		'			</li>'+
		'		</ul>'+
		'		<div class="language">'+
		'			<div class="themoin-language-dropdown" tabindex="0">'+
		'				<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'				<a> 한국어 </a>'+
		'				<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'				<ul>'+
		'					<li>'+
		'						<div class="spacer"></div>'+
		'						<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>'+
		'					</li>'+
		'					<li>'+
		'						<div class="spacer"></div>'+
		'						<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>'+
		'					</li>'+
		'				</ul>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+
		'</nav>'
	},
	logined_nav : x=>{
		return '<nav class="themoin-header">'+
		'	<div>'+
		'		<a class="logo">'+
//		'			<img src="https://img.themoin.com/public/img/img-new-moin-logo.svg">'+
		'			<img src="'+ x +'/resources/img/logo2.png" style="width : 68px; height : 60px">'+
		'		</a>'+
		'		<div class="spacer"></div>'+
		'		<a class="menu">'+
		'			<div class="line1"></div>'+
		'			<div class="line2"></div>'+
		'		</a>'+
		'		<ul class="">'+
		'			<li><a id="mgmt">내 계정 관리</a></li>'+
		'			<li><a id="logout">로그아웃</a></li>'+
		'			<li><a id="">회원탈퇴</a></li>'+
		'			<li class="mobile">'+
		'				<div class="themoin-language-dropdown" tabindex="0">'+
		'					<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'					<a> <!-- -->한국어<!-- --> </a>'+
		'					<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'					<ul>'+
		'						<li>'+
		'							<div class="spacer"></div>'+
		'							<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>'+
		'						</li>'+
		'						<li>'+
		'							<div class="spacer"></div>'+
		'							<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>'+
		'						</li>'+
		'					</ul>'+
		'				</div>'+
		'			</li>'+
		'		</ul>'+
		'		<div class="language">'+
		'			<div class="themoin-language-dropdown" tabindex="0">'+
		'				<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'				<a> <!-- -->한국어<!-- --> </a>'+
		'				<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'				<ul>'+
		'					<li>'+
		'						<div class="spacer"></div>'+
		'						<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>'+
		'					</li>'+
		'					<li>'+
		'						<div class="spacer"></div>'+
		'						<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>'+
		'					</li>'+
		'				</ul>'+
		'			</div>'+
		'		</div>'+
		'		<div class="notification">'+
		'			<button>'+
		'				<img src="https://img.themoin.com/public/img/noticenter-icon.svg">'+
		'				<span class="">0</span>'+
		'			</button>'+
		'		</div>'+
		'	</div>'+
		'</nav>'
	},
	sidebar_admin : ()=>{
		return '<div class="themoin-mypage">'+
		'	<div class="tab-container">'+
		'		<div class="tab">'+
		'			<!-- <a v-for="list of lists" :key="list.aclick" @click="list.aclick" class="list.isShow"> {{list.text}}</a> -->'+
		'			<a class="active1" @click.prevent="admin_a">관리자 변경</a>'+
		'			<a class="" @click.prevent="pwdchg_a">비밀번호 변경</a>'+
		'			<a class="" @click.prevent="studentList_a">학생 목록</a>'+
		'			<a class="" @click.prevent="studentsFindSome_a">조건별 학생 검색</a>'+
		'			<a class="" @click.prevent="scoreEdit_a">학생 성적 수정</a>'+
		'			<a class="" @click.prevent="idSearch_a">ID 학생 검색</a>'+
		'			'+
		'			<div class="spacer"></div>'+
		'			<img src="https://img.themoin.com/public/img/img-man-s.svg">'+
		'			<p>{{cemail}}</p>'+
		'		</div>'+
		'	</div>'+
		'</div>'
	},
	sidebar_cus : ()=>{
		return '<div class="themoin-mypage">'+
		'<div class="tab-container">'+
		'	<div class="tab">'+
		'		<a id="cus_info" class="active">회원 정보</a>'+
		'		<a id="pwd_chg" class="">비밀번호 변경</a>'+
		'		<a id="auth_mgmt" class="">인증관리</a>'+
		'		<a id="alarm" class="">알림설정</a>'+
		'		<a id="ref_mgmt" class="">추천인 관리</a>'+
		'		<div class="spacer"></div>'+
		'		<img src="https://img.themoin.com/public/img/img-man-s.svg">'+
		'		<p>rogbest@naver.com</p>'+
		'	</div>'+
		'</div>'+
		'<div class="mypage"></div>'+
		'</div>'
	}
}