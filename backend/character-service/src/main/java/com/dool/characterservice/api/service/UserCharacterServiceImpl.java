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

import java.time.LocalDate;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserCharacterServiceImpl implements UserCharacterService{

    private final UserCharacterRepository userCharacterRepository;
    private final CharactersRepository charactersRepository;

    // 유저 캐릭터 만들기
    @Override
    public UserCharacterResponseDto creatUserCharacter(UserCharacterRequestDto requestDto) {
        Characters characters = charactersRepository.findById(requestDto.getCharacter_id()).get();
        LocalDate date = LocalDate.now();

        UserCharacter userCharacter = UserCharacter.builder()
                .userId(requestDto.getUser_id())
                .characters(characters)
                .nickname(requestDto.getNickname())
                .level(CharacterLevel.LEVEL_1)
                .createdDate(date)
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

    // 유저 캐릭터 아이디로 유저 캐릭터 찾아오기
    @Override
    public UserCharacterResponseDto getUserCharacter(Long id) {
        Optional<UserCharacter> object = userCharacterRepository.findById(id);
        UserCharacter userCharacter = object.get();

        return UserCharacterResponseDto.builder()
                .id(userCharacter.getId())
                .character_id(userCharacter.getCharacters().getId())
                .user_id(userCharacter.getUserId())
                .created_date(userCharacter.getCreatedDate())
                .nickname(userCharacter.getNickname())
                .characterLevel(userCharacter.getLevel())
                .status(userCharacter.isStatus())
                .build();
    }

    // 유저 아이디로 유저 캐릭터 찾아오기
    @Override
    public UserCharacterResponseDto getUserCharacterByUserId(Long user_id) {
//        Optional<UserCharacter> object = userCharacterRepository.findByUserId_IdAndStatusFalse(user_id);
        UserCharacter userCharacter = userCharacterRepository.findByUserIdAndStatusFalse(user_id);

        return UserCharacterResponseDto.builder()
                .id(userCharacter.getId())
                .character_id(userCharacter.getCharacters().getId())
                .user_id(userCharacter.getUserId())
                .created_date(userCharacter.getCreatedDate())
                .nickname(userCharacter.getNickname())
                .characterLevel(userCharacter.getLevel())
                .status(userCharacter.isStatus())
                .build();
    }

    @Override
    public Long setBackground(Long id, String background) {
        return null;
    }
}
