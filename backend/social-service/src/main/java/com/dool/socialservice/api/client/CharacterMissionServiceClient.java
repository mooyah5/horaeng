package com.dool.socialservice.api.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="user-service")
public interface CharacterMissionServiceClient {
    @PatchMapping("/character-serice/character-mission/{CMId}")
    void completeMission(@PathVariable("CMId") Long CMId);

}
