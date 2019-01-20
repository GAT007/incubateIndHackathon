package com.incubateind.hack.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class RatingId implements Serializable {
	@Column(name = "user_id")
	private Long userId;

	@Column(name = "skill_id")
	private Long skillId;

	private RatingId() {
	}

	public RatingId(Long userId, Long skillId) {
		this.userId = userId;
		this.skillId = skillId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getSkillId() {
		return skillId;
	}

	public void setSkillId(Long skillId) {
		this.skillId = skillId;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;

		if (o == null || getClass() != o.getClass())
			return false;

		RatingId that = (RatingId) o;
		return Objects.equals(userId, that.userId) && Objects.equals(skillId, that.skillId);
	}

	@Override
	public int hashCode() {
		return Objects.hash(userId, skillId);
	}

}
