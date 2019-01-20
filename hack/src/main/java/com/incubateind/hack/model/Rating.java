package com.incubateind.hack.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity(name = "rating")
@Table(name = "rating")
public class Rating {

	@EmbeddedId
	private RatingId id;

	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("userId")
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("skillId")
	private Skill skill;

	@Column(name = "stars")
	private Float value;

	private Rating() {
	}

	public Rating(User user, Skill skill) {
		this.user = user;
		this.skill = skill;
		this.id = new RatingId(user.getId(), skill.getId());
	}

	public RatingId getId() {
		return id;
	}

	public void setId(RatingId id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

	public Float getValue() {
		return value;
	}

	public void setValue(Float value) {
		this.value = value;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;

		if (o == null || getClass() != o.getClass())
			return false;

		Rating that = (Rating) o;
		return Objects.equals(user, that.user) && Objects.equals(skill, that.skill);
	}

	@Override
	public int hashCode() {
		return Objects.hash(user, skill);
	}

}
