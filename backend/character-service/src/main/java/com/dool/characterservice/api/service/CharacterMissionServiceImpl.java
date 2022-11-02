package com.dool.characterservice.api.service;

import com.dool.characterservice.db.domain.CharacterMission;
import com.dool.characterservice.db.repository.CharacterMissionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CharacterMissionServiceImpl implements CharacterMissionService {

    final CharacterMissionRepository characterMissionRepository;
    @Override
    public CharacterMission getMission(Long id) {

        characterMissionRepository.findById(id);

        return null;
    }
}
