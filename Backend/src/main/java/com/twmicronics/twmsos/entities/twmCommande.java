package com.twmicronics.twmsos.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Pattern;
import lombok.Data;

/**
 *
 * @author paulinlenasaein
 */
@Entity
@Data
public class twmCommande implements Serializable {
    
   @Id
    @Pattern(regexp = "^[twm_com_][0-9]+$",
        message="Index de la commande invalide")
    private String indexCom;
    
    @ManyToOne(cascade = CascadeType.REMOVE, optional = false)
    private twmUser client;
    
    @OneToOne(optional = false, cascade = CascadeType.REMOVE)
    private twmPanier panier;
    
    @OneToOne(optional = false)
    private twmEtat etat;
    
    @Temporal(TemporalType.DATE)
    private Date dateCommande;
    
    @Temporal(TemporalType.DATE)
    private Date dateLivraison;
    
}
