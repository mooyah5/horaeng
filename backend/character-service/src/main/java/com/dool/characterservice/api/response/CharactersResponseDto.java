package com.dool.characterservice.api.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CharactersResponseDto {
    private Long id;
    private String name;
    private String info;
    private Long missionId;
    private String backgroundId;
    private String missionTitle;
}
