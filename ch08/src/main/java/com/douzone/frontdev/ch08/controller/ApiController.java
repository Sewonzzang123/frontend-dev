package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.dto.XmlResult;
import com.douzone.frontdev.ch08.vo.GuestbookVo;;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이터";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX 연습</h1><p>html 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping("/xml")
	public Object xml() {
		XmlResult.GuestbookVo guestBookVo = new XmlResult.GuestbookVo();
		guestBookVo.setNo(1L);
		guestBookVo.setName("둘리");
		guestBookVo.setMessage("호이~~");

		return XmlResult.success(guestBookVo);
	}
	
	@ResponseBody
	@RequestMapping("/json")
	public Object json() {
		GuestbookVo guestBookVo = new GuestbookVo();
		guestBookVo.setNo(1L);
		guestBookVo.setName("둘리");
		guestBookVo.setMessage("호이~~");
		
		return JsonResult.success(guestBookVo);
	}
	
}