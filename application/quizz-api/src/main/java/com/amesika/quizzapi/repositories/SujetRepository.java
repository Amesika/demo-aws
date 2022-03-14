package com.amesika.quizzapi.repositories;

import com.amesika.quizzapi.entities.Sujet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SujetRepository extends JpaRepository<Sujet, Long>{

    Sujet findByTitre(String titre);
}
