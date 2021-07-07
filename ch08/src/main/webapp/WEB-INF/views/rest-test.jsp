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
        $("#create").click(function () {
          const vo = {
            name: "둘리",
            password: "1234",
            email: "dooly@gmail.com",
            gender: "male",
          };
          $.ajax({
            url: "${pageContext.request.contextPath }/api/user",
            dataType: "json",
            type: "post", // create >> postMapping
            contentType: "application/json",
            data: JSON.stringify(vo),
            success: function (response) {
              console.log(response);
            },
          });
        });
        $("#read").click(function () {
          $.ajax({
            url: "${pageContext.request.contextPath }/api/user/10", // 10 번 유저를 보여달라
            dataType: "json",
            type: "get", //read > getMapping
            contentType: "application/json",
            success: function (response) {
              console.log(response);
            },
          });
        });
        $("#update").click(function () {
          const vo = {
            name: "둘리",
            password: "1234",
            email: "dooly123@gmail.com",
            gender: "female",
          };
          $.ajax({
            url: "${pageContext.request.contextPath }/api/user/10",
            dataType: "json",
            type: "put", // update >> putMapping
            contentType: "application/json",
            data: JSON.stringify(vo),
            success: function (response) {
              console.log(response);
            },
          });
        });
        $("#delete").click(function () {
          $.ajax({
            url: "${pageContext.request.contextPath }/api/user/10",
            dataType: "json",
            type: "delete", //delete >> deleteMapping
            data: "password=1234",
            success: function (response) {
              console.log(response);
            },
          });
        });
      });
    </script>
  </head>
  <body>
    <h1>AJAX Test - Restful API</h1>
    <br /><br />
    <button id="create">Create(post)</button><br /><br />
    <button id="read">Read(get)</button><br /><br />
    <button id="update">Update(put)</button><br /><br />
    <button id="delete">Delete(delete)</button>
  </body>
</html>
