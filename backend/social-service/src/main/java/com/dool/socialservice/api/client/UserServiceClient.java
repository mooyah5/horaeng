package com.dool.socialservice.api.client;

import com.dool.socialservice.api.request.AddPointRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="user-service")
public interface UserServiceClient {
    @PutMapping("/user-service/user/report/{userId}")
    Long addReportCnt(@PathVariable("userId") String userId);

    @PutMapping("/user-service/user/point")
    void addPoint(@RequestBody AddPointRequest request);
}
