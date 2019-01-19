package com.incubateind.hack;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HackApplication {

	public static void main(String[] args) {
		SpringApplication.run(HackApplication.class, args);
	}
	
	@Bean
	ApplicationRunner init(TaskRepository repository) {
		return args -> {
			Stream.of("Powerpoint", "Do Shoppping", "Do Homework", "Finish reading").forEach(name -> {
				Task task = new Task();
				task.setName(name);
				repository.save(task);
			});
			repository.findAll().forEach(System.out::println);
		};
	}

}

