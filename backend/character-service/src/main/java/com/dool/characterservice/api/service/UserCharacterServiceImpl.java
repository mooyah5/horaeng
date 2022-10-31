package com.dool.characterservice.api.service;

import com.dool.characterservice.db.repository.UserCharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserCharacterServiceImpl implements UserCharacterService{

    private final UserCharacterRepository userCharacterRepository;
    @Override
    public Long creatUserCharacter(Long user_id, Long character_id) {
        return null;
    }

    @Override
    public Long getUserCharacter(Long id) {
        return null;
    }

    @Override
    public Long setBackground(Long id, String background) {
        return null;
    }
}
