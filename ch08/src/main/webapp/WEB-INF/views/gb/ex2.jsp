<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<link rel="stylesheet"
	href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
	$(function() {
		$("#add-form")
				.submit(
						function(event) {
							event.preventDefault();
							vo = {};

							vo.name = $("#input-name").val();
							if (vo.name == "") {
								messageBox("이름", "비어있으면 안돼요.");
								return;
							}
							vo.password = $("#input-password").val();
							if (vo.password == "") {
								messageBox("비밀번호", "비어있으면 안돼요.");
								return;
							}
							vo.message = $("#tx-content").val();
							if (vo.message == "") {
								messageBox("메시지", "비어있으면 안돼요.");
								return;
							}

							$.ajax({
										url : "${pageContext.request.contextPath }/api/post02",
										dataType : "json", // 받을 때 포멧
										type : "post", // 요청 메서드
										// 2. JSON 포맷
										contentType : "application/json",
										data : JSON.stringify(vo), // post요청시 보내는 데이터
										success : function(response) {
											var vo = response.data;
											let html = "<li data-no='" +vo.no + "'>"
													+ "<strong>"
													+ vo.name
													+ "<p>"
													+ vo.message
													+ "</p> "
													+ "<strong></strong>"
													+ " <a href='' data-no='" +vo.no +"'>삭제</a>"
													+ "</li>";

											$("#list-guestbook").prepend(html);
										},
									});
						});
	});

	var messageBox = function(title, message) {
		//..dialog-message 안에 내용 변경
		console.log(message);
		$("#dialog-message p").text(message);
		$("#dialog-message").dialog({
			modal : true,
			buttons : {
				확인 : function() {
					$(this).dialog("close");
				},
			},
			title : title,
		});
	};
</script>
</head>
<body>
	<h1>ex2</h1>
	<div id="guestbook">
		<h1>방명록</h1>
		<form id="add-form" action="" method="post">
			<input type="text" id="input-name" placeholder="이름" /> <input
				type="password" id="input-password" placeholder="비밀번호" />
			<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
			<input type="submit" value="보내기" />
		</form>
		<ul id="list-guestbook">
			<li data-no=""><strong>지나가다가</strong>
				<p>
					별루입니다.<br /> 비번:1234 -,.-
				</p> <strong></strong> <a href="" data-no="">삭제</a></li>

			<li data-no=""><strong>둘리</strong>
				<p>
					안녕하세요<br /> 홈페이지가 개 굿 입니다.
				</p> <strong></strong> <a href="" data-no="">삭제</a></li>

			<li data-no=""><strong>주인</strong>
				<p>
					아작스 방명록 입니다.<br /> 테스트~
				</p> <strong></strong> <a href="" data-no="">삭제</a></li>
		</ul>
	</div>
	<div id="dialog-message" title="예제" style="display: none">
		<p>안녕하세요</p>
	</div>
</body>
</html>
