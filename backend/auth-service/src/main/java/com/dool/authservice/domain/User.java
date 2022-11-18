package com.dool.authservice.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Data
@NoArgsConstructor
public class User {
    private String id;
    private String password;
    private String name;
    private String refreshToken;
    private Long reportCnt;
    private Long point;
    private RoleType role;
}
