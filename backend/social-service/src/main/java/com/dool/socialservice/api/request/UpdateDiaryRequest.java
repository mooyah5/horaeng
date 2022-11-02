package com.dool.socialservice.api.request;

import lombok.Getter;
import lombok.Setter;

@Setter @Getter
public class UpdateDiaryRequest {
    private Long id;
    private String title;
    private String content;
    private String imgUrl;
}
