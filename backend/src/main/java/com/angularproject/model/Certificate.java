package com.angularproject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="certificate")
public class Certificate {

	@Id
	@Column(name="Cert_ID")
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int certificateId;
	
	@Column(name="Title")
	private String title;
	
	@Column(name="Category")
	private String category;
	
	@Column(name="Description")
	private String description;

	public Certificate() {
	
	}

	
	public Certificate(String title, String category, String description) {
	
		this.title = title;
		this.category = category;
		this.description = description;
	}


	public int getCertificateId() {
		return certificateId;
	}

	public void setCertificateId(int certificateId) {
		this.certificateId = certificateId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
	
}
