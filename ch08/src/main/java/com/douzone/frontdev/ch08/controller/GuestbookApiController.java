package com.douzone.frontdev.ch08.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/guestbook/api")
public class GuestbookApiController {

	@ResponseBody
	@RequestMapping(value="/list")
	public JsonResult ex1(@RequestParam Long no) {
		System.out.println(no);
		List<GuestbookVo> list = new ArrayList<>();
		
		GuestbookVo vo1 = new GuestbookVo();
		vo1.setNo(3L);
		vo1.setName("둘리3");
		vo1.setMessage("호이3");
		list.add(vo1);
		
		GuestbookVo vo2 = new GuestbookVo();
		vo2.setNo(2L);
		vo2.setName("둘리2");
		vo2.setMessage("호이2");
		list.add(vo2);
		
		GuestbookVo vo3 = new GuestbookVo();
		vo3.setNo(1L);
		vo3.setName("둘리1");
		vo3.setMessage("호이1");
		list.add(vo3);
			
		return JsonResult.success(list);
	}
	
	@ResponseBody
	@RequestMapping(value="/add")
	public JsonResult ex2(@RequestBody GuestbookVo vo) {
		// 등록 작업(GuestbookService)
		vo.setNo(11L);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/delete/{no}")
	public JsonResult ex3(@PathVariable("no") Long no,@RequestParam String password) {
		// 삭제 작업(GuestbookService)
		Long data = 0L;
		// return false; 삭제x
		// data = -1L;
		if(data==-1L) {
			return JsonResult.success(data);
		}
		// return true;
		data = no;
		
		return JsonResult.success(data);
	}
}
