package com.dool.characterservice.api.service;

import com.dool.characterservice.api.request.CharacterMissionRequestDto;
import com.dool.characterservice.api.response.CharacterMissionResponseDto;
import com.dool.characterservice.db.domain.CharacterMission;
import com.dool.characterservice.db.domain.Mission;
import com.dool.characterservice.db.domain.UserCharacter;
import com.dool.characterservice.db.repository.CharacterMissionRepository;
import com.dool.characterservice.db.repository.MissionRepository;
import com.dool.characterservice.db.repository.UserCharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CharacterMissionServiceImpl implements CharacterMissionService {
    private final UserCharacterRepository userCharacterRepository;
    private final CharacterMissionRepository characterMissionRepository;
    private final MissionRepository missionRepository;
    @Override
    public CharacterMissionResponseDto getMission(Long id) {

        CharacterMission mission = characterMissionRepository.findById(id).get();


        return null;
    }

    @Override
    public CharacterMissionResponseDto postMission(CharacterMissionRequestDto requestDto) {
        UserCharacter userCharacter = userCharacterRepository.findById(requestDto.getUser_character_id()).get();
        Mission mission = missionRepository.findById(userCharacter.getCharacters().getMissionId()).get();

        LocalDateTime date = LocalDateTime.now();
        date.format(DateTimeFormatter.BASIC_ISO_DATE);

        CharacterMission characterMission = CharacterMission.builder()
                .userCharacter(userCharacter)
                .mission(mission)
                .createdDate(date)
                .isClear(false)
                .build();

        characterMissionRepository.save(characterMission);


        return CharacterMissionResponseDto.builder()
                .id(characterMission.getId())
                .mission_id(characterMission.getId())
                .created_date(characterMission.getCreatedDate())
                .is_clear(characterMission.isClear())
                .user_character_id(characterMission.getUserCharacter().getId())
                .build();
    }

    @Override
    public Long countMission(Long userCharacterId) {
        LocalDateTime date = LocalDateTime.now();
        date.format(DateTimeFormatter.BASIC_ISO_DATE);
        Optional<UserCharacter> userCharacter = userCharacterRepository.findById(userCharacterId);

        Long count = characterMissionRepository.countAllByUserCharacterAndCreatedDateLessThanAndClearIsFalse(userCharacter.get(), date);

        return count;
    }
}
