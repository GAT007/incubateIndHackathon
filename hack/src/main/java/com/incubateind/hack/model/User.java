package com.incubateind.hack.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user")
public class User extends AuditModel
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(max=300)
	private String username;
	
	@NotNull
	private String password;
	
	@NotNull
	private String college;
	
	@NotNull
	private Integer experiencePoints;
	
	private boolean isAdmin;
	
	private String taskId;	
	
	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	@ManyToOne(fetch = FetchType.LAZY, optional = true)
	@JoinColumn(name = "task_id", nullable = true)
	@OnDelete(action = OnDeleteAction.NO_ACTION)
	@JsonIgnore
	private Task task;
	
	@OneToMany(
	        mappedBy = "user",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	    )
	    private List<Rating> skills = new ArrayList<>();
	
	@ManyToMany(fetch = FetchType.LAZY,
			cascade = {
					CascadeType.PERSIST,
					CascadeType.MERGE
			})
	@JoinTable(name="user_interests",
	joinColumns = {@JoinColumn(name = "user_id")},
	inverseJoinColumns = {@JoinColumn(name="interest_id")})
	private  Set<Interests> interests = new HashSet<>();	
	
	public Set<Interests> getInterests() {
		return interests;
	}

	public void setInterests(Set<Interests> interests) {
		this.interests = interests;
	}

	public User() {
    }
 
    public User(String username, String password, String college, Integer experiencePoints) {
        this.username = username;
        this.password = password;
        this.college = college;
        this.experiencePoints = experiencePoints;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCollege() {
		return college;
	}

	public void setCollege(String college) {
		this.college = college;
	}

	public Integer getExperiencePoints() {
		return experiencePoints;
	}

	public void setExperiencePoints(Integer experiencePoints) {
		this.experiencePoints = experiencePoints;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public Task getTask() {
		return task;
	}

	public void setTask(Task task) {
		this.task = task;
	}

	
	public void addSkill(Skill skill) {
        Rating rating = new Rating(this, skill);
        skills.add(rating);
        skill.getUsers().add(rating);
    }
	
	public List<Rating> getSkills() {
		return skills;
	}

	public void setSkills(List<Rating> skills) {
		this.skills = skills;
	}

	public void removeSkill(Skill skill) {
        for (Iterator<Rating> iterator = skills.iterator();
             iterator.hasNext(); ) {
            Rating rating = iterator.next();
 
            if (rating.getUser().equals(this) &&
            		rating.getSkill().equals(skill)) {
                iterator.remove();
                rating.getSkill().getUsers().remove(rating);
                rating.setUser(null);
                rating.setSkill(null);
            }
        }
    }
}
