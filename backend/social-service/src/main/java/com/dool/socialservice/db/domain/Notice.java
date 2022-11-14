package com.dool.socialservice.db.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Data
@Getter
@Setter
@Table(name = "notice")
@NoArgsConstructor
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String title;
    @NotNull
    private String content;
    private LocalDateTime createDate;

    @NotNull
    private String userId;

    @PrePersist
    public void createDate(){
        this.createDate = LocalDateTime.now();
    }
}
