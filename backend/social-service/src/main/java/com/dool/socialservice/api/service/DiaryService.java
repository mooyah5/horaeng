package com.dool.socialservice.api.service;

import com.dool.socialservice.api.request.CreateDiaryRequest;
import com.dool.socialservice.api.response.CreateDiaryResponse;
import com.dool.socialservice.api.response.DiaryResponse;
import com.dool.socialservice.db.domain.Diary;

import java.util.List;

public interface DiaryService {
    public Diary getDiary(Long id);
    public List<Diary> getDiaryByCharacters(Long charactersId, Long lastId);
    public List<Diary> getAllDiary(Long lastId);
    public List<Diary> getDiaryByUserCharacter(Long userCharacterId);
    public CreateDiaryResponse createDiary(CreateDiaryRequest request);
    public void deleteDiary(Long id);
    public String getName(String userId);
}
