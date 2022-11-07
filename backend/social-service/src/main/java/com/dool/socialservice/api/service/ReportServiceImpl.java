package com.dool.socialservice.api.service;

import com.dool.socialservice.api.request.CreateReportRequest;
import com.dool.socialservice.db.domain.Diary;
import com.dool.socialservice.db.domain.Report;
import com.dool.socialservice.db.domain.ReportStatus;
import com.dool.socialservice.db.repository.DiaryRepository;
import com.dool.socialservice.db.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ReportServiceImpl implements ReportService{

    private final ReportRepository reportRepository;
    private final DiaryRepository diaryRepository;

    @Override
    public List<Report> getAllReport() {
        return reportRepository.getAll();
    }

    @Override
    public List<Report> getReportByUserId(String userId) {
        return reportRepository.getByUserId(userId);
    }

    @Override
    public Report getReport(Long id) {
        return reportRepository.get(id);
    }

    @Override
    public Report createReport(CreateReportRequest request) {

        Diary diary = diaryRepository.get(request.getDiaryId());

        Report report = new Report();
        report.setUserId(request.getUserId());
        report.setDiary(diary);
        report.setReportType(request.getReportType());

        reportRepository.create(report);

        return report;
    }

    @Override
    public void allowReport(Long id) {
        Report report = reportRepository.get(id);
        report.setReportStatus(ReportStatus.ALLOW);
    }

    @Override
    public void cancleReport(Long id) {
        Report report = reportRepository.get(id);
        report.setReportStatus(ReportStatus.CANCLE);
    }
}
