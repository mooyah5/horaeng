package com.dool.authservice.controller;

import com.dool.authservice.common.BaseResponse;
import com.dool.authservice.request.LoginRequest;
import com.dool.authservice.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth-service/auth")
@CrossOrigin("*")
public class AuthController {

    AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<BaseResponse> login(@RequestBody LoginRequest request, HttpServletResponse httpServletResponse){
        authService.userLogin(request, httpServletResponse);
        return ResponseEntity.status(HttpStatus.OK).body(BaseResponse.of(HttpStatus.OK, "로그인 성공"));
    }


    @PostMapping("/token")
    public ResponseEntity<?> reIssueToken(@CookieValue("refresh-token")Cookie cookie, HttpServletResponse httpServletResponse){
        if(authService.reIssueToken(cookie.getValue(), httpServletResponse)){
            return ResponseEntity.status(HttpStatus.OK).body(BaseResponse.of(HttpStatus.OK, "재발급 성공"));
        };
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(BaseResponse.of(HttpStatus.UNAUTHORIZED, "리프레쉬 토큰도 만료"));
    }

}
