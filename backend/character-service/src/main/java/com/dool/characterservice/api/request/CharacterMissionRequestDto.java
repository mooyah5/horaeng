package com.dool.characterservice.api.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CharacterMissionRequestDto {
    private Long user_character_id;
}
