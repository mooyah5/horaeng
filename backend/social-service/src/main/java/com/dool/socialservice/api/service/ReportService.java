package com.dool.socialservice.api.service;

import com.dool.socialservice.api.request.CreateReportRequest;
import com.dool.socialservice.db.domain.Report;

import java.util.List;

public interface ReportService {

    List<Report> getAllReport();
    List<Report> getReportByUserId(String userId);
    Report getReport(Long id);
    Report createReport(CreateReportRequest request);
    void allowReport(Long id);
    void cancleReport(Long id);

}
