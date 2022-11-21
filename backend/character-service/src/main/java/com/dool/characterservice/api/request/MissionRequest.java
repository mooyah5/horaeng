package com.dool.characterservice.api.request;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MissionRequest {
    private String title;
    private String content;
    private String img;
}
