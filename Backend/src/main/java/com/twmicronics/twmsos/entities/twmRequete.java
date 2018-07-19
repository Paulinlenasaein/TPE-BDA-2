package com.twmicronics.twmsos.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

/**
 *
 * @author paulinlenasaein
 */
@Entity
@Data
public class twmRequete implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @OneToOne
    private twmUser client;
    
    @OneToOne
    private twmUser admin;
    
    @NotNull(message = "Le message d'une requête ou d'une réponse ne doit pas être vide(minimum 10 caractères)")
    @Length(min = 10)
    private String message;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateEnvoi;
    
    @Column(columnDefinition = "int(1) unsigned not null")
    private int status;
}
