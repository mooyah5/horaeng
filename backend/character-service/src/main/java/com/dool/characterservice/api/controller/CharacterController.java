package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.response.CharactersResponseDto;
import com.dool.characterservice.api.service.CharactersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/character")
public class CharacterController {

    private final CharactersService characterService;

    @GetMapping
    private ResponseEntity<List<CharactersResponseDto>> findAll(){
        List<CharactersResponseDto> charactersList = characterService.getCharacters();

        return ResponseEntity.status(200).body(charactersList);
    }
}
