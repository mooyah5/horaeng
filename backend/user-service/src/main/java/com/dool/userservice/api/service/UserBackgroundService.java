package com.dool.userservice.api.service;

import com.dool.userservice.api.request.BuyBackgroundRequest;
import com.dool.userservice.db.domain.UserBackground;

public interface UserBackgroundService {
    Iterable<UserBackground> getUsersBackground(String userId);
    void buyBackground(BuyBackgroundRequest request);
}
