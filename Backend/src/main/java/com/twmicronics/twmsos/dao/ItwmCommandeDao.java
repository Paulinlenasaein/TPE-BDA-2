package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmCommande;
import com.twmicronics.twmsos.entities.twmEtat;
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
public interface ItwmCommandeDao extends JpaRepository<twmCommande, String> {
    
    /**
     * retourne une commande ayant un index donné
     *
     * @param indexCom index de la commande recherché
     * @return un objet twmCommande
     */
    public twmCommande findByIndexCom(String indexCom);
    
    /**
     * retourne les commande d'un client donné
     *
     * @param client client ayant effectué des commande
     * @return un objet twmCommande
     */
    public twmCommande findByClient(twmUser client);
    
    /**
     * retourne la commande correspondant à un panier donné
     *
     * @param panier panier de la commande recherché
     * @return un objet twmCommande
     */
    public twmCommande findByPanier(twmPanier panier);
    
    /**
     * retourne les commande ayant un etat de solvabilité donné
     *
     * @param etat etat de solvabilité de la commande
     * @param page pour la pagination des résultats
     * @return une page d'objets twmCommande
     */
    public Page<twmCommande> findByEtat(twmEtat etat, Pageable page);
    
    /**
     * retourne les commandes faites à une date donné
     *
     * @param dateCommande date de la commande
     * @param page pour la pagination des résultats
     * @return une page d'objets twmCommande
     */
    public Page<twmCommande> findByDateCommande(Date dateCommande, Pageable page);
    
    /**
     * retourne les commandes à livrer à une date donné
     *
     * @param dateLivraison date de la livraison
     * @param page pour la pagination des résultats
     * @return une page d'objets twmCommande
     */
    public Page<twmCommande> findByDateLivraison(Date dateLivraison, Pageable page);
}
