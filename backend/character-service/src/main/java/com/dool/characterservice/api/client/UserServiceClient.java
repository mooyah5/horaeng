package com.dool.characterservice.api.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name="user-service")
public interface UserServiceClient {
    @PostMapping("/user-service/user/background/{userId}/{backgroundId}")
    void inputUserBackground(@PathVariable("userId") String userId, @PathVariable("backgroundId")Long backgroundId);
}
