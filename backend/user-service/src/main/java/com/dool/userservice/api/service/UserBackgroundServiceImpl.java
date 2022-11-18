package com.dool.userservice.api.service;

import com.dool.userservice.api.request.BackgroundRequest;
import com.dool.userservice.db.domain.UserBackground;
import com.dool.userservice.db.repository.BackgroundRepository;
import com.dool.userservice.db.repository.UserBackgroundRepository;
import com.dool.userservice.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserBackgroundServiceImpl implements UserBackgroundService {

    private final UserBackgroundRepository userBackgroundRepository;
    private final BackgroundRepository backgroundRepository;
    private final UserRepository userRepository;
    @Override
    public Iterable<UserBackground> getUsersBackground(String userId) {
        return userBackgroundRepository.getUsersBackgroundByUserId(userId);
    }

    @Override
    public void createUserBackground(BackgroundRequest request) {

        List<UserBackground> temp = userBackgroundRepository.getUsersBackgroundByUserIdAndBackgroundId(request.getUserId(), request.getBackgroundId());
        if(temp.size() == 0){
            UserBackground userBackground = new UserBackground();
            userBackground.setUser(userRepository.get(request.getUserId()));
            userBackground.setBackground(backgroundRepository.get(request.getBackgroundId()));

            userBackgroundRepository.add(userBackground);
        }
    }
}
