package com.dool.characterservice.api.service;

import com.dool.characterservice.api.request.CharacterMissionRequestDto;
import com.dool.characterservice.api.response.CharacterMissionResponseDto;

public interface CharacterMissionService {
    boolean getMission(Long user_character_id);
    CharacterMissionResponseDto postMission(CharacterMissionRequestDto requestDto);
    Long countMission(Long user_character_id);
}
