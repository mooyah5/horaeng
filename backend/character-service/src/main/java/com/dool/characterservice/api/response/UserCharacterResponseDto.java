package com.dool.characterservice.api.response;

import com.dool.characterservice.db.domain.CharacterLevel;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class UserCharacterResponseDto {
    private Long id;
    private Long user_id;
    private Long character_id;
    private LocalDateTime created_date;
    private String nickname;
    private CharacterLevel characterLevel;
}
