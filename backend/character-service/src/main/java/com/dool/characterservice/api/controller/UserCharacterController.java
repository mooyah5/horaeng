package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.request.UserCharacterRequestDto;
import com.dool.characterservice.api.response.UserCharacterResponseDto;
import com.dool.characterservice.api.service.UserCharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/user-character")
public class UserCharacterController {

    private final UserCharacterService userCharacterService;

    @PostMapping
    private ResponseEntity creatUserCharacter(@RequestBody UserCharacterRequestDto requestDto){
        UserCharacterResponseDto userCharacterResponseDto = userCharacterService.creatUserCharacter(requestDto);

        return ResponseEntity.status(200).body(userCharacterResponseDto);
    }

    @GetMapping("{id}")
    private ResponseEntity getUserCharacter(@PathVariable("id") Long id){
        UserCharacterResponseDto userCharacterResponseDto = userCharacterService.getUserCharacter(id);

        return ResponseEntity.status(200).body(userCharacterResponseDto);
    }
}
