package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.Mission;
import com.dool.characterservice.db.domain.MissionType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MissionRepository extends JpaRepository<Mission, Long> {
    List<Mission> findAllByType(MissionType type);
}
