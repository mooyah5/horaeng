package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.Mission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MissionRepository extends JpaRepository<Mission, Long> {
}
