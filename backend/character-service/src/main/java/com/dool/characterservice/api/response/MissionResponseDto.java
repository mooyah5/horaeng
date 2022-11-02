package com.dool.characterservice.api.response;

import com.dool.characterservice.db.domain.MissionType;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MissionResponseDto {
    private final Long id;
    private final String title;
    private final String content;
    private final MissionType type;
    private final String img;
}
