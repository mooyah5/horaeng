package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.service.UserCharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/user-character")
public class UserCharacterController {

    private final UserCharacterService characterUserService;

    @PostMapping
    private ResponseEntity creatUserCharacter(){
        return null;
    }

    @GetMapping
    private ResponseEntity getUserCharacter(){
        return null;
    }

    @PatchMapping
    private ResponseEntity patchUserCharacter(){
        return null;
    }
}
