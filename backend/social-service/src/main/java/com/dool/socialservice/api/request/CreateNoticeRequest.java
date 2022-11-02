package com.dool.socialservice.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateNoticeRequest {
    private String title;
    private String content;
    private String userId;
}
