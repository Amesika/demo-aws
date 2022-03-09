package com.amesika.quizzapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {
    
    @GetMapping
    public String getIndex() {
        return "Welcome - Quizz-Api";
    }
}
