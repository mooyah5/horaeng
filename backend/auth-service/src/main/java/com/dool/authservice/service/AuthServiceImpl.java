package com.dool.authservice.service;

import com.dool.authservice.client.UserServiceClient;
import com.dool.authservice.domain.RoleType;
import com.dool.authservice.request.LoginRequest;
import com.dool.authservice.request.TokenRequest;
import com.dool.authservice.response.TokenResponse;
import com.dool.authservice.response.UserResponse;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.net.http.HttpResponse;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    final UserServiceClient userServiceClient;
    final JwtTokenProvider jwtTokenProvider;

    @Override
    public TokenResponse userLogin(LoginRequest request, HttpServletResponse httpServletResponse){

        // 관리자 로그인
        if(request.getRole() == RoleType.Admin){
            if(userServiceClient.isUser(request)){
                TokenResponse tokenResponse = getToken(request.getId());
                jwtTokenProvider.setHeaderAccessToken(httpServletResponse, tokenResponse.getAccessToken());
                return tokenResponse;
            }else{
                return null;
            }
        }

        // 카카오 로그인
        if(request.getRole() == RoleType.User){
            if(!userServiceClient.isUser(request)){
                // 회원가입 필요

            }

            TokenResponse response = getToken(request.getId());
            jwtTokenProvider.setHeaderAccessToken(httpServletResponse, response.getAccessToken());
            return response;
        }
        return null;
    }

    public TokenResponse getToken(String id ){
        String accessToken = jwtTokenProvider.createAccessToken(id);
        String refreshToken = jwtTokenProvider.createRefreshToken(id);

        TokenRequest request = new TokenRequest();
        request.setId(id);
        request.setToken(refreshToken);
        userServiceClient.inputToken(request);

        TokenResponse response = new TokenResponse();
        response.setAccessToken(accessToken);
        response.setRefreshToken(refreshToken);

        return response;
    }

}
