package com.dool.socialservice.api.controller;

import com.dool.socialservice.api.request.CreateDiaryRequest;
import com.dool.socialservice.api.request.UpdateDiaryRequest;
import com.dool.socialservice.api.response.DiaryResponse;
import com.dool.socialservice.api.service.DiaryService;
import com.dool.socialservice.db.domain.Diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Path;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/social-service/diary")
public class DiaryController {
    final DiaryService diaryService;

    @Autowired
    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<DiaryResponse> getDiary(@PathVariable("id") Long id){
        Diary diary = diaryService.getDiary(id);

        if(diary == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(DiaryResponse.of(diary));
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
    public ResponseEntity<DiaryResponse> createDiary(@RequestBody CreateDiaryRequest request){
        Diary diary = diaryService.createDiary(request);

        if(diary == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(DiaryResponse.of(diary));
    }

    @PutMapping
    public ResponseEntity<DiaryResponse> updateDiary(@RequestBody UpdateDiaryRequest request){
        Diary diary = diaryService.updateDiary(request);

        if(diary == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(DiaryResponse.of(diary));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteDiary(@PathVariable("id") Long id){
        diaryService.deleteDiary(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
