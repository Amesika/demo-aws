package com.amesika.quizzapi.services;

import java.util.ArrayList;
import java.util.List;

import com.amesika.quizzapi.entities.QuestionReponse;
import com.amesika.quizzapi.entities.Score;
import com.amesika.quizzapi.mapper.ScoreMapper;
import com.amesika.quizzapi.model.ScoreDto;
import com.amesika.quizzapi.repositories.ScoreRepository;
import com.amesika.quizzapi.repositories.SujetRepository;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreService {

    @Autowired
    ScoreRepository scoreRepo;

    @Autowired
    SujetRepository sujetRepo;

    private ScoreMapper mapper = Mappers.getMapper(ScoreMapper.class);

    // Liste des scores
    public List<ScoreDto> list() {
        List<ScoreDto> scores;
        List<Score> list = new ArrayList<>();
        scoreRepo.findAll().forEach(list::add);
        scores = mapper.map(list);
        return scores;
    }

    // Liste des scores par utilisateur
    public List<ScoreDto> listUsers(Long utilisateurId) {
        List<ScoreDto> scores;
        List<Score> list = new ArrayList<>();
        scoreRepo.findByUtilisateurId(utilisateurId).forEach(list::add);
        scores = mapper.map(list);
        return scores;
    }

    // Créer un score
    public ScoreDto add(ScoreDto scoreDto) {
        Score score = mapper.dtoToScore(scoreDto);
        this.calculScore(score);
        score = scoreRepo.saveAndFlush(score);
        return mapper.scoreToDto(score);
    }

    // Modifier un score
    public ScoreDto update(ScoreDto scoreDto) {
        Score score = mapper.dtoToScore(scoreDto);
        this.calculScore(score);
        score = scoreRepo.saveAndFlush(score);
        return mapper.scoreToDto(score);
    }

    // Récupération d'un score
    public ScoreDto get(Long scoreId){
        Score score = scoreRepo.findById(scoreId).get();
        this.calculScore(score);
        score = scoreRepo.saveAndFlush(score);
        ScoreDto scoreDto = mapper.scoreToDto(score);
        return scoreDto;
    }

    // Suppimer un score
    public void delete(Long scoreId) {
        scoreRepo.deleteById(scoreId);
    }

    // Se connecter
    public void connexion() {

    }

    // Calcule du score
    public void calculScore(Score score) {
        float index = 0;
        float size = sujetRepo.getById(score.getSujet().getId()).getQuestions().size();
        double scoreValue = 0;
        for (QuestionReponse qr : score.getQuestionReponses()) {
            if (qr.getReponse().getRepdex().equals(qr.getQuestion().getRepdex())) {
                index++;
            }
        }
        if( size > 0){
         scoreValue = index * 100 / size ;   
         scoreValue = Math.round(scoreValue*100.0)/100.0;
        }
        score.setScore(scoreValue);
    }
}
