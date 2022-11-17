package com.dool.socialservice.api.service;

import com.dool.socialservice.api.client.CharacterMissionServiceClient;
import com.dool.socialservice.api.client.UserServiceClient;
import com.dool.socialservice.api.request.AddPointRequest;
import com.dool.socialservice.api.request.CreateDiaryRequest;
import com.dool.socialservice.api.response.CreateDiaryResponse;
import com.dool.socialservice.api.response.DiaryResponse;
import com.dool.socialservice.db.domain.Diary;
import com.dool.socialservice.db.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class DiaryServiceImpl implements DiaryService {

    private final DiaryRepository diaryRepository;
    private final CharacterMissionServiceClient characterMissionServiceClient;
    private final UserServiceClient userServiceClient;

    @Override
    public Diary getDiary(Long id) {
        return diaryRepository.get(id);
    }

    @Override
    public List<Diary> getDiaryByCharacters(Long charactersId, Long lastId){
        return diaryRepository.getByCharacters(charactersId, lastId);
    }

    @Override
    public List<Diary> getAllDiary(Long lastId) {
        return diaryRepository.getAll(lastId);
    }

    @Override
    public List<Diary> getDiaryByUserCharacter(Long userCharacterId) {
        return diaryRepository.getByUserCharacter(userCharacterId);
    }

    @Override
    public CreateDiaryResponse createDiary(CreateDiaryRequest request) {
        Diary diary = new Diary();
        diary.setUserId(request.getUserId());
        diary.setImgUrl(request.getImgUrl());
        diary.setContent(request.getContent());
        diary.setCharactersId(request.getCharactersId());
        diary.setUserCharacterId(request.getUserCharacterId());
        diary.setMain(request.isMain());

        AddPointRequest addPointRequest = new AddPointRequest();
        addPointRequest.setUserId(request.getUserId());
        addPointRequest.setPoint(request.getAddPoint());

        userServiceClient.addPoint(addPointRequest);
        diaryRepository.create(diary);
        characterMissionServiceClient.completeMission(request.getCharacterMissionId());
        boolean isCharacterMax = (boolean)characterMissionServiceClient.checkGrown(request.getUserCharacterId()).get("isCharacterMax");
        return CreateDiaryResponse.of(diary, isCharacterMax);
    }

    @Override
    public void deleteDiary(Long id) {
        Diary diary = diaryRepository.get(id);
        diaryRepository.delete(diary);
    }
}
