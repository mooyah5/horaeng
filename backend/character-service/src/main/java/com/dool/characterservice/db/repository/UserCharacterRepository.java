package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.UserCharacter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCharacterRepository extends JpaRepository<UserCharacter, Long> {
}
