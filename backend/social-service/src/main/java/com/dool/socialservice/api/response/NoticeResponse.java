package com.dool.socialservice.api.response;

import com.dool.socialservice.db.domain.Notice;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@Builder
public class NoticeResponse {
    private Long id;
    private String userId;
    private String title;
    private String content;
    private LocalDateTime createAt;

    public static NoticeResponse of(Notice notice){
        NoticeResponse response = NoticeResponse.builder()
                .id(notice.getId())
                .userId(notice.getUserId())
                .title(notice.getTitle())
                .content(notice.getContent())
                .createAt(notice.getCreateAt())
                .build();
        return response;
    }
}
