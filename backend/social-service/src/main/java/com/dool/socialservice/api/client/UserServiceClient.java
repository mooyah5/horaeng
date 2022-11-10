package com.dool.socialservice.api.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@FeignClient(name="user-service")
public interface UserServiceClient {
    @PutMapping("/user-service/user/report/{userId}")
    Long addReportCnt(@PathVariable("userId") String userId);
}
