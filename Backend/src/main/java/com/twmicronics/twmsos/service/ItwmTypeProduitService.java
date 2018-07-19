package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmTypeProduit;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmTypeProduitService {
    
    /**
     * stocke un type passé en paramètre dans la base de données
     *
     * @param type type à stocker
     * @return le type enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmTypeProduit createOne(twmTypeProduit type) throws DataAccessException;

    /**
     * recherche un type de produit ayant un nom donné
     *
     * @param id identifiant du type dans la BDD
     * @return le type correspondant
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmTypeProduit findOne(int id) throws DataAccessException;

    /**
     * supprime un type passé en paramètre, dans la base de données
     *
     * @param id identifiant du type à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(int id) throws DataAccessException;

    /**
     * met à jour un type passé en paramètre. Il doit être déjà présent
     * dans la BDD
     *
     * @param type type à mettre à jour
     * @return le type mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmTypeProduit updateOne(twmTypeProduit type) throws DataAccessException;

    /**
     * renvoie la liste des types stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des types de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmTypeProduit> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche les types ayant le nom passé en paramètre
     *
     * @param typeName nom du type de produits à rechercher
     * @return les types de produits dont le nom est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmTypeProduit findOneByType(String typeName) throws DataAccessException;
}
