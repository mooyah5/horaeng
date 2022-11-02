package com.dool.socialservice.api.service;

import com.dool.socialservice.api.request.CreateDiaryRequest;
import com.dool.socialservice.api.request.UpdateDiaryRequest;
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

    @Override
    public Diary getDiary(Long id) {
        return diaryRepository.get(id);
    }

    @Override
    public List<Diary> getAllDiary() {
        return diaryRepository.getAll();
    }

    @Override
    public Diary updateDiary(UpdateDiaryRequest request) {
        Diary diary = diaryRepository.get(request.getId());

        if(diary != null){
            diary.setContent(request.getContent());
            diary.setImgUrl(request.getImgUrl());
            diary.setTitle(request.getTitle());
        }

        return diary;

    }

    @Override
    public Diary createDiary(CreateDiaryRequest request) {
        Diary diary = new Diary();
        diary.setTitle(request.getTitle());
        diary.setUserId(request.getUserId());
        diary.setImgUrl(request.getImgUrl());
        diary.setContent(request.getContent());
        diary.setCharactersId(request.getCharactersId());
        diary.setUserCharacterId(request.getUserCharacterId());

        diaryRepository.create(diary);

        return diary;
    }

    @Override
    public void deleteDiary(Long id) {
        Diary diary = diaryRepository.get(id);
        diaryRepository.delete(diary);
    }
}
