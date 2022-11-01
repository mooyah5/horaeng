package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.CharacterMission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterMissionRepository extends JpaRepository<CharacterMission, Long> {
}
