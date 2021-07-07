package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test/gb")
public class GeustbookTestController {

	@RequestMapping(value="/ex1")
	public String ex1() {
		return "gb/ex1";
	}
}
