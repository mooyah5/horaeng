package com.dool.userservice.db.repository;

import com.dool.userservice.db.domain.Background;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class BackgroundRepository {

    private final EntityManager em;

    public Iterable<Background> getAll(){
        return em.createQuery("select b from Background b", Background.class)
                .getResultList();
    }

    public Background get(Long id){
        return em.find(Background.class, id);
    }
}
