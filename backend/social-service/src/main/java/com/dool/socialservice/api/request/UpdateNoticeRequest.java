package com.dool.socialservice.api.request;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UpdateNoticeRequest {
    private Long id;
    private String title;
    private String content;
}
