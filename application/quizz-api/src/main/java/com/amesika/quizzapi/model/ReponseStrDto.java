package com.amesika.quizzapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;  
import lombok.NoArgsConstructor;
import lombok.Setter;  
import lombok.ToString;

@NoArgsConstructor
@ToString
@AllArgsConstructor
@Setter
@Getter
public class ReponseStrDto {
       
    private long id;
    private String titre;
    private String repdex;

}
