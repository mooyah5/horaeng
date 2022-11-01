package com.dool.userservice.db.repository;

import com.dool.userservice.db.domain.UserBackground;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserBackgroundRepository{

    private final EntityManager em;

    public List<UserBackground> getUsersBackground(String userId){
        return em.createQuery("select ub from UserBackground ub where ub.user.id = :userId ")
                .setParameter("userId", userId)
                .getResultList();
    }

    public void add(UserBackground userBackground){
        em.persist(userBackground);
    }


}
