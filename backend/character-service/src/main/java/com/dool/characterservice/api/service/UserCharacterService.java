package com.dool.characterservice.api.service;

public interface UserCharacterService {
    Long creatUserCharacter(Long user_id, Long character_id);
    Long getUserCharacter(Long id);
    Long setBackground(Long id, String background);
}
