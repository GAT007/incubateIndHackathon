package com.incubateind.hack.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.NaturalId;
import org.hibernate.annotations.NaturalIdCache;

@Entity
@Table(name="skills")
@NaturalIdCache
@Cache (usage = org.hibernate.annotations.CacheConcurrencyStrategy.READ_WRITE)

public class Skill {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NaturalId
	private String skillName;
	
	@OneToMany(
	        mappedBy = "skill",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	    )
	    private List<Rating> users = new ArrayList<>();
	
	public Skill() {
    }
 
    public Skill(String name) {
        this.skillName = name;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSkillName() {
		return skillName;
	}

	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}
	
	public List<Rating> getUsers() {
		return users;
	}

	public void setUsers(List<Rating> users) {
		this.users = users;
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Skill skill = (Skill) o;
        return Objects.equals(skillName, skill.skillName);
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(skillName);
    }
}
