package com.dool.userservice.api.controller;

import com.dool.userservice.api.common.BaseResponse;
import com.dool.userservice.api.request.*;
import com.dool.userservice.api.response.UserResponse;
import com.dool.userservice.api.response.ValidResponse;
import com.dool.userservice.api.service.UserService;
import com.dool.userservice.db.domain.User;
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
@RequestMapping("/user-service/user")
@CrossOrigin("*")
public class UserController {

    UserService userService;
    UserBackgroundService userBackgroundService;

    @Autowired
    public UserController(UserService userService, UserBackgroundService userBackgroundService) {
        this.userService = userService;
        this.userBackgroundService = userBackgroundService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUser(@PathVariable("id") String id){
        User user = userService.getUser(id);

        if(user == null){
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(UserResponse.of(user));
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody CreateUserRequest request){
        User user = userService.createUser(request);

        if(user == null){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @PostMapping("/logout/{id}")
    public ResponseEntity logoutUser(@PathVariable("id") String id){
        userService.logoutUser(id);

        return ResponseEntity.status(HttpStatus.OK).body(null);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable("id") String id){
        userService.deleteUser(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    @PostMapping("/background")
    public ResponseEntity<BaseResponse> buyBackground(@RequestBody BackgroundRequest request){
        if(userService.buyBackground(request)){
            return ResponseEntity.status(HttpStatus.OK).body(BaseResponse.of(HttpStatus.OK, "구매되었습니다."));
        };

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(BaseResponse.of(HttpStatus.INTERNAL_SERVER_ERROR,"구매 중 오류가 발생했습니다."));
    }

    @PostMapping("/background/{userId}/{backgroundId}")
    public ResponseEntity inputUserBackground(@PathVariable("userId") String userId, @PathVariable("backgroundId")Long backgroundId){
        BackgroundRequest request = new BackgroundRequest();
        request.setUserId(userId);
        request.setBackgroundId(backgroundId);
        userService.inputBackground(request);

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @PostMapping("/isUser")
    ResponseEntity<ValidResponse> isUser(@RequestBody LoginRequest request){
        ValidResponse result = new ValidResponse();
        if(userService.getUser(request.getId()) == null){
            result.setUser(false);
        }else{
            result.setUser(true);
        }

        return ResponseEntity.status(200).body(result);
    }

    @PostMapping("/token")
    ResponseEntity inputToken(@RequestBody TokenRequest request){
        userService.inputToken(request);

        return ResponseEntity.status(200).body(null);
    }


    @GetMapping("/background/{id}")
    public ResponseEntity<List<UserBackgroundResponse>> getUsersBackgrounds(@PathVariable("id") String userId){
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

    @PutMapping("/report/{userId}")
    public ResponseEntity<Long> addReportCnt(@PathVariable("userId") String userId){

        return ResponseEntity.status(HttpStatus.OK).body(userService.addReportCnt(userId));
    }

    @PutMapping("/point")
    public ResponseEntity<?> addPoint(@RequestBody AddPointRequest request){
        userService.addPoint(request);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }
}
