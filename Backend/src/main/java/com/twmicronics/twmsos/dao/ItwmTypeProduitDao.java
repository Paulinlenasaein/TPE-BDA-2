package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmTypeProduit;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmTypeProduitDao extends JpaRepository<twmTypeProduit, Integer>{
    
     /**
     * retourne le nombre d'utilisateurs ayant un rôle donné
     *
     * @param type type du produit
     * @return un objet twmTypeProduit
     */
    public twmTypeProduit findByType(String type);
}
