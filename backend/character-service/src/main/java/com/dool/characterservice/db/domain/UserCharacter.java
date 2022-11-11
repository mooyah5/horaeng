package com.dool.characterservice.db.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserCharacter{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userId;
    @ManyToOne
    @JoinColumn(name = "characters_id", referencedColumnName = "id")
    private Characters characters;
    private String nickname;
    private CharacterLevel level;
    private LocalDate createdDate;
    private LocalDate completed_date;
    private boolean status;
}
