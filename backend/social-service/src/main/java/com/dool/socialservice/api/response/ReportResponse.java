package com.dool.socialservice.api.response;

import com.dool.socialservice.db.domain.Report;
import com.dool.socialservice.db.domain.ReportStatus;
import com.dool.socialservice.db.domain.ReportType;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Data
@Builder
public class ReportResponse {
    private Long id;
    private String userId;
    private Long diaryId;
    private ReportStatus reportStatus;
    private ReportType reportType;

    public static ReportResponse of(Report report){
        ReportResponse response = ReportResponse.builder()
                .id(report.getId())
                .userId(report.getUserId())
                .diaryId(report.getDiary().getId())
                .reportStatus(report.getReportStatus())
                .reportType(report.getReportType())
                .build();
        return response;
    }
}
