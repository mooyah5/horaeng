package com.dool.userservice.api.controller;

import com.dool.userservice.api.request.BuyBackgroundRequest;
import com.dool.userservice.api.response.UserBackgroundResponse;
import com.dool.userservice.api.service.UserBackgroundService;
import com.dool.userservice.db.domain.UserBackground;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user-service/user-background")
public class UserBackgroundController {
    UserBackgroundService userBackgroundService;

    @Autowired
    public UserBackgroundController(UserBackgroundService userBackgroundService) {
        this.userBackgroundService = userBackgroundService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<UserBackgroundResponse>> getUsersBackgrounds(@PathVariable("userId") String userId){
        Iterable<UserBackground> list = userBackgroundService.getUsersBackground(userId);

        List<UserBackgroundResponse> result = new ArrayList<>();
        list.forEach(v ->{
            result.add(UserBackgroundResponse.of(v));
        });

        if(result.size() == 0){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping
    public ResponseEntity buyBackground(@RequestBody BuyBackgroundRequest request){
        userBackgroundService.buyBackground(request);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
