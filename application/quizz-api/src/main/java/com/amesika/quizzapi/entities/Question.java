package com.amesika.quizzapi.entities;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter; 
import lombok.NoArgsConstructor;
import lombok.Setter; 
import lombok.ToString;

@Entity
@Table(name="question")
@NoArgsConstructor
@ToString
@AllArgsConstructor
@Setter
@Getter
public class Question {
       
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column()
    String titre;

    @Column()
    String detail;

    @Column()
    String repdex;

    @ManyToOne
    @JoinColumn(name="sujet_id", insertable = false, updatable = false)
    Sujet sujet;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name="question_id")
    List<Reponse> reponses = new ArrayList<>();


}
