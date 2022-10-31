package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.response.CharacterResponseDto;
import com.dool.characterservice.api.service.CharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/character")
public class CharacterController {

    private final CharacterService characterService;

    @GetMapping("/")
    private List<CharacterResponseDto> findAll(){
        return null;
    }
}
