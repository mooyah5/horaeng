package com.dool.socialservice.db.repository;

import com.dool.socialservice.db.domain.Notice;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class NoticeRepository {
    private final EntityManager em;

    public Notice create(Notice notice){
        em.persist(notice);

        return notice;
    }

    public Notice get(Long id){
        return em.find(Notice.class, id);
    }

    public List<Notice> getAll(){
        return em.createQuery("select n from Notice n order by n.id desc", Notice.class)
                .getResultList();
    }

    public void delete(Notice notice){
        em.remove(notice);
    }


}
