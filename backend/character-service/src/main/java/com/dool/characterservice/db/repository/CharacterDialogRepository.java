package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.CharacterDialog;
import com.dool.characterservice.db.domain.Characters;
import org.hibernate.metamodel.model.convert.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterDialogRepository extends JpaRepository<CharacterDialog,Long> {
}
