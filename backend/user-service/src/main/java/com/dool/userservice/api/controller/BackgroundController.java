package com.dool.userservice.api.controller;

import com.dool.userservice.api.response.BackgroundResponse;
import com.dool.userservice.api.service.BackgroundService;
import com.dool.userservice.db.domain.Background;
import com.netflix.discovery.converters.Auto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user-service/background")
public class BackgroundController {
    BackgroundService backgroundService;

    @Autowired
    public BackgroundController(BackgroundService backgroundService) {
        this.backgroundService = backgroundService;
    }

    @GetMapping("/background")
    public ResponseEntity<List<BackgroundResponse>> getAll(){
        Iterable<Background> list = backgroundService.getAll();
        List<BackgroundResponse> result = new ArrayList<>();
        list.forEach(v -> {
            result.add(BackgroundResponse.of(v.getId(), v.getImgUrl(), v.getPrice()));
        });

        return ResponseEntity.status(200).body(result);
    }

    @GetMapping("/background/{id}")
    public ResponseEntity<BackgroundResponse> get(@PathVariable("id") Long id){
        Background background = backgroundService.get(id);

        return ResponseEntity.status(200).body(BackgroundResponse.of(background.getId(), background.getImgUrl(), background.getPrice()));

    }
}
