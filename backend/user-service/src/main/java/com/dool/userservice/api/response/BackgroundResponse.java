package com.dool.userservice.api.response;

import com.dool.userservice.db.repository.BackgroundRepository;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BackgroundResponse {
    Long id;
    String imgUrl;
    Long price;

    public static BackgroundResponse of(Long id, String imgUrl, Long price){
        BackgroundResponse result = new BackgroundResponse();
        result.setId(id);
        result.setImgUrl(imgUrl);
        result.setPrice(price);
        return result;
    }
}
