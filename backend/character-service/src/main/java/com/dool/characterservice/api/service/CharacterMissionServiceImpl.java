package com.dool.characterservice.api.service;

import com.dool.characterservice.api.response.CharacterMissionResponseDto;
import com.dool.characterservice.db.domain.CharacterMission;
import com.dool.characterservice.db.domain.Mission;
import com.dool.characterservice.db.domain.MissionType;
import com.dool.characterservice.db.domain.UserCharacter;
import com.dool.characterservice.db.repository.CharacterMissionRepository;
import com.dool.characterservice.db.repository.MissionRepository;
import com.dool.characterservice.db.repository.UserCharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
@Transactional
public class CharacterMissionServiceImpl implements CharacterMissionService {
    private final int randSize = 3;
    private final UserCharacterRepository userCharacterRepository;
    private final CharacterMissionRepository characterMissionRepository;
    private final MissionRepository missionRepository;
    @Override
    public boolean todayClear(Long user_character_id) {
        boolean status = false;
        LocalDate today = LocalDate.now();

        CharacterMission characterMission = characterMissionRepository.findTopByUserCharacter_IdAndMission_TypeOrderByCreatedDateDesc(user_character_id, MissionType.Personal).orElseGet(() ->
            postMission(user_character_id));

        if(characterMission.isClear() && today.equals(characterMission.getCreatedDate())){
            status = true;
        }

        return status;
    }

    @Override
    public CharacterMission postMission(Long user_character_id) {
        UserCharacter userCharacter = userCharacterRepository.findById(user_character_id).orElseThrow();
        Mission mission = missionRepository.findById(userCharacter.getCharacters().getMissionId()).orElseThrow();

        LocalDate today = LocalDate.now();

        CharacterMission characterMission = CharacterMission.builder()
                .userCharacter(userCharacter)
                .mission(mission)
                .createdDate(today)
                .isClear(false)
                .build();

        characterMissionRepository.save(characterMission);

        long day = today.toEpochDay();
        Random random = new Random(day);

        List<Mission> list = missionRepository.findAllByType(MissionType.Common);
        List<CharacterMission> randComm = new ArrayList<>();

        int cnt = 0;
        int[] arr = new int[randSize];

        loop: while(cnt < randSize){
            int r = random.nextInt(list.size());
            for(int i = 0; i < cnt; i++){
                if(arr[i] == r){
                    continue loop;
                }
            }
            arr[cnt++] = r;
        }

        for(int i : arr){
            randComm.add( CharacterMission.builder()
                    .userCharacter(userCharacter)
                    .mission(list.get(i))
                    .createdDate(today)
                    .isClear(false)
                    .build());
        }

        for(CharacterMission m : randComm){
            characterMissionRepository.save(m);
        }
        return characterMission;
    }

    @Override
    public Long countMission(Long user_character_id) {
        LocalDate date = LocalDate.now();

        Long count = characterMissionRepository.countAllByUserCharacter_IdAndCreatedDateLessThanAndIsClearTrueAndMission_Type(user_character_id, date, MissionType.Personal).orElse(0L) + 1;

        return count;
    }

    @Override
    public void complete(Long CMId) {
        CharacterMission characterMission = characterMissionRepository.findById(CMId).orElseThrow();
        characterMission.setClear(true);
    }

    @Override
    public Long mainId(Long user_character_id) {
        Long mainId = characterMissionRepository.findFirstByUserCharacter_IdAndMission_TypeAndCreatedDate(user_character_id, MissionType.Personal, LocalDate.now()).orElseThrow().getId();
        return mainId;
    }

    @Override
    public List<CharacterMissionResponseDto> commonMission(Long user_character_id) {
        List<CharacterMission> list = characterMissionRepository.findAllByUserCharacter_IdAndMission_TypeAndCreatedDate(user_character_id, MissionType.Common, LocalDate.now());
        List<CharacterMissionResponseDto> result = new ArrayList<>();

        list.forEach(v -> {
            result.add(CharacterMissionResponseDto.builder()
                            .id(v.getId())
                            .mission(v.getMission())
                            .created_date(v.getCreatedDate())
                            .clear(v.isClear())
                    .build());
        });

        return result;
    }


}
