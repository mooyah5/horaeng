package com.dool.characterservice.api.service;

import com.dool.characterservice.api.request.CharacterMissionRequestDto;
import com.dool.characterservice.api.response.CharacterMissionResponseDto;
import com.dool.characterservice.db.domain.CharacterMission;

public interface CharacterMissionService {
    boolean getMission(Long user_character_id);
    CharacterMission postMission(CharacterMissionRequestDto requestDto);
    Long countMission(Long user_character_id);
}
