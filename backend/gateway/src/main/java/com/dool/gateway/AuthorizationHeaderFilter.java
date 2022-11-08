package com.dool.gateway;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;

import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.io.UnsupportedEncodingException;



@Component
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config> {

    private static final String SALT = "doolSecret";
    public AuthorizationHeaderFilter() {
        super(Config.class);
    }

    public static class Config {
        // application.yml 파일에서 지정한 filer의 Argument값을 받는 부분
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (((exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();

            if(!request.getHeaders().containsKey("token")){
                return onError(exchange, "No authorization header", HttpStatus.BAD_GATEWAY);
            }
            String authorizationHeader = request.getHeaders().get("token").get(0);
            String jwt = authorizationHeader.replace("Bearer", "");

            if(!isJwtValid(jwt)){
                return onError(exchange, "JWT token is not valid", HttpStatus.UNAUTHORIZED);
            }
            System.out.println("통과!!");
            return chain.filter(exchange);
        }));
    }

    private boolean isJwtValid(String jwt){
        boolean returnValue = true;

        try{
            Jws<Claims> claims = Jwts.parser().setSigningKey(this.generateKey())
                    .parseClaimsJws(jwt);
        }catch(Exception e) {
            e.printStackTrace();
            returnValue = false;
        }
        System.out.println(returnValue);
        return returnValue;
    }

    private byte[] generateKey() {
        byte[] key = null;
        try {
            //byte 코드로 인코딩 해주기
            //캐릭터셋 인자로 안주면 사용자 플랫폼의 기본 인코딩 설정대로 인코딩
            key = SALT.getBytes("UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        return key;
    }

    private Mono<Void> onError(ServerWebExchange exchange, String err, HttpStatus httpStatus){
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(httpStatus);

        return response.setComplete();
    }

}