package com.twmicronics.twmsos.entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import lombok.Data;

/**
 *
 * @author paulinlenasaein
 */
@Entity
@Data
public class twmPanProd implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @ManyToOne
    private twmPanier panier;
    
    @OneToOne
    private twmProduit produit;
    
    @Column(columnDefinition = "int unsigned not null default 1")
    private int nbreExempl;
    
    @NotNull(message = "Le prix totol du produit doit être spécifié")
    private Double prixTotal;
}
