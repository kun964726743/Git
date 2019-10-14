package com.example.demo.entity.sql;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

@Data
@Accessors(chain = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class WxUserInfoEntity implements Serializable {
    /**
     * 用户ID
     */
    private long user_id;
    /**
     * 用户名
     */
    private String user_name;
    /**
     * 手机号
     */
    private String user_phone;
    /**
     * 密码
     */
    private String user_password;
}
