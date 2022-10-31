package com.dool.userservice.db.repository;

import com.dool.userservice.db.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
