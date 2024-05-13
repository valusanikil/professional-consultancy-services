package com.angularproject.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.angularproject.exception.ResourceNotFoundException;
import com.angularproject.model.Certificate;
import com.angularproject.model.Employee;
import com.angularproject.repository.CertificateRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")	
public class CertificateController {

	@Autowired
	private CertificateRepository certificateRepository;
	
	@GetMapping("/certificates")
	public List<Certificate> getAllCertificate()
	{
		return certificateRepository.findAll();
	}
	
	@PostMapping("/certificates")
	public Certificate createCertificate(@RequestBody Certificate certificate)
	{
		return certificateRepository.save(certificate);
	}
	
	@GetMapping("/certificates/{certificateId}")
	public ResponseEntity<Certificate> getCertificateById(@PathVariable int certificateId) {
		Certificate certificate=certificateRepository.findById(certificateId).
				orElseThrow(()->new ResourceNotFoundException("Certificate not exist with id:"+certificateId));
		return ResponseEntity.ok(certificate);
	}
	
	@DeleteMapping("/certificates/{certificateId}")
	public ResponseEntity<Map<String,Boolean>> deleteCertificate(@PathVariable int certificateId){
		Certificate certificate=certificateRepository.findById(certificateId).
				orElseThrow(()->new ResourceNotFoundException("Certificate not exist with id:"+certificateId));
		certificateRepository.delete(certificate);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	
	}
	@PutMapping("/certificates/{certificateId}")
	public ResponseEntity<Certificate> updateEmployee(@PathVariable int certificateId,@RequestBody Certificate certificateDetails){
		Certificate certificate=certificateRepository.findById(certificateId).
				orElseThrow(()->new ResourceNotFoundException("Certificate not exist with id:"+certificateId));
		
		certificate.setTitle(certificateDetails.getTitle());
		certificate.setCategory(certificateDetails.getCategory());
		certificate.setDescription(certificateDetails.getDescription());
		
		Certificate updatedCertificate=certificateRepository.save(certificate);
		return ResponseEntity.ok(updatedCertificate);
	}
}

