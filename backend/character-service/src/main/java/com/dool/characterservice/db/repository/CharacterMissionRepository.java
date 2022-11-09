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
    Optional<CharacterMission> findTopByUserCharacter_IdAndMission_TypeOrderByCreatedDateDesc(Long user_character_id, MissionType missionType);
    Optional<CharacterMission> findFirstByUserCharacter_IdAndMission_TypeAndCreatedDate(Long user_character_id, MissionType type, LocalDate date);
    List<CharacterMission> findAllByUserCharacter_IdAndMission_TypeAndCreatedDate(Long user_character_id, MissionType type, LocalDate date);
}
