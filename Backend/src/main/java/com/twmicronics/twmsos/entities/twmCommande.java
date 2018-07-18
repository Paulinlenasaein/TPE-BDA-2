package com.twmicronics.twmsos.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.Data;

/**
 *
 * @author paulinlenasaein
 */
@Entity
@Data
public class twmCommande implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @ManyToOne(cascade = CascadeType.REMOVE, optional = false)
    private twmUser client;
    
    @OneToOne(optional = false, cascade = CascadeType.REMOVE)
    private twmPanier panier;
    
    @OneToOne(optional = false)
    private twmEtat etat;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateCommande;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateLivraison;
    
}
