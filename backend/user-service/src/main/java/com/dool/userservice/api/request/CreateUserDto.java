package com.dool.userservice.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateUserDto {
    String email;
    String password;
}
