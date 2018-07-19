package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmPanProd;
import com.twmicronics.twmsos.entities.twmPanier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author paulinlenasaein
 */
@Repository
public interface ItwmPanProdDao extends JpaRepository<twmPanProd, Long> {

    /**
     * retourne les produits d'un panier donné
     *
     * @param panier numéro unique de la facture recherchée
     * @param page pour la pagination des résultats
     * @return une page d'objets twmPanProd
     */
    public Page<twmPanProd> findByPanier(twmPanier panier, Pageable page);

}
