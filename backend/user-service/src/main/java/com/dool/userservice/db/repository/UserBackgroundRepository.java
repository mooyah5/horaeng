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

    public List<UserBackground> getUsersBackgroundByUserId(String userId){
        return em.createQuery("select ub from UserBackground ub where ub.user.id = :userId ")
                .setParameter("userId", userId)
                .getResultList();
    }

    public List<UserBackground> getUsersBackgroundByUserIdAndBackgroundId(String userId, Long backgroundId){
        return em.createQuery("select ub from UserBackground ub where ub.user.id = :userId and ub.background =:backgroundId ")
                .setParameter("userId", userId)
                .setParameter("backgroundId", backgroundId)
                .getResultList();
    }

    public void add(UserBackground userBackground){
        em.persist(userBackground);
    }


}
