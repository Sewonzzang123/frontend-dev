<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%> <%@ taglib uri="http://java.sun.com/jsp/jstl/core"
prefix="c"%> <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Insert title here</title>
    <script>
      // DOM Load Event
      // 1. load : 모두다(DOM, CSSom, Image) 완료
      // 2. DOMContentLoaded : DOM만 다 완성(CSSom x, Image x)
      window.addEventListener("DOMContentLoaded", function () {
        document
          .getElementsByTagName("button")[0]
          .addEventListener("click", function () {
            let xhr = null;
            if (window.ActiveXObject) {
              //<= IE6
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } else if (window.XMLHttpRequest) {
              //IE7+
              xhr = new XMLHttpRequest();
            } else {
              cosnole.log("AJAX 기능을 사용할 수 없습니다.");
              return;
            }
            xhr.addEventListener("readystatechange", function () {
              if (this.readyState == XMLHttpRequest.UNSENT) {
                // 0  XMLHttpRequest 초기화 되기 전
                console.log("State : UNSENT");
              } else if (this.readyState == XMLHttpRequest.OPENED) {
                //1 서버와 연결이 성공
                console.log("State : OPENED");
              } else if (this.readyState == XMLHttpRequest.HEADERS_RECEIVED) {
                //2  Request를 받음
                console.log("State : HEADERS_RECEIVED");
              } else if (this.readyState == XMLHttpRequest.LOADING) {
                //3  Response 처리중
                console.log("State : LOADING");
              } else if (this.readyState == XMLHttpRequest.DONE) {
                //4 Response 처리 완료
                console.log("State : DONE");
                if (this.status != 200) {
                  cosnole.log(this.status);
                  return;
                }

                console.log(this.responseText); // Json x String o
                const response = JSON.parse(this.responseText);
                let html = "";
                html += "<h4>" + response.data.no + "</h4>";
                html += "<h5>" + response.data.name + "</h5>";
                html += "<p>" + response.data.message + "</p>";

                document.getElementById("data").innerHTML = html;
              }
            });
            xhr.open(
              "GET",
              "${pageContext.request.contextPath}/api/json",
              true
            );
            xhr.send();
          });
      });
    </script>
  </head>
  <body>
    <h1>AJAX Test - XMLHttpRequest</h1>
    <button>데이터 가져오기</button>
    <div id="data"></div>
  </body>
</html>
