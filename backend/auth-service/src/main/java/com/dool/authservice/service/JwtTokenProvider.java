package com.dool.authservice.service;

import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import java.util.Base64;
import java.util.Date;

@RequiredArgsConstructor
//@Transactional(readOnly = true)  // 기본적으로 트랜잭션 안에서만 데이터 변경하게 설정(그만큼 최적화 되어 읽는게 빨라짐)
@Service
public class JwtTokenProvider {

    private String secretKey = "secret";

    // 토큰 유효시간 하루
    private long tokenValidTime = 24 * 60 * 60 * 1000L;

    // 객체 초기화, secretKey를 Base64로 인코딩한다.
    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createAccessToken(String id) {
        Claims claims = Jwts.claims().setSubject(id+"access"); // JWT payload 에 저장되는 정보단위 (sub)
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims) // 정보 저장
                .setIssuedAt(now) // 토큰 발행 시간 정보
                .setExpiration(new Date(now.getTime() + tokenValidTime)) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, secretKey)  // 사용할 암호화 알고리즘과 signature 에 들어갈 secret값 세팅
                .compact();
    }

    public String createRefreshToken(String id) {
        Claims claims = Jwts.claims().setSubject(id+"refresh"); // JWT payload 에 저장되는 정보단위 (sub)
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims) // 정보 저장
                .setIssuedAt(now) // 토큰 발행 시간 정보
                .setExpiration(new Date(now.getTime() + tokenValidTime*7)) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, secretKey)  // 사용할 암호화 알고리즘과 signature 에 들어갈 secret값 세팅
                .compact();
    }

    // JWT 복호화 해서 username 얻기
    public String getUsernameFromJwt(String jwt) {
        return getClaims(jwt).getBody().getId();
    }

    private Jws<Claims> getClaims(String jwt) {
        try {
            return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwt);
        } catch (SignatureException ex) {
            throw ex;
        } catch (MalformedJwtException ex) {
            throw ex;
        } catch (ExpiredJwtException ex) {
            throw ex;
        } catch (UnsupportedJwtException ex) {
            throw ex;
        } catch (IllegalArgumentException ex) {
            throw ex;
        }
    }

    // JWT 복호화 해서 id 얻기
    public Long getUserIdFromJwt(String token) {
        Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
        return Long.parseLong(String.valueOf(claims.getBody().get("user_id")));
    }

    public void setHeaderAccessToken(HttpServletResponse response, String accessToken) {
        response.setHeader("token", accessToken);
    }
}

