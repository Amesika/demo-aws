package com.amesika.quizzapi.repositories;

import java.util.List;

import com.amesika.quizzapi.entities.Score;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoreRepository extends JpaRepository<Score, Long>{

    List<Score> findByUtilisateurId(Long utilisateurId); 
}
