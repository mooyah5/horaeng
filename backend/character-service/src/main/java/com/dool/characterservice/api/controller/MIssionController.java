package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.request.MissionRequest;
import com.dool.characterservice.api.response.MissionResponseDto;
import com.dool.characterservice.api.service.MissionService;
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
@RequestMapping("/character-service/mission")
public class MIssionController {
    private static final Object SUCCESS = "SUCCESS";
    private static final Object FAIL = "FAIL";
    private final MissionService missionService;

    @GetMapping
    private ResponseEntity<?> getMissionList() {
        List<MissionResponseDto> missionResponseDtoList = missionService.getMission();

        return ResponseEntity.status(200).body(missionResponseDtoList);
    }

    @GetMapping("{id}")
    private ResponseEntity<?> getMission(@PathVariable("id") Long id){
        MissionResponseDto missionResponseDto = missionService.missionDetail(id);

        return ResponseEntity.status(200).body(missionResponseDto);
    }

    @PostMapping
    private ResponseEntity<?> postMission(@RequestBody MissionRequest missionRequest){
        Map<String, Object> result = new HashMap<>();
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
        try {
            MissionResponseDto responseDto = missionService.creat(missionRequest);

            if(responseDto != null){
                result.put("mission", responseDto);
            }

            status = HttpStatus.OK;
            result.put("message", SUCCESS);
        }catch (Exception e){
            result.put("message", FAIL);
        }

        return new ResponseEntity<>(result, status);
    }

    @DeleteMapping("{id}")
    private ResponseEntity<?> del(@PathVariable("id") Long id){

        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
