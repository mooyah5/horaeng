package com.dool.userservice.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class TokenRequest {
    private String id;
    private String token;
}
