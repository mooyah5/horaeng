package com.dool.gateway;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
@Slf4j
public class GlobalFilter extends AbstractGatewayFilterFactory<GlobalFilter> {
    public GlobalFilter(){
        super(GlobalFilter.class);
    }

    @Override
    public GatewayFilter apply(GlobalFilter config) {
        return (exchange, chain) -> {
            ServerHttpResponse response = exchange.getResponse();
            String httpMethod = exchange.getRequest().getMethodValue();
            String url = exchange.getRequest().getURI().toString();
            log.info("method : " + httpMethod + " url : " + url);
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
