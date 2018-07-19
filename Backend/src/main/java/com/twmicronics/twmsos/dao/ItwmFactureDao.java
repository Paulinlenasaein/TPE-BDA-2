package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmFacture;
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
public interface ItwmFactureDao extends JpaRepository<twmFacture, String> {

    /**
     * retourne une facture ayant un numéro donné
     *
     * @param numFacture numéro unique de la facture recherchée
     * @return un objet twmFacture
     */
    public twmFacture findByNumFacture(String numFacture);

    /**
     * retourne les factures d'un client donné
     *
     * @param client client à qui appartiennent les facture
     * @param page pour la pagination des résultats
     * @return une page d'objets twmFacture
     */
    public Page<twmFacture> findByClient(twmUser client, Pageable page);

    /**
     * retourne la facture correspondant à un panier donné
     *
     * @param panier panier de la facture recherchée
     * @return un objet twmFacture
     */
    public twmFacture findByPanier(twmPanier panier);

    /**
     * retourne les factures payées à une date donnée
     *
     * @param dateAchat date de payement
     * @param page pour la pagination des résultats
     * @return une page d'objets twmFacture
     */
    public Page<twmFacture> findByDateAchat(Date dateAchat, Pageable page);

    /**
     * retourne les factures donné au client à une date donnée
     *
     * @param dateFacturation date de la facturation
     * @param page pour la pagination des résultats
     * @return une page d'objets twmFacture
     */
    public Page<twmFacture> findByDateFacturation(Date dateFacturation, Pageable page);
}
