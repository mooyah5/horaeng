package com.dool.gateway;

import lombok.Data;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import reactor.core.publisher.Mono;

public class GlobalFilter extends AbstractGatewayFilterFactory<GlobalFilter> {
    public GlobalFilter(){
        super(GlobalFilter.class);
    }

    @Override
    public GatewayFilter apply(GlobalFilter config) {
        return (exchange, chain) -> {
            ServerHttpResponse response = exchange.getResponse();

            response.getHeaders().set("Access-Control-Allow-Origin","*");

            return chain.filter(exchange);
        };
    }

    @Data
    public static class Config {
        private String baseMessage;
        private boolean preLogger;
        private boolean postLogger;
    }



}
