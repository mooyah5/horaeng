package com.dool.userservice.api.service;

import com.dool.userservice.api.request.BuyBackgroundRequest;
import com.dool.userservice.api.request.CreateUserRequest;
import com.dool.userservice.api.request.LoginRequest;
import com.dool.userservice.api.request.TokenRequest;
import com.dool.userservice.db.domain.User;

public interface UserService {
    public User getUser(String id);
    public User createUser(CreateUserRequest request);
    public void deleteUser(String id);
    public void buyBackground(BuyBackgroundRequest request);
    void inputToken(TokenRequest request);
    public void logoutUser(String id);
    public void inputToken(TokenRequest request);
    public boolean isUser(LoginRequest request);


}
