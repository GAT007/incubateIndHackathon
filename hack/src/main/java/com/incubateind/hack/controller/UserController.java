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
import com.incubateind.hack.model.User;
import com.incubateind.hack.repository.TaskRepository;
import com.incubateind.hack.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private TaskRepository taskRepository;

	@CrossOrigin
	@GetMapping("/users")
	public Page<User> getAllUsers(Pageable pageable) {
		return userRepository.findAll(pageable);
	}

	@CrossOrigin
	@PostMapping("/users")
	public User createUser(@Valid @RequestBody User user) {
		return userRepository.save(user);
	}

	@CrossOrigin
	@PutMapping("/users/{userId}")
	public User updateUser(@PathVariable Long userId, @Valid @RequestBody User postRequest) {
		return userRepository.findById(userId).map(user -> {
			user.setUsername(postRequest.getUsername());
			user.setCollege(postRequest.getCollege());
			user.setExperiencePoints(postRequest.getExperiencePoints());
			user.setPassword(postRequest.getPassword());
			return userRepository.save(user);
		}).orElseThrow(() -> new ResourceNotFoundException("User Id " + userId + " not found!"));

	}
	
	@CrossOrigin
	@PutMapping("/users/{userId}/tasks/{taskId}")
	public User assignTaskToUser(@PathVariable Long userId, @PathVariable Long taskId, @Valid @RequestBody Task task)
	{
		if(!taskRepository.existsById(taskId)) {
			throw new ResourceNotFoundException("Task id " +taskId + " not found! ");
		}
		return userRepository.findById(userId).map(user -> {
			user.setTaskId(Long.toString((taskId)));
			return userRepository.save(user);
		}).orElseThrow(()-> new ResourceNotFoundException("Project id " + taskId + " Not Found!"));
}
}
