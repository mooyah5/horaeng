package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.Character;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterRepository extends JpaRepository<Character, Long> {
}
