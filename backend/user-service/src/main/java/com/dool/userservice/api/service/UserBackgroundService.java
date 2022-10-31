package com.dool.userservice.api.service;

import com.dool.userservice.db.domain.UserBackground;

public interface UserBackgroundService {
    Iterable<UserBackground> getUsersBackground();
    void buyBackground();
}
