package com.dool.characterservice.db.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CharacterMission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate createdDate;
    private boolean isClear;
    @ManyToOne
    @JoinColumn(name = "user_character_id", referencedColumnName = "id")
    private UserCharacter userCharacter;
    @ManyToOne
    @JoinColumn(name = "mission_id", referencedColumnName = "id")
    private Mission mission;
}
