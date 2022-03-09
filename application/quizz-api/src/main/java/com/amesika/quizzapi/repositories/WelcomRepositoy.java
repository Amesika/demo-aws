package com.amesika.quizzapi.repositories;

import com.amesika.quizzapi.entities.Welcome;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WelcomRepositoy extends JpaRepository<Welcome, Long>{

}
