package com.incubateind.hack;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Data
@NoArgsConstructor
public class Task {
	
	@Id @GeneratedValue
	private Long id;
	private @NonNull String name;
	private @NonNull Date date;
	private @NonNull Integer experience;
	private boolean isToBeDone;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Integer getExperience() {
		return experience;
	}
	public void setExperience(Integer experience) {
		this.experience = experience;
	}
	public boolean isToBeDone() {
		return isToBeDone;
	}
	public void setToBeDone(boolean isToBeDone) {
		this.isToBeDone = isToBeDone;
	}
}
