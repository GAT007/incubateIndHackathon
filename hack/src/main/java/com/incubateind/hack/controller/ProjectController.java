package com.incubateind.hack.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.incubateind.hack.exception.ResourceNotFoundException;
import com.incubateind.hack.model.Project;
import com.incubateind.hack.repository.ProjectRepository;

@RestController
public class ProjectController {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	@GetMapping("/projects")
	public Page<Project> getAllProjects(Pageable pageable)
	{
		return projectRepository.findAll(pageable);
	}
	
	@PostMapping("/projects")
	public Project createProject(@Valid @RequestBody Project project)
	{
		return projectRepository.save(project);
	}
	
	@PutMapping("/projects/{projectId}")
	public Project updateProject(@PathVariable Long projectId, @Valid @RequestBody Project postRequest)
	{
		return projectRepository.findById(projectId).map( project -> {
			project.setTitle(postRequest.getTitle());
			project.setDescription(postRequest.getDescription());
			return projectRepository.save(project);
		}).orElseThrow(()-> new ResourceNotFoundException("Project Id " + projectId + "Not Found!"));
	}

}
