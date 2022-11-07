package com.dool.socialservice.api.request;

import com.dool.socialservice.db.domain.ReportType;
import com.sun.istack.NotNull;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Data
public class CreateReportRequest {
    @NotNull
    private String userId;
    @NotNull
    private Long diaryId;
    @NotNull
    private ReportType reportType;
}
