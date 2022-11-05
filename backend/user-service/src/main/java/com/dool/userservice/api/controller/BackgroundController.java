package com.dool.userservice.api.controller;

import com.dool.userservice.api.response.BackgroundResponse;
import com.dool.userservice.api.service.BackgroundService;
import com.dool.userservice.db.domain.Background;
import com.netflix.discovery.converters.Auto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user-service/background")
@CrossOrigin("*")
public class BackgroundController {
    BackgroundService backgroundService;

    @Autowired
    public BackgroundController(BackgroundService backgroundService) {
        this.backgroundService = backgroundService;
    }

    @GetMapping
    public ResponseEntity<List<BackgroundResponse>> getAll(){
        Iterable<Background> list = backgroundService.getAll();
        List<BackgroundResponse> result = new ArrayList<>();

        list.forEach(v -> {
            result.add(BackgroundResponse.of(v));
        });

        if(result.size() == 0){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BackgroundResponse> get(@PathVariable("id") Long id){
        Background background = backgroundService.get(id);

        if(background == null){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(BackgroundResponse.of(background));

    }
}
