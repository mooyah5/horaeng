package com.dool.userservice.api.service;

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
        return userRepository.findById(id);
    }

    @Override
    public User createUser(User user) {
        userRepository.add(user);

        return userRepository.findById(user.getId());
    }

    @Override
    public void deleteUser() {

    }

    @Override
    public void logoutUser() {

    }
}
