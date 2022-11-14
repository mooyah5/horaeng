package com.dool.characterservice.api.service;

import com.dool.characterservice.api.response.CharacterDialogResponseDto;

import java.util.List;

public interface CharacterDialogService {
    List<CharacterDialogResponseDto> getDialog(Long id);
}
