package com.angularproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angularproject.model.Certificate;

public interface CertificateRepository extends JpaRepository<Certificate, Integer>
{

}

