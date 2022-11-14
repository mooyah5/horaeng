package com.dool.authservice.request;

import com.dool.authservice.domain.RoleType;
import lombok.Getter;
import lombok.Setter;

@Setter @Getter
public class LoginRequest {
    private String id;
    private String password;
    private RoleType role;
}
