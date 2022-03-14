package com.amesika.quizzapi.controllers;

import java.util.List;
import com.amesika.quizzapi.model.UtilisateurDto;
import com.amesika.quizzapi.services.UtilisateurService;

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
@RequestMapping("/utilisateur")
public class UtilisateurController {

  @Autowired
  UtilisateurService utilisateurSrv;

  private static Logger logger = LogManager.getLogger(UtilisateurController.class);

  @GetMapping
  public ResponseEntity<?> getUtilisateur() {
    logger.info("Récupération des utilisateurs");
    List<UtilisateurDto> utilisateurDto = utilisateurSrv.list();
    return new ResponseEntity<>(utilisateurDto, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getActivity(@PathVariable("id") Long utilisateurDtoId) {
    logger.info("Récupération d'un utilisateur");
    UtilisateurDto utilisateurDto = utilisateurSrv.get(utilisateurDtoId);
    return new ResponseEntity<>(utilisateurDto, HttpStatus.OK);
  }

  @PostMapping()
    public ResponseEntity<?> createActivity(@RequestBody UtilisateurDto utilisateurDto) {
		logger.info("Création d'un utilisateur");
		UtilisateurDto newUtilisateurDto = utilisateurSrv.add(utilisateurDto);
		return new ResponseEntity<>(newUtilisateurDto, HttpStatus.OK);
	}

  @PutMapping()
  public ResponseEntity<?> updateActivity(@RequestBody UtilisateurDto utilisateurDto) {
    logger.info("Modification d'un utilisateur");
    UtilisateurDto updateUtilisateurDto = utilisateurSrv.update(utilisateurDto);
    return new ResponseEntity<>( updateUtilisateurDto, HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteActivity(@PathVariable("id") Long utilisateurDtoId) {
    logger.info("Suppression d'un utilisateur");
    utilisateurSrv.delete(utilisateurDtoId);
    return new ResponseEntity<>("Supprimer", HttpStatus.OK);
  }
}
