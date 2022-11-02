package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.Characters;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CharactersRepository extends JpaRepository<Characters, Long> {
}
