package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.UserCharacter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserCharacterRepository extends JpaRepository<UserCharacter, Long> {
    Optional<UserCharacter> findByUserIdAndStatusFalse(String user_id);
    List<UserCharacter> findAllByUserIdAndStatusTrue(String user_id);
}
