package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.response.CharacterMissionResponseDto;
import com.dool.characterservice.api.service.CharacterMissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/character-mission")
public class CharacterMissionController {
    private static final Object SUCCESS = "SUCCESS";
    private static final Object FAIL = "FAIL";
    private final CharacterMissionService characterMissionService;

    @GetMapping("/main/{user_character_id}")
    private ResponseEntity<?> getMission(@PathVariable("user_character_id") Long user_character_id){
        Map<String, Object> result = new HashMap<>();
        HttpStatus status;

        try {
            Long missionId = characterMissionService.mainId(user_character_id);
            result.put("characterMissionId", missionId);
            status = HttpStatus.OK;
            result.put("message", SUCCESS);
        } catch (Exception e){
            result.put("message", FAIL);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result, status);
    }

    @GetMapping("/common/{user_character_id}")
    private ResponseEntity<?> getCommon(@PathVariable("user_character_id") Long user_character_id){
        Map<String, Object> result = new HashMap<>();
        HttpStatus status;

        try{
            List<CharacterMissionResponseDto> list = characterMissionService.commonMission(user_character_id);
            result.put("commonMission", list);
            result.put("size", list.size());
            result.put("message", SUCCESS);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message", FAIL);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
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
