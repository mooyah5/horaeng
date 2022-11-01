package com.dool.userservice.api.controller;

import com.dool.userservice.api.request.CreateUserDto;
import com.dool.userservice.api.service.UserService;
import com.dool.userservice.db.domain.User;
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

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") String id){
        User user = userService.getUser(id);

        return ResponseEntity.status(200).body(user);
    }

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody CreateUserDto request){
        User inputUser = new User(request.getEmail(), request.getPassword());
        User user = userService.createUser(inputUser);

        return ResponseEntity.status(200).body(user);
    }

    @PostMapping("/logout")
    public ResponseEntity logoutUser(){
        return null;
    }

    @DeleteMapping("/delete")
    public ResponseEntity deleteUser(){
        return null;
    }
}
