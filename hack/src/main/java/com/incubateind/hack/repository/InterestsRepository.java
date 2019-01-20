package com.incubateind.hack.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.incubateind.hack.model.Interests;

@Repository
public interface InterestsRepository extends JpaRepository<Interests, Long>{
	
//	Page<Interests> findByUserId(Long userId, Pageable pageable);

}
