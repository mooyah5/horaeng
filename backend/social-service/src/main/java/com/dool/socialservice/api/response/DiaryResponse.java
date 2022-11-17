package com.dool.socialservice.api.response;

import com.dool.socialservice.db.domain.Diary;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
@Builder
public class DiaryResponse {
    private Long id;
    private Long charactersId;
    private String userId;
    private Long userCharacterId;
    private String content;
    private String imgUrl;
    private LocalDateTime createDate;
    private boolean isMain;

    static public DiaryResponse of(Diary diary){
        DiaryResponse response = DiaryResponse.builder()
                .id(diary.getId())
                .charactersId(diary.getCharactersId())
                .userId(diary.getUserId())
                .userCharacterId(diary.getUserCharacterId())
                .content(diary.getContent())
                .imgUrl(diary.getImgUrl())
                .createDate(diary.getCreateDate())
                .isMain(diary.isMain())
                .build();
        return response;
    }
}
