package com.credvault.controller;

import com.credvault.model.Certificate;
import com.credvault.repository.CertificateRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/certificates")
public class CertificateController {

    private final CertificateRepository certificateRepository;

    public CertificateController(CertificateRepository certificateRepository) {
        this.certificateRepository = certificateRepository;
    }

    @GetMapping
    public List<Certificate> listCertificates() {
        return certificateRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Certificate> createCertificate(@RequestBody Certificate certificate) {
        certificate.setIssueDate(certificate.getIssueDate() == null ? LocalDate.now() : certificate.getIssueDate());
        certificate.setVerified(certificate.getVerified() == null ? Boolean.TRUE : certificate.getVerified());
        return ResponseEntity.ok(certificateRepository.save(certificate));
    }
}
