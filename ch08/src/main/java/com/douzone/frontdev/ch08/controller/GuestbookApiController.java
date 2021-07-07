package com.douzone.frontdev.ch08.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/guestbook/api")
public class GuestbookApiController {

	@ResponseBody
	@RequestMapping(value="/list")
	public JsonResult ex1() {
		List<GuestbookVo> list = new ArrayList<>();
		return JsonResult.success(list);
	}
}
