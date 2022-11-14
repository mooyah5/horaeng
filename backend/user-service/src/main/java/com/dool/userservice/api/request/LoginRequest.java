package com.dool.userservice.api.request;

import com.dool.userservice.db.domain.RoleType;
import lombok.Getter;
import lombok.Setter;

@Setter @Getter
public class LoginRequest {
    private String id;
    private String password;
    private RoleType role;
}
