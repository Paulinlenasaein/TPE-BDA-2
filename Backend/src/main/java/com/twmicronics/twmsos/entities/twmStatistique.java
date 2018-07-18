package com.twmicronics.twmsos.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import lombok.Data;

/**
 *
 * @author paulinlenasaein
 */
@Entity
@Data
public class twmStatistique implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(columnDefinition = "bigint unsigned not null default 0")
    private Long nbre_prod;
    
    @NotNull
    private Double recette;
    
    @Temporal(TemporalType.DATE)
    private Date dateJour; 
}
