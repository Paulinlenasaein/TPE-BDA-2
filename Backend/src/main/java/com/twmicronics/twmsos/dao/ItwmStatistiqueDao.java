package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmStatistique;
import java.util.Date;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author paulinlenasaein
 */
@Repository
public interface ItwmStatistiqueDao extends JpaRepository<twmStatistique, Long>{
    
    /**
     * retourne les statistiques d'une date donnée
     *
     * @param dateJour date du jour auquel nous voulons avoir les statistiques
     * @return un objet twmStatistique
     */
    public twmStatistique findByDateJour(Date dateJour);
}
