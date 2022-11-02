package com.dool.characterservice.api.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class CharacterMissionResponseDto {
    private Long id;
    private Long user_character_id;
    private Long mission_id;
    private LocalDateTime created_date;
    private boolean is_clear;
}
