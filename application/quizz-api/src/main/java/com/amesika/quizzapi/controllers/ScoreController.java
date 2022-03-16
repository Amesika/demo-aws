package com.amesika.quizzapi.controllers;

import java.util.List;
import com.amesika.quizzapi.model.ScoreDto;
import com.amesika.quizzapi.services.ScoreService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/score")
public class ScoreController {

  @Autowired
  ScoreService scoreSrv;

  private static Logger logger = LogManager.getLogger(ScoreController.class);

  @GetMapping
  public ResponseEntity<?> getScore() {
    logger.info("Récupération des scores");
    List<ScoreDto> scoreDto = scoreSrv.list();
    return new ResponseEntity<>(scoreDto, HttpStatus.OK);
  }

  @GetMapping("utilisateur/{id}")
  public ResponseEntity<?> getScoreUtilisateur(@PathVariable("id") Long utilisateurDtoId) {
    logger.info("Récupération des scores d'un utilisateur");
    List<ScoreDto> scoreDto = scoreSrv.listUsers(utilisateurDtoId);
    return new ResponseEntity<>(scoreDto, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getOneScore(@PathVariable("id") Long scoreDtoId) {
    logger.info("Récupération d'un score");
    ScoreDto scoreDto = scoreSrv.get(scoreDtoId);
    return new ResponseEntity<>(scoreDto, HttpStatus.OK);
  }

  @PostMapping()
    public ResponseEntity<?> createScore(@RequestBody ScoreDto scoreDto) {
		logger.info("Création d'un score");
		ScoreDto newScoreDto = scoreSrv.add(scoreDto);
		return new ResponseEntity<>(newScoreDto, HttpStatus.OK);
	}

  @PutMapping()
  public ResponseEntity<?> updateScore(@RequestBody ScoreDto scoreDto) {
    logger.info("Modification d'un score");
    ScoreDto updateScoreDto = scoreSrv.update(scoreDto);
    return new ResponseEntity<>( updateScoreDto, HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteScore(@PathVariable("id") Long scoreDtoId) {
    logger.info("Suppression d'un score");
    scoreSrv.delete(scoreDtoId);
    return new ResponseEntity<>("Supprimer", HttpStatus.OK);
  }
}
