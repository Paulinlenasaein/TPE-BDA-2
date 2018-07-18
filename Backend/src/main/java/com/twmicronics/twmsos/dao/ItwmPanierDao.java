package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmPanier;
import com.twmicronics.twmsos.entities.twmUser;
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
public interface ItwmPanierDao extends JpaRepository<twmPanier, String>{
    
    /**
     * retourne un panier ayant un numéro donné
     *
     * @param indexPan index ou numero unique du panier recherché
     * @return un objet twmPanier
     */
    public twmPanier findByIndexPan(String indexPan);
    
    /**
     * retourne les paniers d'un client donné
     *
     * @param client client ayant les panier recherchés
     * @param page pour la pagination des résultats
     * @return une page d'objets twmPanier
     */
    public Page<twmPanier> findByClient(twmUser client, Pageable page);
    
    /**
     * retourne les paniers ayant un solde total donné
     *
     * @param solde solde des paniers recherchés
     * @param page pour la pagination des résultats
     * @return une page d'objets twmPanier
     */
    public Page<twmPanier> findBySoldeTotal(Double solde, Pageable page);
    
    /**
     * retourne un panier ayant un numéro donné
     *
     * @param dateJour date de constitution des paniers recherchés
     * @param page pour la pagination des résultats
     * @return une page d'objets twmPanier
     */
    public Page<twmPanier> findByDateJour(Date dateJour, Pageable page);
    
    /**
     * retourne les paniers validés (1 pour acquitté et 0 sinon)
     *
     * @param ack acquittement du panier recherché
     * @param page pour la pagination des résultats
     * @return une page d'objets twmPanier
     */
    public Page<twmPanier> findByAck(int ack, Pageable page);
}
