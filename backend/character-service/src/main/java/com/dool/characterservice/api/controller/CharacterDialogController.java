package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.service.CharacterDialogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/character-dialog")
public class CharacterDialogController {

    private final CharacterDialogService characterDialogService;

    @GetMapping("/{id}")
    private ResponseEntity getDialog(@PathVariable("id") Long id){

        return null;
    }
}
