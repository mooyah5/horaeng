package com.dool.userservice.api.service;

import com.dool.userservice.api.request.BackgroundRequest;
import com.dool.userservice.db.domain.UserBackground;

public interface UserBackgroundService {
    Iterable<UserBackground> getUsersBackground(String userId);
    void createUserBackground(BackgroundRequest request);
}
