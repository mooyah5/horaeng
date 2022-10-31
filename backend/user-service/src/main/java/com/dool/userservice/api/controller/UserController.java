package com.dool.userservice.api.controller;

import com.dool.userservice.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.core.Response;

@RestController
@RequestMapping("/user-service/user")
public class UserController {

    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity getUser(@RequestParam("userId") Long userId){
        return null;
    }

    @PostMapping("/")
    public ResponseEntity createUser(){
        return null;
    }

    @PostMapping("/logout")
    public ResponseEntity logoutUser(){
        return null;
    }

    @DeleteMapping("/")
    public ResponseEntity deleteUser(){
        return null;
    }
}
