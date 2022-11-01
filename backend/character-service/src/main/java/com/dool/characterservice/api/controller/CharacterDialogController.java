package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.service.CharacterDialogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/character-dialog")
public class CharacterDialogController {

    private final CharacterDialogService characterDialogService;


}
