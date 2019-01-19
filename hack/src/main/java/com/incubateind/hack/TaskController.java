package com.incubateind.hack;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaskController {
	
	private TaskRepository repository;
	
	public TaskController(TaskRepository repository)
	{
		this.repository = repository;
	}
	
	@GetMapping("/tasks")
	public Collection<Task> tasks() {
		return repository.findAll().stream()
				.filter(this::isToBeDone)
				.collect(Collectors.toList());
	}
	
	private boolean isToBeDone(Task task)
	{
		return task.isToBeDone()!=true;
	}

}
