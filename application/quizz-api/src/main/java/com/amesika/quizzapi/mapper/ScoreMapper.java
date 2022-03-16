package com.amesika.quizzapi.mapper;

import java.util.List;

import com.amesika.quizzapi.entities.Score;
import com.amesika.quizzapi.model.ScoreDto;

import org.mapstruct.Mapper;

@Mapper
public interface ScoreMapper {

    Score dtoToScore(ScoreDto scoreDto);
        
    ScoreDto scoreToDto(Score score);

    List<ScoreDto> map(List<Score> scores);
}
