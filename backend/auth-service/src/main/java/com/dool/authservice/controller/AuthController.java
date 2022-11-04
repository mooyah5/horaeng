package com.dool.authservice.controller;

import com.dool.authservice.request.LoginRequest;
import com.dool.authservice.response.TokenResponse;
import com.dool.authservice.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.net.http.HttpResponse;

@RestController
@RequestMapping("/auth-service/auth")
public class AuthController {

    AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequest request, HttpServletResponse httpServletResponse){
        authService.userLogin(request, httpServletResponse);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


    @PostMapping("/token")
    public ResponseEntity refresh(){
        return null;
    }

}
