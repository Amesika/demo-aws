package com.amesika.quizzapi.services;

import java.util.ArrayList;
import java.util.List;

import com.amesika.quizzapi.entities.Sujet;
import com.amesika.quizzapi.mapper.SujetMapper;
import com.amesika.quizzapi.model.SujetDto;
import com.amesika.quizzapi.repositories.SujetRepository;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SujetService {

    @Autowired
    SujetRepository sujetRepo;

    private SujetMapper mapper= Mappers.getMapper(SujetMapper.class);

    // Liste des sujets
    public List<SujetDto> list(){
        List<SujetDto> sujets;
        List<Sujet> list= new ArrayList<>();
        sujetRepo.findAll().forEach(list::add);
        sujets = mapper.map(list);
        return sujets;
    }

    // Créer un sujet
    public SujetDto add(SujetDto sujetDto){
        Sujet sujet = mapper.dtoToSujet(sujetDto);
        sujet = sujetRepo.saveAndFlush(sujet);
        return mapper.sujetToDto(sujet);
    }

    // Modifier un sujet
    public SujetDto update(SujetDto sujetDto){
        Sujet sujet = mapper.dtoToSujet(sujetDto);
        sujet = sujetRepo.saveAndFlush(sujet);
        return mapper.sujetToDto(sujet);
    }

    // Récupération d'un sujet
    public SujetDto get(Long sujetId){
        Sujet sujet = sujetRepo.findById(sujetId).get();
        return mapper.sujetToDto(sujet);
    }

    // Suppimer un sujet
    public void delete(Long sujetId){
        sujetRepo.deleteById(sujetId);
    }

    // Se connecter 
    public void connexion(){
        
    }
}
