package com.twmicronics.twmsos.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import lombok.Data;

/**
 *
 * @author paulinlenasaein
 */
@Entity
@Data
public class twmFacture implements Serializable {
    
    @Id
    @Pattern(regexp = "^[twm_Fac_][0-9]+$",
        message="Index de la facture invalide")
    private String numFacture;
    
    @OneToOne
    private twmUser client;
    
    @OneToOne
    private twmPanier panier;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateAchat;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateFacturation;
    
    @NotNull(message = "La signature de l'entreprise doit être spécifié")
    @Pattern(regexp = ".*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.png",
        message="Seulement les images de type JPEG, PNG ou GIF son supportées.")
    private String signTwm;
}
