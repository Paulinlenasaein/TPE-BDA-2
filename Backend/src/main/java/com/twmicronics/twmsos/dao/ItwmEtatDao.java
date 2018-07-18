package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmEtat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author paulinlenasaein
 */
@Repository
public interface ItwmEtatDao extends JpaRepository<twmEtat, Integer> {
    
    /**
     * retourne l'etat des produits donné
     *
     * @param stateName etat du produit recherché
     * @return un objet twmEtat
     */
    public twmEtat findByStateNameIgnoreCase(String stateName);
}
