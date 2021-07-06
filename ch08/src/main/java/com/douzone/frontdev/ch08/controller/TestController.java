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
}
