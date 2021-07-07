<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script
      type="text/javascript"
      src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"
    ></script>
    <script>
    var fetch= function () {
        	$.ajax({
                url: "${pageContext.request.contextPath }/guestbook/api/list",
                dataType: "json",  // 받을 때 포멧
                type: "get", // 요청 메서드
                success: function (response) {
                  response.data.forEach(function(vo){
                  let html ="<li data-no='"+vo.no+"'>"+
                  				"<strong>"+vo.name+"</strong>"+
								"<p>"+vo.message+"</p> "+
								"<strong></strong>"+
								" <a href='' data-no='"+vo.no+"'>삭제</a>"+
							"</li>";
                 
                  $("#list-guestbook").append(html);
                  })
                },
              });
        };
 
    
    $(function(){
    	        $("#btn-fetch").click(function () {fetch();})
    	        fetch();
      });
    </script>
</head>
<body>
	<h1>ex1</h1>
	<ul id="list-guestbook">
	</ul>
	<div>
		<button id="btn-fetch">다음 가져오기</button>
	</div>
</body>
</html>