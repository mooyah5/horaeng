package com.dool.characterservice.api.service;

import com.dool.characterservice.api.request.UserCharacterRequestDto;
import com.dool.characterservice.api.response.UserCharacterResponseDto;

public interface UserCharacterService {
    UserCharacterResponseDto creatUserCharacter(UserCharacterRequestDto requestDto);
    UserCharacterResponseDto getUserCharacter(Long id);
    UserCharacterResponseDto getUserCharacterByUserId(String user_id);
    Long setBackground(Long id, String background);
}
