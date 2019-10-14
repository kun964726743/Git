package com.example.demo;

import com.example.demo.entity.sql.WxLofinEntity;
import com.example.demo.entity.sql.WxUserInfoEntity;
import com.example.demo.service.WxAddService;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
@MapperScan(value = "demo.mapper")
public class DemoApplicationTests {

    @Autowired
    WxAddService wxAddService;
    @Test
    public void contextLoads() {
        WxUserInfoEntity wxAddEntity = new WxUserInfoEntity();
        wxAddEntity.setUser_id(123);
        wxAddEntity.setUser_name("456");
        wxAddEntity.setUser_password("456");
        wxAddEntity.setUser_phone("456");
        wxAddService.insertWxInfo(wxAddEntity);
        log.error("i = "+wxAddEntity.getUser_name());
    }

    @Test
    public void contextLoad(){
        WxLofinEntity wxLofinEntity = new WxLofinEntity();
        wxLofinEntity.setUser_name("456");
        wxLofinEntity.setUser_password("456");
        List<WxUserInfoEntity> wxUserInfoEntity = wxAddService.selectWxInfo(wxLofinEntity);
        System.out.println("username="+wxUserInfoEntity.get(0).getUser_name());
        log.info("username="+wxUserInfoEntity.get(0).getUser_name());
    }


}
