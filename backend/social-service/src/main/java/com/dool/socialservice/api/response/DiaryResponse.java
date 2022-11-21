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
    private Long isMain;
    private String name;

    static public DiaryResponse of(Diary diary){
        DiaryResponse response = DiaryResponse.builder()
                .id(diary.getId())
                .charactersId(diary.getCharactersId())
                .userId(diary.getUserId())
                .userCharacterId(diary.getUserCharacterId())
                .content(diary.getContent())
                .imgUrl(diary.getImgUrl())
                .createDate(diary.getCreateDate())
                .isMain(diary.getIsMain())
                .build();
        return response;
    }

    static public DiaryResponse with(Diary diary, String name){
        DiaryResponse response = DiaryResponse.builder()
                .id(diary.getId())
                .charactersId(diary.getCharactersId())
                .userId(diary.getUserId())
                .userCharacterId(diary.getUserCharacterId())
                .content(diary.getContent())
                .imgUrl(diary.getImgUrl())
                .createDate(diary.getCreateDate())
                .isMain(diary.getIsMain())
                .name(name)
                .build();
        return response;
    }
}
