package com.dool.characterservice.api.service;

import com.dool.characterservice.api.response.CharactersResponseDto;
import com.dool.characterservice.db.domain.Characters;
import com.dool.characterservice.db.repository.CharactersRepository;
import com.dool.characterservice.db.repository.MissionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CharactersServiceImpl implements CharactersService{

    private final CharactersRepository charactersRepository;
    private final MissionRepository missionRepository;

    @Override
    public List<CharactersResponseDto> getCharacters() {
        List<Characters> characterList = charactersRepository.findAll();

        List<CharactersResponseDto> result = new ArrayList<>();

        characterList.forEach(v -> {
            String title = missionRepository.findById(v.getMissionId()).get().getTitle();
            result.add(CharactersResponseDto.builder()
                            .id(v.getId())
                            .backgroundId(v.getBackgroundId())
                            .info(v.getInfo())
                            .missionId(v.getMissionId())
                            .missionTitle(title)
                            .name(v.getName())
                            .build());
        });

        return result;
    }
}
