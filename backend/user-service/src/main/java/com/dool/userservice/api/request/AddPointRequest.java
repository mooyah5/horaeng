package com.dool.userservice.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AddPointRequest {
    private String userId;
    private Long point;
}
