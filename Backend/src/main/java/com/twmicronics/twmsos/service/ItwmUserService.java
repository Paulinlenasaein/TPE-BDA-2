package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmRole;
import com.twmicronics.twmsos.entities.twmUser;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmUserService {

    /**
     * stocke un utilisateur passé en paramètre dans la base de données
     *
     * @param user utilisateur à stocker
     * @return l'utilisateur enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmUser createOne(twmUser user) throws DataAccessException;

    /**
     * recherche un utilisateur ayant un nom d'utilisateur donné
     *
     * @param username nom d'utilisateur
     * @return l'utilisateur correspondant
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmUser findOne(String username) throws DataAccessException;

    /**
     * supprime un utilisateur passé en paramètre, dans la base de données
     *
     * @param username nom d'utilisateur à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(String username) throws DataAccessException;

    /**
     * met à jour un utilisateur passé en paramètre. Il doit être déjà présent
     * dans la BDD
     *
     * @param user utilisateur à mettre à jour
     * @return l'utilisateur mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmUser updateOne(twmUser user) throws DataAccessException;

    /**
     * renvoie la liste des utilisateurs stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des utilisateurs de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmUser> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche les utilisateurs ayant le nom passé en paramètre
     *
     * @param firstName nom de des utilisateurs à rechercher
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les utilisateurs dont le nom est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmUser> findAllByFirstName(String firstName, int from, int to) throws DataAccessException;

    /**
     * recherche les utilisateurs ayant le nom passé en paramètre
     *
     * @param firstName nom de des utilisateurs à rechercher
     * @param lastName prenom de des utilisateurs à rechercher
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les utilisateurs dont le nom est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmUser> findAllByFirstNameAndLastName(String firstName, String lastName, int from, int to) throws DataAccessException;

    /**
     * recherche l'utilisateurs ayant l'adresse mail passé en paramètre
     *
     * @param email adresse mail de l'utilisateurs à rechercher
     * @return l'utilisateur dont l'adresse mail est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmUser findOneByEmail(String email) throws DataAccessException;

    /**
     * recherche l'utilisateurs ayant le numero de téléphone passé en paramètre
     *
     * @param telephone numero de téléphone de utilisateur recherché
     * @return l'utilisateur dont le numero de téléphone est passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmUser findOneByTelephone(String telephone) throws DataAccessException;

    /**
     * recherche les utilisateurs ayant etat donné
     *
     * @param state etat du compte utilisateur (1: activé et 0: bloqué)
     * @return les utilisateurs corresponsants
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmUser> findAllByState(int state) throws DataAccessException;

    /**
     * recherche les utilisateurs ayant role donné
     *
     * @param role des utilisateurs recherchés
     * @return les utilisateurs corresponsants
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmUser> findAllByRole(twmRole role) throws DataAccessException;

}
