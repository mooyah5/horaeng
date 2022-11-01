package com.dool.characterservice.db.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CharacterMission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime createdDate;
    private boolean isClear;
    @ManyToOne
    @JoinColumn(name = "character_id", referencedColumnName = "id")
    private UserCharacter userCharacter;
    @ManyToOne
    @JoinColumn(name = "mission_id", referencedColumnName = "id")
    private Mission mission;
}
