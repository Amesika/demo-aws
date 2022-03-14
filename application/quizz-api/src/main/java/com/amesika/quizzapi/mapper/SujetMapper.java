package com.amesika.quizzapi.mapper;

import java.util.List;

import com.amesika.quizzapi.entities.Sujet;
import com.amesika.quizzapi.model.SujetDto;

import org.mapstruct.Mapper;


@Mapper
public interface SujetMapper {

    Sujet dtoToSujet(SujetDto sujetDto);
    
    SujetDto sujetToDto(Sujet sujet);

    List<SujetDto> map(List<Sujet> sujets);
}
