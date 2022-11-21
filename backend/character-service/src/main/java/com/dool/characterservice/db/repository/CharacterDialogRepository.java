package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.CharacterDialog;
import com.dool.characterservice.db.domain.Characters;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CharacterDialogRepository extends JpaRepository<CharacterDialog,Long> {
    List<CharacterDialog> findAllByCharacters_Id(Long id);
}
