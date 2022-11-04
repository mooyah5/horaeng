package com.dool.userservice.api.response;

import com.dool.userservice.db.domain.RoleType;
import com.dool.userservice.db.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserResponse {
    private String id;
    private String name;
    private Long reportCnt;
    private Long point;
    private RoleType role;

    public static UserResponse of(User user){
        UserResponse response = UserResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .reportCnt(user.getReportCnt())
                .point(user.getPoint())
                .role(user.getRole())
                .build();
        return response;
    }
}
