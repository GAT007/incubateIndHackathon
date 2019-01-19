package com.incubateind.hack.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.incubateind.hack.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{
	
	Page<Task> findByProjectId(Long projectId, Pageable pageable);
	Optional<Task> findByIdAndProjectId(Long id, Long projectId);

}
