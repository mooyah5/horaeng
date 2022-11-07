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

    public Diary get(Long id){
        return em.find(Diary.class, id);
    }

    public List<Diary> getByCharacters(Long charactersId){
        return em.createQuery("select d from Diary d where d.charactersId = :charactersId")
                .setParameter("charactersId", charactersId)
                .getResultList();
    }

    public List<Diary> getByUserCharacter(Long userCharacterId){
        return em.createQuery("select d from Diary d where d.userCharacterId = :userCharacterId order by d.id desc")
                .setParameter("userCharacterId", userCharacterId)
                .getResultList();
    }
    public List<Diary> getAll(){
        return em.createQuery("select d from Diary d order by d.id desc").getResultList();
    }

    public void create(Diary diary){
        em.persist(diary);
    }

    public void delete(Diary diary){
        em.remove(diary);
    }

}
