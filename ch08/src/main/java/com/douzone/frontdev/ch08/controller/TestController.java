package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class TestController {
	

	@RequestMapping("/text")
	public String  text(){//simple http message converter
		return "text";
	}
	
	@RequestMapping("/html")
	public String  html(){
		return "html";
	}
	
	@RequestMapping("/xml")
	public String  xml(){
		return "xml";
	}
	
	@RequestMapping("/json01")
	public String  json(){
		return "json01";
	}
}
