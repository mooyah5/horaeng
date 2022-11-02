package com.dool.characterservice.api.service;

import com.dool.characterservice.api.request.CharacterMissionRequestDto;
import com.dool.characterservice.api.response.CharacterMissionResponseDto;
import com.dool.characterservice.db.domain.CharacterMission;

public interface CharacterMissionService {
    CharacterMissionResponseDto getMission(Long id);
    CharacterMissionResponseDto postMission(CharacterMissionRequestDto requestDto);
}
