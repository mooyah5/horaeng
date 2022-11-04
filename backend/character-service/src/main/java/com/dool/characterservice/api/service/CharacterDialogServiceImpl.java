package com.dool.characterservice.api.service;

import com.dool.characterservice.api.response.CharacterDialogResponseDto;
import com.dool.characterservice.db.domain.CharacterDialog;
import com.dool.characterservice.db.domain.Characters;
import com.dool.characterservice.db.repository.CharacterDialogRepository;
import com.dool.characterservice.db.repository.CharactersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CharacterDialogServiceImpl implements CharacterDialogService{
    private final CharacterDialogRepository characterDialogRepository;

    @Override
    public List<CharacterDialogResponseDto> getDialog(Long id) {

        List<CharacterDialog> characterDialog = characterDialogRepository.findAllByCharacters_Id(id);
        List<CharacterDialogResponseDto> responseDtos = new ArrayList<>();

        characterDialog.forEach(v -> {
            responseDtos.add(CharacterDialogResponseDto.builder()
                            .id(v.getId())
                            .characters_id(v.getCharacters().getId())
                            .dialog(v.getDialog())
                            .characterDialogType(v.getType())
                    .build());
        });
        return responseDtos;
    }
}
