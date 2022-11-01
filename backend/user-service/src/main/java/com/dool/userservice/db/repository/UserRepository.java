package com.dool.userservice.db.repository;

import com.dool.userservice.db.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class UserRepository{

    private final EntityManager em;

    public User findById(String id){
        User user = em.find(User.class, id);

        return user;
    }

    public void add(User user){
        em.persist(user);
    }

    public void del(String id){
        User user = em.find(User.class, id);
        em.remove(user);
    }

}
