package com.dool.userservice.api.controller;

import com.dool.userservice.api.service.UserBackgroundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-service/user-background")
public class UserBackgroundController {
    UserBackgroundService userBackgroundService;

    @Autowired
    public UserBackgroundController(UserBackgroundService userBackgroundService) {
        this.userBackgroundService = userBackgroundService;
    }

    @GetMapping("/{id}")
    public ResponseEntity getUsersBackgrounds(){
        return null;
    }

    @PostMapping("/{id}")
    public ResponseEntity buyBackground(){
        return null;
    }
}
