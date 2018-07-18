package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmProduit;
import com.twmicronics.twmsos.entities.twmPromotion;
import java.util.Date;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author paulinlenasaein
 */
@Repository
public interface ItwmPromotionDao extends JpaRepository<twmPromotion, Long>{
    
    /**
     * retourne les promotions d'un produit donné
     *
     * @param produit produit en promotion ou qui était en promotion
     * @param page pour la pagination des résultats
     * @return une page d'objets twmPromotion
     */
    public Page<twmPromotion> findByProduit(twmProduit produit, Pageable page);
    
    /**
     * retourne les promotions étant dans un etat donné (en promotion ou pas)
     *
     * @param etat etat de la promotion (1 : en cours de promotion et 0: sinon)
     * @param page pour la pagination des résultats
     * @return une page d'objets twmPromotion
     */
    public Page<twmPromotion> findByState(int etat, Pageable page);
    
    /**
     * retourne les promotions ayant une durée donné
     *
     * @param duree durée de la promotion
     * @param page pour la pagination des résultats
     * @return une page d'objets twmPromotion
     */
    public Page<twmPromotion> findByDureePromo(int duree, Pageable page);
    
    /**
     * retourne les promotions devant débutées à une date donné
     *
     * @param dateDebut date de debut de la promotion
     * @param page pour la pagination des résultats
     * @return une page d'objets twmPromotion
     */
    public Page<twmPromotion> findByDateDebut(Date dateDebut, Pageable page);
    
    /**
     * retourne les promotions devant prendre fin à une date donné
     *
     * @param dateFin date de fin de la promotion
     * @param page pour la pagination des résultats
     * @return une page d'objets twmPromotion
     */
    public Page<twmPromotion> findByDateFin(Date dateFin, Pageable page);
    
}
