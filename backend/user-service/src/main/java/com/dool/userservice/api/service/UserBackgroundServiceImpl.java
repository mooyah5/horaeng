package com.dool.userservice.api.service;

import com.dool.userservice.api.request.BuyBackgroundRequest;
import com.dool.userservice.db.domain.Background;
import com.dool.userservice.db.domain.User;
import com.dool.userservice.db.domain.UserBackground;
import com.dool.userservice.db.repository.BackgroundRepository;
import com.dool.userservice.db.repository.UserBackgroundRepository;
import com.dool.userservice.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserBackgroundServiceImpl implements UserBackgroundService {

    private final UserBackgroundRepository userBackgroundRepository;
    private final BackgroundRepository backgroundRepository;
    private final UserRepository userRepository;
    @Override
    public Iterable<UserBackground> getUsersBackground(String userId) {
        return userBackgroundRepository.getUsersBackground(userId);
    }

    @Override
    public void buyBackground(BuyBackgroundRequest request) {
        UserBackground userBackground = new UserBackground();
        Background background = backgroundRepository.get(request.getBackgroundId());
        User user = userRepository.get(request.getUserId());

        if(user.getPoint() >= background.getPrice()){
            // 유저 포인트 깎는 api 필요
            userBackground.setUser(user);
            userBackground.setBackground(background);

            userBackgroundRepository.add(userBackground);
        }
    }
}
