package com.dool.authservice.client;

import com.dool.authservice.request.LoginRequest;
import com.dool.authservice.request.TokenRequest;
import com.dool.authservice.response.ValidResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="user-service")
public interface UserServiceClient {
    @PostMapping("/user-service/user/isUser")
    ValidResponse isUser(@RequestBody LoginRequest request);

    @PostMapping("/user-service/user/token")
    void inputToken(@RequestBody TokenRequest request);

}
