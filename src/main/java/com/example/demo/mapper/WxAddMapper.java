package com.example.demo.mapper;

import com.example.demo.entity.sql.WxUserInfoEntity;
import com.example.demo.entity.sql.WxLofinEntity;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component("WxAddMapper")
public interface WxAddMapper {
    /**
     *添加用户
     * @param wxAddEntity
     */
    void insertWxInfo(WxUserInfoEntity wxAddEntity);
    /**
     *查询用户信息
     * @param wxLofinEntity
     */
    List<WxUserInfoEntity> selectWxInfo(WxLofinEntity wxLofinEntity);
}
