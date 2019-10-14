package com.example.demo.entity.sql;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class WxLofinEntity {
    /**
     * 用户名
     */
    private String user_name;
    /**
     * 密码
     */
    private String user_password;
}
