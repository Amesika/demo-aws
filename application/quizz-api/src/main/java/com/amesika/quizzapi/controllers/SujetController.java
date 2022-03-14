package com.amesika.quizzapi.controllers;

import java.util.List;
import com.amesika.quizzapi.model.SujetDto;
import com.amesika.quizzapi.services.SujetService;

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
@RequestMapping("/sujet")
public class SujetController {

  @Autowired
  SujetService sujetSrv;

  private static Logger logger = LogManager.getLogger(SujetController.class);

  @GetMapping
  public ResponseEntity<?> getSujet() {
    logger.info("Récupération des sujets");
    List<SujetDto> sujetDto = sujetSrv.list();
    return new ResponseEntity<>(sujetDto, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getActivity(@PathVariable("id") Long sujetDtoId) {
    logger.info("Récupération d'un sujet");
    SujetDto sujetDto = sujetSrv.get(sujetDtoId);
    return new ResponseEntity<>(sujetDto, HttpStatus.OK);
  }

  @PostMapping()
    public ResponseEntity<?> createActivity(@RequestBody SujetDto sujetDto) {
		logger.info("Création d'un sujet");
		SujetDto newSujetDto = sujetSrv.add(sujetDto);
		return new ResponseEntity<>(newSujetDto, HttpStatus.OK);
	}

  @PutMapping()
  public ResponseEntity<?> updateActivity(@RequestBody SujetDto sujetDto) {
    logger.info("Modification d'un sujet");
    SujetDto updateSujetDto = sujetSrv.update(sujetDto);
    return new ResponseEntity<>( updateSujetDto, HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteActivity(@PathVariable("id") Long sujetDtoId) {
    logger.info("Suppression d'un sujet");
    sujetSrv.delete(sujetDtoId);
    return new ResponseEntity<>("Supprimer", HttpStatus.OK);
  }
}
