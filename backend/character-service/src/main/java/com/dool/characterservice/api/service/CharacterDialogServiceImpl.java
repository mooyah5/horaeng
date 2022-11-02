package com.dool.characterservice.api.service;

import com.dool.characterservice.db.domain.CharacterDialog;
import com.dool.characterservice.db.repository.CharacterDialogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CharacterDialogServiceImpl implements CharacterDialogService{

    private CharacterDialogRepository characterDialogRepository;

    @Override
    public CharacterDialog getDialog(Long id) {

        Optional<CharacterDialog> characterDialog = characterDialogRepository.findById(id);

        return null;
    }
}
