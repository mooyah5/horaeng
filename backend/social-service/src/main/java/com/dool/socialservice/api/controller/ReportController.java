package com.dool.socialservice.api.controller;

import com.dool.socialservice.api.request.CreateReportRequest;
import com.dool.socialservice.api.response.ReportResponse;
import com.dool.socialservice.api.service.ReportService;
import com.dool.socialservice.db.domain.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/social-service/report")
@CrossOrigin("*")
public class ReportController {

    final private ReportService reportService;

    @Autowired
    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @GetMapping
    public ResponseEntity<List<ReportResponse>> getAllReport(){
        Iterable<Report> list = reportService.getAllReport();

        List<ReportResponse> result = new ArrayList<>();

        list.forEach(v->{
            result.add(ReportResponse.of(v));
        });

        if(result.size() == 0){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/item/{id}")
    public ResponseEntity<ReportResponse> getReport(@PathVariable("id") Long id){
        Report report = reportService.getReport(id);

        if(report == null){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(ReportResponse.of(report));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ReportResponse>>getReportByUserId(@PathVariable("userId") String userId){
        List<Report> list = reportService.getReportByUserId(userId);

        List<ReportResponse> result = new ArrayList<>();

        list.forEach(v->{
            result.add(ReportResponse.of(v));
        });

        if(result.size() == 0){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping
    public ResponseEntity<ReportResponse> createReport(@RequestBody CreateReportRequest request){
        Report report = reportService.createReport(request);

        if(report == null){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(ReportResponse.of(report));
    }

    @PutMapping("/allow/{id}")
    public ResponseEntity allowReport(@PathVariable("id") Long id){
        reportService.allowReport(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    @PutMapping("/cancle/{id}")
    public ResponseEntity cancleReport(@PathVariable("id") Long id){
        reportService.cancleReport(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
