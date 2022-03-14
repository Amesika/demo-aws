package com.amesika.quizzapi.services;

import java.util.ArrayList;
import java.util.List;

import com.amesika.quizzapi.entities.Utilisateur;
import com.amesika.quizzapi.mapper.UtilisateurMapper;
import com.amesika.quizzapi.model.UtilisateurDto;
import com.amesika.quizzapi.repositories.UtilisateurRepository;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepo;

    private UtilisateurMapper mapper= Mappers.getMapper(UtilisateurMapper.class);

    // Liste des utilisateurs
    public List<UtilisateurDto> list(){
        List<UtilisateurDto> utilisateurs;
        List<Utilisateur> list= new ArrayList<>();
        utilisateurRepo.findAll().forEach(list::add);
        utilisateurs = mapper.map(list);
        return utilisateurs;
    }

    // Créer un utilisateur
    public UtilisateurDto add(UtilisateurDto utilisateurDto){
        Utilisateur utilisateur = mapper.dtoToUtilisateur(utilisateurDto);
        utilisateur = utilisateurRepo.saveAndFlush(utilisateur);
        return mapper.utilisateurToDto(utilisateur);
    }

    // Modifier un utilisateur
    public UtilisateurDto update(UtilisateurDto utilisateurDto){
        Utilisateur utilisateur = mapper.dtoToUtilisateur(utilisateurDto);
        utilisateur = utilisateurRepo.saveAndFlush(utilisateur);
        return mapper.utilisateurToDto(utilisateur);
    }

    // Récupération d'un utilisateur
    public UtilisateurDto get(Long utilisateurId){
        Utilisateur utilisateur = utilisateurRepo.findById(utilisateurId).get();
        return mapper.utilisateurToDto(utilisateur);
    }

    // Suppimer un utilisateur
    public void delete(Long utilisateurId){
        utilisateurRepo.deleteById(utilisateurId);
    }

    // Se connecter 
    public void connexion(){
        
    }
}
