package com.amesika.quizzapi.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;  
import lombok.NoArgsConstructor;
import lombok.Setter;  
import lombok.ToString;

@Entity
@Table(name="questionreponse")
@NoArgsConstructor
@ToString
@AllArgsConstructor
@Setter
@Getter
public class QuestionReponse {
       
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @ManyToOne
    @JoinColumn(name="question_id", nullable =false)
    Question question;

    @ManyToOne
    @JoinColumn(name="reponse_id", nullable =false)
    Reponse reponse;

    @ManyToOne
    @JoinColumn(name="score_id", insertable = false, updatable = false)
    Score score;

}
