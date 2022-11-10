package com.dool.socialservice.api.common;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
public class BaseResponse {
    private HttpStatus statusCode;
    private String message;

    public static BaseResponse of(HttpStatus statusCode, String message){
        BaseResponse baseResponse = new BaseResponse();
        baseResponse.setStatusCode(statusCode);
        baseResponse.setMessage(message);
        return baseResponse;
    }
}