package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.CharacterMission;
import com.dool.characterservice.db.domain.MissionType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface CharacterMissionRepository extends JpaRepository<CharacterMission, Long> {
    CharacterMission findTopByUserCharacter_IdAndIsClearTrueAndMission_TypeOrderByCreatedDateDesc(Long user_character_id, MissionType missionType);
    Long countAllByUserCharacter_IdAndCreatedDateLessThanAndIsClearTrueAndMission_Type(Long user_character_id, LocalDate date, MissionType missionType);
}
