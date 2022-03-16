package com.amesika.quizzapi.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="utilisateur")
@NoArgsConstructor
@ToString
@AllArgsConstructor
@Setter
@Getter
public class Utilisateur {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column()
    String nom;

    @Column()
    String prenom;

    @Column()
    String role;

    @OneToMany(mappedBy = "utilisateur")
    List<Score> scores = new ArrayList<>();
}
