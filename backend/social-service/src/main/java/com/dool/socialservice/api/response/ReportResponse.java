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
    private String reporterId;
    private Long diaryId;
    private ReportStatus reportStatus;
    private ReportType reportType;
    private String diaryContent;
    private String respondentId;
    private String imgUrl;

    public static ReportResponse of(Report report){
        ReportResponse response = ReportResponse.builder()
                .id(report.getId())
                .reporterId(report.getReporterId())
                .diaryId(report.getDiary().getId())
                .reportStatus(report.getReportStatus())
                .reportType(report.getReportType())
                .diaryContent(report.getDiary().getContent())
                .respondentId(report.getDiary().getUserId())
                .imgUrl(report.getDiary().getImgUrl())
                .build();
        return response;
    }
}
