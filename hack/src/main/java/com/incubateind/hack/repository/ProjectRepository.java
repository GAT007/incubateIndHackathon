package com.incubateind.hack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.incubateind.hack.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
