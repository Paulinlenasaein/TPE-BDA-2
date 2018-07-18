package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmProduit;
import com.twmicronics.twmsos.entities.twmTypeProduit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author paulinlenasaein
 */
@Repository
public interface ItwmProduitDao extends JpaRepository<twmProduit, Long> {

    /**
     * retourne un produit ayant un nom donné
     *
     * @param nomProd nom du produit recherché
     * @return un objet twmProduit
     */
    public twmProduit findByNomProdIgnoreCase(String nomProd);

    /**
     * retourne les produits ayant un type donné
     *
     * @param type type du produit recherché
     * @param page pour la pagination des résultats
     * @return une page d'objets twmProduit
     */
    public Page<twmProduit> findByType(twmTypeProduit type, Pageable page);
    
    /**
     * retourne un produit ayant un prix unitaire donné
     *
     * @param prixUnit prix unitaire du produit recherché
     * @param page pour la pagination des résultats
     * @return une page d'objets twmProduit
     */
    public Page<twmProduit> findByPrixUnit(Double prixUnit, Pageable page);

    /**
     * retourne les produits ayant un état (sur le marché ou non) donné
     *
     * @param state etat du produit recherché
     * @param page pour la pagination des résultats
     * @return une page d'objets twmProduit
     */
    public Page<twmProduit> findByState(int state, Pageable page);
}
