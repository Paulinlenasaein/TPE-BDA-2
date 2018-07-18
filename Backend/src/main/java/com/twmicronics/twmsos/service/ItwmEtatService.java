package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmEtat;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmEtatService {
    
    /**
     * stocke l'état de solvabilité passé en paramètre dans la base de données
     *
     * @param etat état à stocker
     * @return l'état enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmEtat createOne(twmEtat etat) throws DataAccessException;

    /**
     * recherche l'état de solvabilité ayant un identifiant donné
     *
     * @param id identifiant de l'état
     * @return l'état correspondant
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmEtat findOne(int id) throws DataAccessException;

    /**
     * supprime l'état de solvabilité passé en paramètre et présent dans la base de données
     *
     * @param id identifiant de l'état à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(int id) throws DataAccessException;

    /**
     * met à jour l'état de solvabilité passé en paramètre. L'etat doit être déjà présent
     * dans la BDD
     *
     * @param etat état à mettre à jour
     * @return l'état mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmEtat updateOne(twmEtat etat) throws DataAccessException;

    /**
     * renvoie la liste des etats stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des états de solvabilité de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmEtat> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche les états de solvabilités d'un client passé en paramètre
     *
     * @param stateName nom de l'état à rechercher
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les états de solvabilité dont le nom est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmEtat findAllByStateName(String stateName, int from, int to) throws DataAccessException;   
}
