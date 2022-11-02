package com.dool.characterservice.api.service;

import com.dool.characterservice.api.response.MissionResponseDto;

import java.util.List;

public interface MissionService {
    MissionResponseDto missionDetail(Long id);
    List<MissionResponseDto> getMission();
}
