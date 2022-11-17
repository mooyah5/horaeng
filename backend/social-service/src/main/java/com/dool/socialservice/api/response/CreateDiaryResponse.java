package com.dool.socialservice.api.response;

import com.dool.socialservice.db.domain.Diary;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter @Getter
@Builder
public class CreateDiaryResponse {
    private Long id;
    private Long charactersId;
    private String userId;
    private Long userCharacterId;
    private String content;
    private String imgUrl;
    private LocalDateTime createDate;
    private boolean isMain;
    private boolean isCharacterMax;

    static public CreateDiaryResponse of(Diary diary, boolean isCharacterMax){
        CreateDiaryResponse response = CreateDiaryResponse.builder()
                .id(diary.getId())
                .charactersId(diary.getCharactersId())
                .userId(diary.getUserId())
                .userCharacterId(diary.getUserCharacterId())
                .content(diary.getContent())
                .imgUrl(diary.getImgUrl())
                .createDate(diary.getCreateDate())
                .isCharacterMax(isCharacterMax)
                .isMain(diary.isMain())
                .build();
        return response;
    }
}
