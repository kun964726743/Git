package com.example.demo.service.impl;

import com.example.demo.entity.sql.WxUserInfoEntity;
import com.example.demo.entity.sql.WxLofinEntity;
import com.example.demo.mapper.WxAddMapper;
import com.example.demo.service.WxAddService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service("wxAddService")
public class WxAddServiceImpl implements WxAddService {
    @Autowired
    WxAddMapper wxAddMapper;
    @Override
    public void insertWxInfo(WxUserInfoEntity wxAddEntity) {
        try{
             wxAddMapper.insertWxInfo(wxAddEntity);
        }catch (Exception e){
            log.error(e.getMessage());
        }
    }

    @Override
    public List<WxUserInfoEntity> selectWxInfo(WxLofinEntity wxLofinEntity) {
        return wxAddMapper.selectWxInfo(wxLofinEntity);
    }
}
