package com.amesika.quizzapi.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="welcome")
public class Welcome {

    public Welcome() {
  
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column()
    String message;
    
}
