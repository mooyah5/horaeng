package com.dool.socialservice.db.repository;

import com.dool.socialservice.db.domain.Report;
import com.dool.socialservice.db.domain.ReportStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ReportRepository {

    final EntityManager em;

    public Report get(Long id){
        return em.find(Report.class, id);
    }

    public List<Report> getAll(){
        return em.createQuery("select r from Report r order by r.id desc")
                .getResultList();
    }

    public List<Report> getByUserId(String userId){
        return em.createQuery("select r from Report r where r.userId = :userId order by r.id desc")
                .setParameter("userId", userId)
                .getResultList();
    }

    public void delete(Long id){
        Report report = em.find(Report.class, id);
        em.remove(report);
    }

    public void create(Report report){
        em.persist(report);
    }
}
