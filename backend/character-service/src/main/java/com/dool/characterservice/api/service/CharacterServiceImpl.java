package com.dool.characterservice.api.service;

import com.dool.characterservice.api.response.CharacterResponseDto;
import com.dool.characterservice.db.domain.Characters;
import com.dool.characterservice.db.repository.CharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService{

    private final CharacterRepository characterRepository;

    @Override
    public List<CharacterResponseDto> getCharacter() {
        List<Characters> characterList = characterRepository.findAll();
        List<CharacterResponseDto> characterResponseDtoList = new ArrayList<>();

        return null;
    }
}
