package com.dool.userservice.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BackgroundRequest {
    private Long backgroundId;
    private String userId;
}
