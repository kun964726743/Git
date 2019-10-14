package com.example.demo.service;

import com.example.demo.entity.sql.WxUserInfoEntity;
import com.example.demo.entity.sql.WxLofinEntity;

import java.util.List;

/**
 *添加用户
 */
public interface WxAddService {

    void insertWxInfo(WxUserInfoEntity wxAddEntity);

    List<WxUserInfoEntity> selectWxInfo(WxLofinEntity wxLofinEntity);
}
