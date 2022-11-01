package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.Mission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MissionRepository extends JpaRepository<Mission, Long> {
}
