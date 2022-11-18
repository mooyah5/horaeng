package com.dool.socialservice.db.repository;

import com.dool.socialservice.db.domain.Diary;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class DiaryRepository {
    private final EntityManager em;
    private final int PAGINATION_ITEM = 12;

    public Diary get(Long id){
        return em.find(Diary.class, id);
    }

    public List<Diary> getByCharacters(Long charactersId, Long lastId){
        return em.createQuery("select d from Diary d where d.charactersId = :charactersId and d.id < :lastId " +
                        "order by d.id desc")
                .setParameter("charactersId", charactersId)
                .setParameter("lastId",lastId)
                .setMaxResults(PAGINATION_ITEM)
                .getResultList();
    }

    public List<Diary> getByUserCharacter(Long userCharacterId){
        return em.createQuery("select d from Diary d where d.userCharacterId = :userCharacterId and" +
                        " d.isMain = :isMain ")
                .setParameter("userCharacterId", userCharacterId)
                .setParameter("isMain", 1)
                .getResultList();
    }
    public List<Diary> getAll(Long lastId){
        return em.createQuery("select d from Diary d " +
                "where d.id < :lastId " +
                "order by d.id desc")
                .setParameter("lastId", lastId)
                .setMaxResults(PAGINATION_ITEM)
                .getResultList();
    }

    public void create(Diary diary){
        em.persist(diary);
    }

    public void delete(Diary diary){
        em.remove(diary);
    }

}
