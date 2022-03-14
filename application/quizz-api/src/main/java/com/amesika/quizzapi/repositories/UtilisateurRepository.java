package com.amesika.quizzapi.repositories;

import com.amesika.quizzapi.entities.Utilisateur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long>{

    Utilisateur findByNom(String nom);
}
