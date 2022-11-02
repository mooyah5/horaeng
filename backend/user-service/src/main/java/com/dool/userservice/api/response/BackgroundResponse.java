package com.dool.userservice.api.response;

import com.dool.userservice.db.domain.Background;
import com.dool.userservice.db.repository.BackgroundRepository;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BackgroundResponse {
    Long id;
    String imgUrl;
    Long price;

    public static BackgroundResponse of(Background background){
        BackgroundResponse response = BackgroundResponse.builder()
                        .id(background.getId())
                        .imgUrl(background.getImgUrl())
                        .price(background.getPrice())
                        .build();
        return response;
    }
}
