package com.dool.authservice.client;

import com.dool.authservice.request.LoginRequest;
import com.dool.authservice.request.TokenRequest;
import com.dool.authservice.response.UserResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="user-service")
public interface UserServiceClient {
    @PostMapping("/user-service/user/isUser")
    boolean isUser(@RequestBody LoginRequest loginRequest);

    @PostMapping("/user-service/user/login")
    void inputToken(@RequestBody TokenRequest request);

}
