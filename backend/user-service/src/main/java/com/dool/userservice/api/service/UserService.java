package com.dool.userservice.api.service;

import com.dool.userservice.db.domain.User;
import org.springframework.stereotype.Service;

public interface UserService {
    public User getUser(String id);
    public User createUser(User user);
    public void deleteUser();
    public void logoutUser();
}
