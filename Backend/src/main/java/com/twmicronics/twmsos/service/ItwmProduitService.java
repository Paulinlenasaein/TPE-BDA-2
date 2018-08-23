package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmProduit;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmProduitService {

    /**
     * stocke le produit passé en paramètre dans la base de données
     *
     * @param produit produit à stocker
     * @return le produit enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmProduit createOne(twmProduit produit) throws DataAccessException;

    /**
     * recherche le produit ayant un identifiant donné
     *
     * @param id identifiant du produit
     * @return le produit correspondant
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmProduit findOne(Long id) throws DataAccessException;

    /**
     * supprime le produit passé en paramètre et présent dans la base de données
     *
     * @param id identifiant du produit à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(Long id) throws DataAccessException;

    /**
     * met à jour le produit passé en paramètre. La produit doit être déjà
     * présent dans la BDD
     *
     * @param produit produit à mettre à jour
     * @return le produit mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmProduit updateOne(twmProduit produit) throws DataAccessException;
    
    /**
     * renvoie la liste des produits stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des produits de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmProduit> findAll(int from, int to) throws DataAccessException;

    /**
     * renvoie la liste des produits stockés dans la base de données par ordre
     * ascendant de nom.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des produits de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmProduit> findAllAsc(int from, int to) throws DataAccessException;

    /**
     * renvoie la liste des produits stockés dans la base de données par ordre
     * descendant de nom.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des produits de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmProduit> findAllDesc(int from, int to) throws DataAccessException;
    
    /**
     * renvoie la liste des produits stockés dans la base de données par prix unitaire ascendant.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des produits de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmProduit> findAllPrixUnitAsc(int from, int to) throws DataAccessException;

    /**
     * renvoie la liste des produits stockés dans la base de données par prix unitaire descendant.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des produits de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmProduit> findAllPrixUnitDesc(int from, int to) throws DataAccessException;

    /**
     * recherche les produits ayant un nom dobbé
     *
     * @param nomProd nom du produit
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des produits dont le nom est semblable à celui passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmProduit> findAllByNomProd(String nomProd, int from, int to) throws DataAccessException;

    /**
     * recherche les produit ayant un solde donné
     *
     * @param type identifiant du type de produit
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les produits ayant le type passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmProduit> findAllByType(int type, int from, int to) throws DataAccessException;

    /**
     * recherche les produits ayant un prix unitaire donnée
     *
     * @param prixUnit prix unitaire du produit
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les produits dont le prix unitaire est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmProduit> findAllByPrixUnit(Double prixUnit, int from, int to) throws DataAccessException;

    /**
     * recherche les produits ayant un état donnée (en vente ou pas)
     *
     * @param state etat du produit
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les produits correspondante
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmProduit> findAllByState(int state, int from, int to) throws DataAccessException;
}
