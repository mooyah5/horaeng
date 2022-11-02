package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.request.CharacterMissionRequestDto;
import com.dool.characterservice.api.service.CharacterMissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/character-mission")
public class CharacterMissionController {

    private CharacterMissionService characterMissionService;

    @GetMapping("/{id}")
    private ResponseEntity getMission(@PathVariable("id") Long id){
        characterMissionService.getMission(id);
        return null;
    }

    @PostMapping
    private ResponseEntity postMission(@RequestBody CharacterMissionRequestDto requestDto){
        characterMissionService.postMission(requestDto);
        return null;
    }
}
