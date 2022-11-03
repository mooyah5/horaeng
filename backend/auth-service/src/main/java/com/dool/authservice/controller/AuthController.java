package com.dool.authservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth-service")
public class AuthController {

    @PostMapping("/auth/login")
    public ResponseEntity login(){
        return null;
    }

    @PostMapping("/auth/kakao")
    public ResponseEntity kakaoLogin(){
        return null;
    }

    @PostMapping("/auth/token")
    public ResponseEntity refresh(){
        return null;
    }
}
