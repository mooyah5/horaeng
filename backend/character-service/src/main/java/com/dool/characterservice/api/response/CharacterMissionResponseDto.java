package com.dool.characterservice.api.response;

import com.dool.characterservice.db.domain.Mission;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class CharacterMissionResponseDto {
    private Long id;
    private Mission mission;
    private LocalDate created_date;
    private boolean clear;
}
