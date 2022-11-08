package com.dool.socialservice.api.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@FeignClient(name="character-service")
public interface CharacterMissionServiceClient {
    @PutMapping("/character-service/character-mission/{CMId}")
    void completeMission(@PathVariable("CMId") Long CMId);

}
