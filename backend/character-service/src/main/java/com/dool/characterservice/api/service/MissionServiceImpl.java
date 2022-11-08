package com.dool.characterservice.api.service;

import com.dool.characterservice.api.request.MissionRequest;
import com.dool.characterservice.api.response.MissionResponseDto;
import com.dool.characterservice.db.domain.Mission;
import com.dool.characterservice.db.domain.MissionType;
import com.dool.characterservice.db.repository.MissionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MissionServiceImpl implements MissionService{
    private final MissionRepository missionRepository;

    @Override
    public MissionResponseDto missionDetail(Long id) {
        Mission mission = missionRepository.findById(id).get();

        return MissionResponseDto.builder()
                .id(mission.getId())
                .title(mission.getTitle())
                .content(mission.getContent())
                .type(mission.getType())
                .img(mission.getImg())
                .build();
    }

    @Override
    public List<MissionResponseDto> getMission() {
        List<Mission> missionList = missionRepository.findAllByType(MissionType.Common);
        List<MissionResponseDto> missionResponseDtoList = new ArrayList<>();

        missionList.forEach(v -> {
            missionResponseDtoList.add(MissionResponseDto.builder()
                            .id(v.getId())
                            .img(v.getImg())
                            .content(v.getContent())
                            .title(v.getTitle())
                            .type(v.getType())
                    .build());
        });
        return missionResponseDtoList;
    }

    @Override
    public MissionResponseDto creat(MissionRequest missionRequest) {
        Mission mission = Mission.builder()
                .title(missionRequest.getTitle())
                .content(missionRequest.getContent())
                .img(missionRequest.getImg())
                .type(MissionType.Common)
                .build();

        Long id = missionRepository.save(mission).getId();

        Mission saved = missionRepository.findById(id).orElseThrow();

        MissionResponseDto result = MissionResponseDto.builder()
                .id(saved.getId())
                .content(saved.getContent())
                .title(saved.getTitle())
                .img(saved.getImg())
                .type(saved.getType())
                .build();

        return result;
    }

    @Override
    public void del(Long id) {
        missionRepository.delete(missionRepository.findById(id).orElseThrow());

        return;
    }

    @Override
    public boolean update(Long id, MissionRequest missionRequest) {
        Optional<Mission> oMission = missionRepository.findById(id);
        if(oMission.isPresent()){
            Mission mission = oMission.get();
            if(!missionRequest.getTitle().isBlank()) {
                mission.setTitle(missionRequest.getTitle());
            }
            if(!missionRequest.getContent().isBlank()) {
                mission.setContent(missionRequest.getContent());
            }
            if(!missionRequest.getImg().isBlank()) {
                mission.setImg(missionRequest.getImg());
            }
            return true;
        }
        return false;
    }
}
