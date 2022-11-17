package com.dool.socialservice.db.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Setter@Getter

@Data
@Entity
@Table(name = "diary")
@NoArgsConstructor
public class Diary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private Long charactersId;
    @NotNull
    private String userId;
    @NotNull
    private Long userCharacterId;
    @NotNull
    private String content;
    @NotNull
    private String imgUrl;
    private boolean isMain;
    private LocalDateTime createDate;

    @PrePersist
    public void createDate(){
        this.createDate = LocalDateTime.now();
    }
}
