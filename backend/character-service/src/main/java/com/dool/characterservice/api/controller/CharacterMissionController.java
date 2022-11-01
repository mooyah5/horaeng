package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.service.CharacterMissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/character-mission")
public class CharacterMissionController {

    private CharacterMissionService characterMissionService;

    @GetMapping("/{id}")
    private ResponseEntity getMission(@PathVariable("id") String id){
        return null;
    }

}
