package com.dool.characterservice.api.response;

import com.dool.characterservice.db.domain.CharacterLevel;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class UserCharacterResponseDto {
    private Long id;
    private String user_id;
    private Long character_id;
    private LocalDate created_date;
    private String nickname;
    private CharacterLevel characterLevel;
    private boolean status;
}
