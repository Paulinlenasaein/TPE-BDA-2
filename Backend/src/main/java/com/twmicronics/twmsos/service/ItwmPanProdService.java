package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmPanProd;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmPanProdService {

    /**
     * stocke le produit mis dans le panier passé en paramètre dans la base de
     * données
     *
     * @param produit produit à mettre dans un panier
     * @return le produit mis dans le panier enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmPanProd createOne(twmPanProd produit) throws DataAccessException;

    /**
     * recherche le produit mis dans le panier ayant un identifiant donné
     *
     * @param id identifiant du produit mis dans un panier
     * @return le produit mis dans le panier ayant l'id correspondant
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmPanProd findOne(Long id) throws DataAccessException;

    /**
     * supprime le produit mis dans le panier et dont l'identifiant est passé en
     * paramètre
     *
     * @param id identifiant du produit mis dans le panier
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(Long id) throws DataAccessException;

    /**
     * met à jour le produit mis dans le panier passé. La produit doit être déjà
     * présent dans le panier
     *
     * @param produit produit présent dans le panier, à mettre à jour
     * @return le produit mis dans le panier qui est mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmPanProd updateOne(twmPanProd produit) throws DataAccessException;

    /**
     * renvoie la liste des produits présent dans un panier et stockés dans la
     * base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des produits d'un panier
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPanProd> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche les produits d'un client passé en paramètre
     *
     * @param indexPan identifiant du panier
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les produits appartenant au panier passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmPanProd> findAllByPanier(String indexPan, int from, int to) throws DataAccessException;
}
