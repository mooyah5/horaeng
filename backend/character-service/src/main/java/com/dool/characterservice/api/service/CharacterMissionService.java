package com.dool.characterservice.api.service;

import com.dool.characterservice.api.response.CharacterMissionResponseDto;
import com.dool.characterservice.db.domain.CharacterMission;

import java.util.List;

public interface CharacterMissionService {
    boolean todayMainClear(Long user_character_id);
    boolean todayCommonClear(Long user_character_id);
    CharacterMission postMission(Long user_character_id);
    Long countMission(Long user_character_id);
    boolean complete(Long CMId);
    Long mainId(Long user_character_id);
    List<CharacterMissionResponseDto> commonMission(Long user_character_id);
}
