package com.incubateind.hack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.incubateind.hack.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
