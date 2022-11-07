package com.dool.socialservice.api.request;

import lombok.Getter;
import lombok.Setter;

@Setter @Getter
public class CreateDiaryRequest {
    private String content;
    private String imgUrl;
    private String userId;
    private Long userCharacterId;
    private Long charactersId;
    private Long characterMissionId;
}
