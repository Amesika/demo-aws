package com.amesika.quizzapi.mapper;

import java.util.List;

import com.amesika.quizzapi.entities.Utilisateur;
import com.amesika.quizzapi.model.UtilisateurDto;

import org.mapstruct.Mapper;


@Mapper
public interface UtilisateurMapper {

    Utilisateur dtoToUtilisateur(UtilisateurDto utilisateurDto);
    
    UtilisateurDto utilisateurToDto(Utilisateur utilisateur);

    List<UtilisateurDto> map(List<Utilisateur> utilisateurs);
}
