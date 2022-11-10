package com.dool.socialservice.api.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.Map;

@FeignClient(name="character-service")
public interface CharacterMissionServiceClient {
    @PutMapping("/character-service/character-mission/{CMId}")
    void completeMission(@PathVariable("CMId") Long CMId);

    @GetMapping("/character-service/user-character/level/{UCId}")
    Map<String, Object> checkGrown(@PathVariable("UCId") Long UCId);

}
