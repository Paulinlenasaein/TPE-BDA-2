package com.twmicronics.twmsos.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
public class twmPanier implements Serializable {
    
    @Id
    @Pattern(regexp = "^[twm_pan_][0-9]+$",
        message="Index du panier invalide")
    private String indexPan;
    
    @OneToMany(mappedBy = "panier")
    @Column(insertable = false)
    private List<twmPanProd> panprod;
    
    @NotNull(message = "Le solde total du panier doit être spécifié")
    private Double soldeTotal;
    
    @NotNull(message = "Le client à qui appartient ce panier doit être spécifié")
    @OneToOne(optional = false)
    private twmUser client;
    
    @Temporal(TemporalType.DATE)
    private Date dateJour;
    
    @Column(columnDefinition = "int(1) unsigned not null default 0")
    private int ack;
}
