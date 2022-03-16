package com.amesika.quizzapi.entities;

import javax.persistence.Column;
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
@Table(name="reponse")
@NoArgsConstructor
@ToString
@AllArgsConstructor
@Setter
@Getter
public class Reponse {
       
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column()
    String titre;

    @Column()
    String repdex;

    @ManyToOne
    @JoinColumn(name="question_id", insertable = false, updatable = false)
    Question question;

}
