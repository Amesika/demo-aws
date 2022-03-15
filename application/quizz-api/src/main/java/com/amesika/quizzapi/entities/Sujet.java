package com.amesika.quizzapi.entities;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="sujet")
@NoArgsConstructor
@ToString
@AllArgsConstructor
@Setter
@Getter
public class Sujet {
       
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column()
    String titre;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name="sujet_id")
    List<Question> questions = new ArrayList<>();
    
}
