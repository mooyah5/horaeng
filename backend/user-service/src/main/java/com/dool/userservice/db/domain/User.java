package com.dool.userservice.db.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "user")
@Data
@NoArgsConstructor
public class User {
    @Id
    private String id;
    private String password;
    private String name;
    private String refreshToken;
    private Long reportCnt;
    private Long point;
    private RoleType role;


    public User(String id) {
        super();
        this.id = id;
        this.password = "";
        this.role = RoleType.User;
        this.reportCnt = 0L;
        this.point = 0L;
        this.name = "random";
        this.refreshToken = "";
    }
}
