package com.amesika.quizzapi.model;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ScoreDto {

    private long id;
    private SujetStrDto sujet;
    private UtilisateurDto utilisateur;
    private double score;
    private List<QuestionReponseDto> questionReponses = new ArrayList<>();

}
