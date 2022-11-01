package com.dool.characterservice.db.repository;

import com.dool.characterservice.db.domain.CharacterDialog;
import org.hibernate.metamodel.model.convert.spi.JpaAttributeConverter;

public interface CharacterDialogRepository extends JpaAttributeConverter<CharacterDialog,Long> {
}
