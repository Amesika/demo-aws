package com.amesika.quizzapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;  
import lombok.NoArgsConstructor;
import lombok.Setter;  
import lombok.ToString;

@NoArgsConstructor
@ToString
@AllArgsConstructor
@Setter
@Getter
public class QuestionReponseDto {
       
    private long id;
    private QuestionStrDto question;
    private ReponseStrDto reponse;
    //private ScoreDto score;

}
