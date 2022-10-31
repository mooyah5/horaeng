package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.Characters;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterRepository extends JpaRepository<Characters, Long> {
}
