package com.amesika.quizzapi.model;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SujetDto {
  
    private long id;
    private String titre;
    private List<QuestionDto> questions;

    public List<QuestionDto> getQuestions() {
        return questions;
    }

    public void setQuestions(List<QuestionDto> questions) {
        this.questions =questions;
    }

    public void addQuestion(QuestionDto questionDto) {
        if (questions == null) {
            questions = new ArrayList<>();
        }
        questions.add(questionDto);
    }
}
