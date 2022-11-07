package com.dool.socialservice.db.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
@Data
@Table(name = "report")
@NoArgsConstructor
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diaryId", referencedColumnName = "id")
    private Diary diary;
    private ReportStatus reportStatus;
    private ReportType reportType;

    @PrePersist
    public void reportStatus(){
        this.reportStatus = ReportStatus.IN_PROGRESS;
    }

}
