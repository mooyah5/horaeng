package com.dool.characterservice.db.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class CharacterMission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime createdDate;
    private boolean isClear;
    @ManyToOne
    @JoinColumn(name = "user_character_id", referencedColumnName = "id")
    private UserCharacter userCharacter;
    @ManyToOne
    @JoinColumn(name = "mission_id", referencedColumnName = "id")
    private Mission mission;
}
