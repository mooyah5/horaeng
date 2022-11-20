package com.dool.userservice.api.service;

import com.dool.userservice.api.request.*;
import com.dool.userservice.db.domain.Background;
import com.dool.userservice.db.domain.RoleType;
import com.dool.userservice.db.domain.User;
import com.dool.userservice.db.domain.UserBackground;
import com.dool.userservice.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService{


    private final UserRepository userRepository;
    private final UserBackgroundService userBackgroundService;
    private final BackgroundService backgroundService;

    @Override
    public User getUser(String id) {
        return userRepository.get(id);
    }

    @Override
    public User createUser(CreateUserRequest request) {
        User user = new User(request.getId());
        userRepository.create(user);

        return userRepository.get(user.getId());
    }

    @Override
    public void deleteUser(String id) {

        userRepository.delete(id);
    }

    @Override
    public boolean buyBackground(BackgroundRequest request){
        try {
            User user = userRepository.get(request.getUserId());

            Background background = backgroundService.get(request.getBackgroundId());
            if (user.getPoint() >= background.getPrice()) {
                userBackgroundService.createUserBackground(request);
                user.setPoint(user.getPoint() - background.getPrice());
                return true;
            }
        }
        catch(Exception e){
            return false;
        }
        return false;
    }

    @Override
    public void inputToken(TokenRequest request){
        User user = userRepository.get(request.getId());
        user.setRefreshToken(request.getToken());
    }

    @Override
    public void logoutUser(String id) {
        User user = userRepository.get(id);

        user.setRefreshToken("");
    }

    @Override
    public void inputBackground(BackgroundRequest request) {
        userBackgroundService.createUserBackground(request);
    }

    @Override
    public Long addReportCnt(String id){
        User user = userRepository.get(id);
        user.setReportCnt(user.getReportCnt()+1);
        return user.getReportCnt();
    }

    @Override
    public void addPoint(AddPointRequest request) {
        User user = userRepository.get(request.getUserId());
        user.setPoint(user.getPoint()+request.getPoint());
    }

    @Override
    public String getUserName(String userId) {
        return userRepository.get(userId).getName();
    }
}
