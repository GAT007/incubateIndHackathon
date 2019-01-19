package com.incubateind.hack.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.incubateind.hack.exception.ResourceNotFoundException;
import com.incubateind.hack.model.Task;
import com.incubateind.hack.repository.ProjectRepository;
import com.incubateind.hack.repository.TaskRepository;

@RestController
public class TaskController {

	@Autowired
	private TaskRepository taskRepository;

	@Autowired
	private ProjectRepository projectRepository;

	@CrossOrigin
	@GetMapping("/projects/{projectId}/tasks")
	public Page<Task> getAllTasksByProjectId(@PathVariable(value = "projectId") Long projectId, Pageable pageable) {
		return taskRepository.findByProjectId(projectId, pageable);
	}

	@CrossOrigin
	@PostMapping("/projects/{projectId}/tasks")
	public Task createTask(@PathVariable (value = "projectId") Long projectId, @Valid @RequestBody Task task) {
		return taskRepository.findById(projectId).map(project -> {
			task.setProject(project);
			return taskRepository.save(task);
		}).orElseThrow(()-> new ResourceNotFoundException("Project id " + projectId + "Not Found!"));
	}

	@CrossOrigin
	@PutMapping("/projects/{projectId}/tasks/{taskId}")
	public Task updateTask(@PathVariable (value="projectId") Long projectId, @PathVariable (value="taskId") Long taskId
			,@Valid @RequestBody Task taskRequest) {
		if(!projectRepository.existsById(projectId)) {
			throw new ResourceNotFoundException("Project Id " + projectId + "Not Found!");
		}
		
		return taskRepository.findById(taskId).map( task -> {
			task.setDeadlineDate(taskRequest.getDeadlineDate());
			task.setDescription(taskRequest.getDescription());
			task.setExperiencePoints(taskRequest.getExperiencePoints());
			task.setNoOfPeople(taskRequest.getNoOfPeople());
			task.setTitle(taskRequest.getTitle());
			task.setStatus(false);
			return taskRepository.save(task);
		}).orElseThrow(()->new ResourceNotFoundException("Task Id" + taskId + "Not Found!"));
	}

}
