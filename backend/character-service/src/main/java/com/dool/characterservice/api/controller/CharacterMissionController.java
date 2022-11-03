package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.request.CharacterMissionRequestDto;
import com.dool.characterservice.api.response.CharacterMissionCountResponseDto;
import com.dool.characterservice.api.response.CharacterMissionResponseDto;
import com.dool.characterservice.api.service.CharacterMissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/character-mission")
public class CharacterMissionController {

    private final CharacterMissionService characterMissionService;

    @GetMapping("/{id}")
    private ResponseEntity getMission(@PathVariable("id") Long id){
        characterMissionService.getMission(id);
        return null;
    }

    @PostMapping
    private ResponseEntity postMission(@RequestBody CharacterMissionRequestDto requestDto){
        CharacterMissionResponseDto characterMissionResponseDto = characterMissionService.postMission(requestDto);

        return ResponseEntity.status(200).body(characterMissionResponseDto);
    }

    @GetMapping("/main/{user_character_id}")
    private ResponseEntity countMission(@PathVariable("user_character_id") Long user_character_id){
        Long characterMissionCountResponseDto = characterMissionService.countMission(user_character_id);

        System.out.println("======================================");
        System.out.println(characterMissionCountResponseDto);
        return ResponseEntity.status(200).body(characterMissionCountResponseDto);
    }
}
