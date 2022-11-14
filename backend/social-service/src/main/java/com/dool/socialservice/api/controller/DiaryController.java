package com.dool.socialservice.api.controller;

import com.dool.socialservice.api.request.CreateDiaryRequest;
import com.dool.socialservice.api.response.CreateDiaryResponse;
import com.dool.socialservice.api.response.DiaryResponse;
import com.dool.socialservice.api.service.DiaryService;
import com.dool.socialservice.db.domain.Diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/social-service/diary")
@CrossOrigin("*")
public class DiaryController {
    final DiaryService diaryService;

    @Autowired
    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @GetMapping("/item/{id}")
    public ResponseEntity<DiaryResponse> getDiary(@PathVariable("id") Long id){
        Diary diary = diaryService.getDiary(id);

        if(diary == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(DiaryResponse.of(diary));
    }

    @GetMapping("/characters/{characters_id}")
    public ResponseEntity<List<DiaryResponse>> getDiaryByCharacters(@PathVariable("characters_id") Long charactersId){
        List<Diary> list = diaryService.getDiaryByCharacters(charactersId);

        List<DiaryResponse> result = new ArrayList<>();

        list.forEach(v->{
            result.add(DiaryResponse.of(v));
        });

        if(list.size() == 0){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/user/{userCharacterId}")
    public ResponseEntity<List<DiaryResponse>> getDiaryByUserCharacter(@PathVariable("userCharacterId") Long userCharacterId){
        List<Diary> list = diaryService.getDiaryByUserCharacter(userCharacterId);

        List<DiaryResponse> result = new ArrayList<>();

        list.forEach(v->{
            result.add(DiaryResponse.of(v));
        });

        if(list.size() == 0){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping
    public ResponseEntity<List<DiaryResponse>> getAllDiary(){
        Iterable<Diary> list = diaryService.getAllDiary();

        if(list== null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        List<DiaryResponse> result = new ArrayList<>();

        list.forEach(v->{
            result.add(DiaryResponse.of(v));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping
    public ResponseEntity<CreateDiaryResponse> createDiary(@RequestBody CreateDiaryRequest request){
        CreateDiaryResponse response = diaryService.createDiary(request);

        if(response == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteDiary(@PathVariable("id") Long id){
        diaryService.deleteDiary(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
