package com.dool.characterservice.api.service;

import com.dool.characterservice.db.domain.CharacterDialog;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CharacterDialogServiceImpl implements CharacterDialogService{

    @Override
    public CharacterDialog getDialog(Long id) {
        return null;
    }
}
