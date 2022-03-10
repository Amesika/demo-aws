package com.amesika.quizzapi.controllers;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

    private static Logger logger = LogManager.getLogger(WelcomeController.class);
    
    @GetMapping
    public String getIndex() {
        logger.info("Welcome - Quizz-Api");
        return "Welcome - Quizz-Api";
    }
}
