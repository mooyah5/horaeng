package com.dool.characterservice.db.domain;

import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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
    @OnDelete(action = OnDeleteAction.CASCADE)
    private UserCharacter userCharacter;
    @ManyToOne
    @JoinColumn(name = "mission_id", referencedColumnName = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Mission mission;
}
