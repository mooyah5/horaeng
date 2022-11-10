package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.request.UserCharacterRequestDto;
import com.dool.characterservice.api.response.UserCharacterResponseDto;
import com.dool.characterservice.api.service.CharacterMissionService;
import com.dool.characterservice.api.service.UserCharacterService;
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
@RequestMapping("/character-service/user-character")
public class UserCharacterController {
    private static final Object SUCCESS = "SUCCESS";
    private static final Object FAIL = "FAIL";
    private final UserCharacterService userCharacterService;
    private final CharacterMissionService characterMissionService;

    @PostMapping
    private ResponseEntity creatUserCharacter(@RequestBody UserCharacterRequestDto requestDto){
        UserCharacterResponseDto userCharacterResponseDto = userCharacterService.creatUserCharacter(requestDto);

        return ResponseEntity.status(200).body(userCharacterResponseDto);
    }

    @GetMapping("/detail/{id}")
    private ResponseEntity getUserCharacter(@PathVariable("id") Long id){
        UserCharacterResponseDto userCharacterResponseDto = userCharacterService.getUserCharacter(id);

        return ResponseEntity.status(200).body(userCharacterResponseDto);
    }

    @GetMapping("/user/{user_id}")
    private ResponseEntity<?> getCharacterInfos(@PathVariable("user_id") String user_id){
        Map<String, Object> result = new HashMap<>();
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try {
            UserCharacterResponseDto userCharacterResponseDto = userCharacterService.getUserCharacterByUserId(user_id);

            result.put("userCharacter", userCharacterResponseDto);

            if(userCharacterResponseDto != null) {
                boolean todayMission = characterMissionService.todayClear(userCharacterResponseDto.getId());
                Long countMission = characterMissionService.countMission(userCharacterResponseDto.getId());

                result.put("today", todayMission);
                result.put("count", countMission);
            }
            status = HttpStatus.OK;
            result.put("message", SUCCESS);
        } catch (Exception e){
            result.put("message", FAIL);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

    @GetMapping("/character/{user_id}")
    private ResponseEntity<?> grownList(@PathVariable ("user_id") String user_id){
        Map<String, Object> result = new HashMap<>();
        HttpStatus status;

        try {
            List<UserCharacterResponseDto> list = userCharacterService.getGrownCharacterList(user_id);

            result.put("grownList", list);
            status = HttpStatus.OK;
            result.put("message", SUCCESS);
        } catch (Exception e){
            result.put("message", FAIL);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

    @DeleteMapping("/{UCId}")
    private ResponseEntity<?> del(@PathVariable ("UCId") Long UCId){
        userCharacterService.del(UCId);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
