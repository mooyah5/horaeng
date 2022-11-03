package com.dool.characterservice.api.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CharacterMissionCountResponseDto {
    private Long count;
}
