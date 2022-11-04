package com.dool.authservice.response;

import com.dool.authservice.domain.RoleType;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserResponse {
    private String id;
    private String name;
    private Long reportCnt;
    private Long point;
    private RoleType role;
}

