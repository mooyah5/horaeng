package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.request.CharacterMissionRequestDto;
import com.dool.characterservice.api.response.CharacterMissionResponseDto;
import com.dool.characterservice.api.service.CharacterMissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/character-mission")
public class CharacterMissionController {

    private final CharacterMissionService characterMissionService;

    @GetMapping("/main/{user_character_id}")
    private ResponseEntity getMission(@PathVariable("user_character_id") Long user_character_id){
        boolean response = characterMissionService.getMission(user_character_id);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

//    @PostMapping
//    private ResponseEntity postMission(@RequestBody CharacterMissionRequestDto requestDto){
//        CharacterMissionResponseDto characterMissionResponseDto = characterMissionService.postMission(requestDto);
//
//        return ResponseEntity.status(HttpStatus.OK).body(characterMissionResponseDto);
//    }

    @GetMapping("/count/{user_character_id}")
    private ResponseEntity countMission(@PathVariable("user_character_id") Long user_character_id){
        Long characterMissionCountResponseDto = characterMissionService.countMission(user_character_id);

        return ResponseEntity.status(HttpStatus.OK).body(characterMissionCountResponseDto);
    }

    @PutMapping("/{CMId}")
    private ResponseEntity<?> complete(@PathVariable("CMId") Long CMId){
        characterMissionService.complete(CMId);

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }
}
