package com.dool.userservice.api.response;

import com.dool.userservice.db.domain.UserBackground;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserBackgroundResponse {
    private Long id;
    private Long backgroundId;
    private String userId;
    private String imgUrl;
    private Long price;

    public static UserBackgroundResponse of(UserBackground model){
        UserBackgroundResponse response = new UserBackgroundResponse();
        response.setId(model.getId());
        response.setBackgroundId(model.getBackground().getId());
        response.setUserId(model.getUser().getId());
        response.setImgUrl(model.getBackground().getImgUrl());
        response.setPrice(model.getBackground().getPrice());
        return response;
    }

}
