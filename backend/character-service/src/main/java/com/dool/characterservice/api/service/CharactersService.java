package com.dool.characterservice.api.service;

import com.dool.characterservice.api.response.CharactersResponseDto;

import java.util.List;

public interface CharactersService {
    List<CharactersResponseDto> getCharacters();
}
