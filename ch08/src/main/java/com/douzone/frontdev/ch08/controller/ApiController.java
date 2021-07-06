package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	@RequestMapping(value = "/json", method = RequestMethod.GET)
	public Object getJson() {
		GuestbookVo guestBookVo = new GuestbookVo();
		guestBookVo.setNo(1L);
		guestBookVo.setName("둘리");
		guestBookVo.setMessage("호이~~");
		
		return JsonResult.success(guestBookVo);
	}
	
	@ResponseBody
	@RequestMapping(value = "/post01", method = RequestMethod.POST)
	public Object post01(GuestbookVo vo) {
		vo.setNo(10L);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value = "/post02", method = RequestMethod.POST)
	public Object post02(@RequestBody GuestbookVo vo) {
		vo.setNo(10L);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
	
}