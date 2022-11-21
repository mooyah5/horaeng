package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.CharacterMission;
import com.dool.characterservice.db.domain.MissionType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface CharacterMissionRepository extends JpaRepository<CharacterMission, Long> {
    Optional<CharacterMission> findTopByUserCharacter_IdAndIsClearTrueAndMission_TypeOrderByCreatedDateDesc(Long user_character_id, MissionType missionType);
    Optional<Long> countAllByUserCharacter_IdAndCreatedDateLessThanAndIsClearTrueAndMission_Type(Long user_character_id, LocalDate date, MissionType missionType);
    // 존재하는 것을 조회해 비교하는 방식
    Optional<CharacterMission> findTopByUserCharacter_IdAndMission_TypeAndCreatedDate(Long user_character_id, MissionType missionType, LocalDate date);
    Optional<CharacterMission> findFirstByUserCharacter_IdAndMission_TypeAndCreatedDate(Long user_character_id, MissionType type, LocalDate date);
    List<CharacterMission> findAllByUserCharacter_IdAndMission_TypeAndCreatedDate(Long user_character_id, MissionType type, LocalDate date);
    Optional<Long> countAllByUserCharacter_IdAndMission_TypeAndIsClearTrue(Long user_character_id, MissionType type);
    // 존재하는지 exit를 사용한 조회
    boolean existsCharacterMissionByUserCharacter_IdAndMission_TypeAndCreatedDateAndIsClearTrue(Long user_character_id, MissionType type, LocalDate date);
}
