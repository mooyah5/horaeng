package com.dool.characterservice.api.service;

import com.dool.characterservice.api.request.UserCharacterRequestDto;
import com.dool.characterservice.api.response.UserCharacterResponseDto;
import com.dool.characterservice.db.domain.CharacterLevel;
import com.dool.characterservice.db.domain.Characters;
import com.dool.characterservice.db.domain.UserCharacter;
import com.dool.characterservice.db.repository.CharactersRepository;
import com.dool.characterservice.db.repository.UserCharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class UserCharacterServiceImpl implements UserCharacterService{

    private final UserCharacterRepository userCharacterRepository;
    private final CharactersRepository charactersRepository;

    @Override
    public UserCharacterResponseDto creatUserCharacter(UserCharacterRequestDto requestDto) {
        Characters characters = charactersRepository.findById(requestDto.getCharacter_id()).get();

        UserCharacter userCharacter = UserCharacter.builder()
                .userId(requestDto.getUser_id())
                .characters(characters)
                .nickname(requestDto.getNickname())
                .level(CharacterLevel.LEVEL_1)
                .createdDate(LocalDateTime.now())
                .build();

        userCharacterRepository.save(userCharacter);

        return UserCharacterResponseDto.builder()
                .id(userCharacter.getId())
                .character_id(userCharacter.getCharacters().getId())
                .user_id(userCharacter.getUserId())
                .characterLevel(userCharacter.getLevel())
                .nickname(userCharacter.getNickname())
                .created_date(userCharacter.getCreatedDate())
                .build();
    }

    @Override
    public UserCharacterResponseDto getUserCharacter(Long id) {
        UserCharacter userCharacter = userCharacterRepository.findById(id).get();

        return UserCharacterResponseDto.builder()
                .id(userCharacter.getId())
                .character_id(userCharacter.getCharacters().getId())
                .user_id(userCharacter.getUserId())
                .created_date(userCharacter.getCreatedDate())
                .nickname(userCharacter.getNickname())
                .characterLevel(userCharacter.getLevel())
                .build();
    }

    @Override
    public Long setBackground(Long id, String background) {
        return null;
    }
}
