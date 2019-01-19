package com.incubateind.hack.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.incubateind.hack.model.Skill;

@Repository
public interface SkillsRepository extends JpaRepository<Skill, Long>{
	
	Page<Skill> findByUserId(Long userId, Pageable pageable);
	
}
