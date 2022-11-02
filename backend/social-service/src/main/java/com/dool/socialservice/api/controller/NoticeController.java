package com.dool.socialservice.api.controller;

import com.dool.socialservice.api.request.CreateNoticeRequest;
import com.dool.socialservice.api.request.UpdateNoticeRequest;
import com.dool.socialservice.api.response.NoticeResponse;
import com.dool.socialservice.api.service.NoticeService;
import com.dool.socialservice.db.domain.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/social-service/notice")
public class NoticeController {

    private final NoticeService noticeService;

    @Autowired
    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<NoticeResponse> getNotice(@PathVariable("id") Long id){
        Notice notice = noticeService.getNotice(id);

        if(notice == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(NoticeResponse.of(notice));
    }

    @GetMapping
    public ResponseEntity<List<NoticeResponse>> getAllNotices(){
        Iterable<Notice> list = noticeService.getAllNotices();

        if(list == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        List<NoticeResponse> result = new ArrayList<>();
        list.forEach(v ->{
            result.add(NoticeResponse.of(v));
        });


        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping
    public ResponseEntity<NoticeResponse> createNotice(@RequestBody CreateNoticeRequest request){
        Notice notice = noticeService.createNotice(request);

        if(notice ==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(NoticeResponse.of(notice));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteNotice(@PathVariable("id") Long id){
        noticeService.deleteNotice(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    @PutMapping
    public ResponseEntity<NoticeResponse> updateNotice(@RequestBody UpdateNoticeRequest request){
        Notice notice = noticeService.updateNotice(request);

        if(notice == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(NoticeResponse.of(notice));
    }
}
