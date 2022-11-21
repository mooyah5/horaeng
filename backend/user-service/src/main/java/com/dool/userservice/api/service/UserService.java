package com.dool.userservice.api.service;

import com.dool.userservice.api.request.*;
import com.dool.userservice.db.domain.Background;
import com.dool.userservice.db.domain.User;

public interface UserService {
    public User getUser(String id);
    public User createUser(CreateUserRequest request);
    public void deleteUser(String id);
    public boolean buyBackground(BackgroundRequest request);
    void inputToken(TokenRequest request);
    public void logoutUser(String id);
    void inputBackground(BackgroundRequest request);
    Long addReportCnt(String id);
    void addPoint(AddPointRequest request);
    public String getUserName(String userId);
}
