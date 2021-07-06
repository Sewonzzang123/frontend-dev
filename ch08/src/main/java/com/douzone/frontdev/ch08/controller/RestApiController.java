package com.douzone.frontdev.ch08.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.vo.UserVo;

@RestController
@RequestMapping("/api/user")
public class RestApiController {
		
	@PostMapping("")
	public JsonResult post(UserVo vo) {
		vo.setNo(10L);
		return JsonResult.success(vo);
	}
	
}
