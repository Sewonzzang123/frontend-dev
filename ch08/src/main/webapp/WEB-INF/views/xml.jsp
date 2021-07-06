<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%> <%@ taglib uri="http://java.sun.com/jsp/jstl/core"
prefix="c"%> <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Insert title here</title>
    <script
      type="text/javascript"
      src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"
    ></script>
    <script>
      $(function () {
        $("button").click(function () {
          $.ajax({
            url: "${pageContext.request.contextPath }/api/xml",
            dataType: "xml",
            success: function (response) {
              const $data = $("data", response); //$(response).find("data")
             
              const $no = $("no", $data); 
              const $name = $("name", $data); //$(response).find("data").find("name")
              const $message = $("message", $data);

              const no = $no.text(); 
              const name = $name.text();//$(response).find("data").find("name").text()
              const message = $message.text();

              let html = "";
              html += "<h4>" + no + "</h4>";
              html += "<h5>" + name + "</h5>";
              html += "<p>" + message + "</p>";

              $("#data").append(html);
            },
          });
        });
      });
    </script>
  </head>
  <body>
    <h1>AJAX Test - text format message(data)</h1>
    <button>데이터 가져오기</button>
    <div id="data"></div>
  </body>
</html>
