package com.dool.userservice.api.controller;

import com.dool.userservice.api.request.BuyBackgroundRequest;
import com.dool.userservice.api.request.CreateUserRequest;
import com.dool.userservice.api.service.UserService;
import com.dool.userservice.db.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

        if(user == null){
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody CreateUserRequest request){
        User user = userService.createUser(request);

        if(user == null){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @PostMapping("/logout")
    public ResponseEntity logoutUser(){
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable("id") String id){
        userService.deleteUser(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    @PostMapping("/background")
    public ResponseEntity buyBackground(@RequestBody BuyBackgroundRequest request){
        userService.buyBackground(request);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
