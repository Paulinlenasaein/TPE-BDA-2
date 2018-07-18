package com.twmicronics.twmsos.entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

/**
 *
 * @author paulinlenasaein
 */
@Entity
@Data
public class twmProduit implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @NotNull
    @Length(min = 2, max = 100)
    @Column(unique = true)
    private String nomProd;
    
    @Column(nullable = true)
    private String description;
    
    @ManyToOne(optional = false)
    private twmTypeProduit type;
    
    @NotNull
    private Double prixUnit;
    
    @Pattern(regexp = ".*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.png",
        message="Seulement les images de type JPEG, PNG ou GIF son supportées.")
    @Length(max = 50)
    private String image;
    
    @Column(columnDefinition = "int(1) unsigned not null default 1")
    private int state;
}
