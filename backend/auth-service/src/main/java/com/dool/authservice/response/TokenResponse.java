package com.dool.authservice.response;

import lombok.Getter;
import lombok.Setter;

@Setter @Getter
public class TokenResponse
{
    String id;
    String accessToken;
    String refreshToken;
}
