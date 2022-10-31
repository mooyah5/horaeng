package com.dool.characterservice.api.service;

import com.dool.characterservice.api.response.CharacterResponseDto;

import java.util.List;

public interface CharacterService {
    List<CharacterResponseDto> getCharacter();
}
