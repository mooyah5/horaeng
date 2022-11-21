package com.dool.characterservice.api.response;

import com.dool.characterservice.db.domain.CharacterDialog;
import com.dool.characterservice.db.domain.CharacterDialogType;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CharacterDialogResponseDto {
    private Long id;
    private String dialog;
    private Long characters_id;
    private CharacterDialogType characterDialogType;
}
