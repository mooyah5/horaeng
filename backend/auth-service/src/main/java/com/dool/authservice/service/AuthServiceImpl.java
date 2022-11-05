package com.dool.authservice.service;

import com.dool.authservice.client.UserServiceClient;
import com.dool.authservice.domain.RoleType;
import com.dool.authservice.domain.User;
import com.dool.authservice.request.CreateUserRequest;
import com.dool.authservice.request.LoginRequest;
import com.dool.authservice.request.TokenRequest;
import com.dool.authservice.response.ValidResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    final UserServiceClient userServiceClient;
    final JwtTokenProvider jwtTokenProvider;

    @Override
    public void userLogin(LoginRequest request, HttpServletResponse httpServletResponse){


        String accessToken = jwtTokenProvider.createAccessToken("id",request.getId());
        String refreshToken = jwtTokenProvider.createRefreshToken("id",request.getId());

        // 관리자 로그인
        if(request.getRole().equals(RoleType.Admin)){
            ValidResponse res = userServiceClient.isUser(request);
            if(res.isUser()){
                // refresh token db 저장
                TokenRequest tokenRequest = new TokenRequest();
                tokenRequest.setId(request.getId());
                tokenRequest.setToken(refreshToken);
                userServiceClient.inputToken(tokenRequest);

                // header와 cookie에 각각 저장
                jwtTokenProvider.setHeaderAccessToken(httpServletResponse, accessToken);
                jwtTokenProvider.setCookieRefreshToken(httpServletResponse, refreshToken);
            }
        }

        // 카카오 로그인
        if(request.getRole().equals(RoleType.User)){
            ValidResponse res = userServiceClient.isUser(request);
            if(!res.isUser()){
                CreateUserRequest createUserRequest = new CreateUserRequest();
                createUserRequest.setId(request.getId());
                User user = userServiceClient.createUser(createUserRequest);
            }

            // refresh token db 저장
            TokenRequest tokenRequest = new TokenRequest();
            tokenRequest.setId(request.getId());
            tokenRequest.setToken(refreshToken);
            userServiceClient.inputToken(tokenRequest);

            // header와 cookie에 각각 저장
            jwtTokenProvider.setHeaderAccessToken(httpServletResponse, accessToken);
            jwtTokenProvider.setCookieRefreshToken(httpServletResponse, refreshToken);
        }
    }


}
