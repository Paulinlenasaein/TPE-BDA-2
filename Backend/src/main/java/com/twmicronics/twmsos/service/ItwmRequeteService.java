package com.twmicronics.twmsos.service;

import com.twmicronics.twmsos.entities.twmRequete;
import java.util.Date;
import org.springframework.data.domain.Page;

/**
 *
 * @author paulinlenasaein
 */
public interface ItwmRequeteService {

    /**
     * stocke la requete passé en paramètre dans la base de données
     *
     * @param requete requete à stocker
     * @return la requete enregistré dans l'entrepot
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmRequete createOne(twmRequete requete) throws DataAccessException;

    /**
     * recherche la requete ayant un identifiant donné
     *
     * @param id identifiant de la requete
     * @return la requete correspondante
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmRequete findOne(Long id) throws DataAccessException;

    /**
     * supprime la requete passé en paramètre et présent dans la base de données
     *
     * @param id identifiant de la requete à supprimer
     * @throws DataAccessException si un événement non prévu survient
     */
    public void deleteOne(Long id) throws DataAccessException;

    /**
     * met à jour la requete passé en paramètre. La requete doit être déjà
     * présent dans la BDD
     *
     * @param requete requete à mettre à jour
     * @return la requete mis à jour
     * @throws DataAccessException si un événement non prévu survient
     */
    public twmRequete updateOne(twmRequete requete) throws DataAccessException;

    /**
     * renvoie la liste des requetes stockés dans la base de données.
     *
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return la liste des requetes de la BDD
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmRequete> findAll(int from, int to) throws DataAccessException;

    /**
     * recherche les requetes d'un client donné
     *
     * @param user client concerné
     * @return les requetes du client passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmRequete> findOneByClient(String user) throws DataAccessException;

    /**
     * recherche les requetes d'un administrateur donné
     *
     * @param id identifiant de l'administrateur concerné
     * @return les requetes de l'administrateur passé en paramètre
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmRequete> findOneByAdmin(Long id) throws DataAccessException;

    /**
     * recherche les requetes envoyées à une date donné donnée
     *
     * @param dateEnvoi date d'envoi de la requete
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les requetes correspondantes
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmRequete> findAllByDateEnvoi(Date dateEnvoi, int from, int to) throws DataAccessException;

    /**
     * recherche les requete ou réponses envoyées par un client
     *
     * @param user client concerné
     * @param status status du message (requête ou réponse)
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les requetes correspondantes
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmRequete> findAllByClientAndStatus(String user, int status, int from, int to) throws DataAccessException;

    /**
     * recherche les requete ou réponses envoyées par un administrateur
     *
     * @param admin administrateur concerné
     * @param status status du message (requête ou réponse)
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les requetes correspondantes
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmRequete> findAllByAdminAndStatus(String admin, int status, int from, int to) throws DataAccessException;

    /**
     * recherche les requetes ayant un status donnée (en vente ou pas)
     *
     * @param status status du message (requête ou réponse)
     * @param from numéro de la page initiale
     * @param to nombre de page à renvoyer
     * @return les requetes correspondante
     * @throws DataAccessException si un événement non prévu survient
     */
    public Page<twmRequete> findAllByStatus(int status, int from, int to) throws DataAccessException;
}
