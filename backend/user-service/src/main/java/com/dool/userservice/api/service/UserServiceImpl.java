package com.dool.userservice.api.service;

import com.dool.userservice.api.request.CreateUserRequest;
import com.dool.userservice.db.domain.User;
import com.dool.userservice.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService{


    private final UserRepository userRepository;

    @Override
    public User getUser(String id) {
        return userRepository.get(id);
    }

    @Override
    public User createUser(CreateUserRequest request) {
        User user = new User(request.getId(), request.getPassword());
        userRepository.create(user);

        return userRepository.get(user.getId());
    }

    @Override
    public void deleteUser(String id) {

        userRepository.delete(id);
    }

    @Override
    public void logoutUser() {

    }
}
