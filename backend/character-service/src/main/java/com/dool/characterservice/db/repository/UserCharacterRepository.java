package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.UserCharacter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserCharacterRepository extends JpaRepository<UserCharacter, Long> {
    UserCharacter findByUserIdAndStatusFalse(Long user_id);
}
