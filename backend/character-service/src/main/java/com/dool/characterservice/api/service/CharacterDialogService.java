package com.dool.characterservice.api.service;

import com.dool.characterservice.db.domain.CharacterDialog;

public interface CharacterDialogService {
    CharacterDialog getDialog(Long id);
}
