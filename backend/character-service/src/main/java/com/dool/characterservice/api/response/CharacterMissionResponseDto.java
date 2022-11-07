package com.dool.characterservice.api.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class CharacterMissionResponseDto {
    private Long id;
    private Long user_character_id;
    private Long mission_id;
    private LocalDate created_date;
    private boolean is_clear;
}
