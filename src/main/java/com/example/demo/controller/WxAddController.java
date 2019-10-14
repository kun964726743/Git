package com.example.demo.controller;

import com.example.demo.entity.sql.WxLofinEntity;
import com.example.demo.entity.sql.WxUserInfoEntity;
import com.example.demo.service.WxAddService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/wx")
public class WxAddController {
    @Autowired
    WxAddService wxAddService;

    @PostMapping("/zhuce")
    public void addUserInfo(@Validated @RequestBody WxUserInfoEntity wxUserInfoEntity){
          wxAddService.insertWxInfo(wxUserInfoEntity);
    }
    @PostMapping("/login")
    public void userLogin(@Validated @RequestBody WxLofinEntity wxLofinEntity){
        wxAddService.selectWxInfo(wxLofinEntity);
    }
}
