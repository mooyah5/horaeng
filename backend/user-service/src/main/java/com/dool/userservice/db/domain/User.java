package com.dool.userservice.db.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Random;

@Entity
@Getter
@Setter
@Table(name = "user")
@Data
@NoArgsConstructor
public class User {
    @Id
    @NotNull
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
        this.name = makeNickname();
        this.refreshToken = "";
    }

    public static String makeNickname(){
        String[] first = {"개발하는","졸린","신난","배고픈","착한","나쁜","재밌는","귀여운"};
        String[] second = {"라면","치킨","콜라","사이다","비타민","감자"};

        return first[(int)(Math.random()*10000)%first.length] + second[(int)(Math.random()*10000)%second.length];
    }
}
