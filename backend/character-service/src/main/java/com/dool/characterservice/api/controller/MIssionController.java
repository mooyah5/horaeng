package com.dool.characterservice.api.controller;

import com.dool.characterservice.api.response.MissionResponseDto;
import com.dool.characterservice.api.service.MissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/character-service/mission")
public class MIssionController {

    private final MissionService missionService;

    @GetMapping
    private ResponseEntity<List<MissionResponseDto>> getMissionList() {
        List<MissionResponseDto> missionResponseDtoList = missionService.getMission();

        return ResponseEntity.status(200).body(missionResponseDtoList);
    }

    @GetMapping("{id}")
    private ResponseEntity getMission(@PathVariable("id") Long id){
        MissionResponseDto missionResponseDto = missionService.missionDetail(id);

        return ResponseEntity.status(200).body(missionResponseDto);
    }

    @PostMapping
    private ResponseEntity postMission(){

        return null;
    }
}
